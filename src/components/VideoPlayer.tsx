import { useEffect, useRef, useState } from 'react'

interface VideoPlayerProps {
    mp4Src: string
    webmSrc?: string
    poster?: string
    className?: string
}

const formatTime = (seconds: number) => {
    if (!Number.isFinite(seconds) || seconds < 0) {
        return '0:00'
    }

    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = Math.floor(seconds % 60)
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
}

function CustomSlider({
    value,
    onChange,
    className,
}: {
    value: number
    onChange: (value: number) => void
    className?: string
}) {
    const clamped = Math.min(Math.max(value, 0), 100)

    return (
        <div
            className={`relative h-1 w-full cursor-pointer rounded-full bg-white/20 ${className ?? ''}`}
            onClick={(event) => {
                const rect = event.currentTarget.getBoundingClientRect()
                const x = event.clientX - rect.left
                const percentage = (x / rect.width) * 100
                onChange(Math.min(Math.max(percentage, 0), 100))
            }}
            role="slider"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(clamped)}
            tabIndex={0}
            onKeyDown={(event) => {
                if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
                    event.preventDefault()
                    onChange(Math.min(clamped + 5, 100))
                }

                if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
                    event.preventDefault()
                    onChange(Math.max(clamped - 5, 0))
                }
            }}
        >
            <div
                className="absolute left-0 top-0 h-full rounded-full bg-white transition-[width] duration-200"
                style={{ width: `${clamped}%` }}
            />
        </div>
    )
}

function IconButton({
    onClick,
    children,
    label,
    active = false,
}: {
    onClick: () => void
    children: React.ReactNode
    label: string
    active?: boolean
}) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={label}
            className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-white transition-all duration-200 hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/40 ${
                active ? 'bg-black/60' : 'bg-transparent'
            }`}
        >
            {children}
        </button>
    )
}

function PlayIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
            <path d="M8 5.2a1 1 0 0 1 1.53-.85l10.2 6.3a1 1 0 0 1 0 1.7l-10.2 6.3A1 1 0 0 1 8 17.8V5.2z" />
        </svg>
    )
}

function PauseIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
            <path d="M7 5.5A1.5 1.5 0 0 1 8.5 4h1A1.5 1.5 0 0 1 11 5.5v13A1.5 1.5 0 0 1 9.5 20h-1A1.5 1.5 0 0 1 7 18.5v-13zm6 0A1.5 1.5 0 0 1 14.5 4h1A1.5 1.5 0 0 1 17 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 13 18.5v-13z" />
        </svg>
    )
}

function VolumeOffIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M15 8.5a6 6 0 0 1 0 7" />
            <path d="M17.5 6a9.5 9.5 0 0 1 0 12" />
            <path d="M4 10h3l4-4v12l-4-4H4z" fill="currentColor" stroke="none" />
            <path d="m19 5-14 14" />
        </svg>
    )
}

function VolumeLowIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M4 10h3l4-4v12l-4-4H4z" fill="currentColor" stroke="none" />
            <path d="M15 9.5a3.5 3.5 0 0 1 0 5" />
        </svg>
    )
}

function VolumeHighIcon() {
    return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M4 10h3l4-4v12l-4-4H4z" fill="currentColor" stroke="none" />
            <path d="M15 8.5a6 6 0 0 1 0 7" />
            <path d="M18 6a9.5 9.5 0 0 1 0 12" />
        </svg>
    )
}

export default function VideoPlayer({ mp4Src, webmSrc, poster, className }: VideoPlayerProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const videoRef = useRef<HTMLVideoElement>(null)
    const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

    const [isPlaying, setIsPlaying] = useState(false)
    const [volume, setVolume] = useState(1)
    const [progress, setProgress] = useState(0)
    const [isMuted, setIsMuted] = useState(false)
    const [playbackSpeed, setPlaybackSpeed] = useState(1)
    const [showControls, setShowControls] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [isFullscreen, setIsFullscreen] = useState(false)

    useEffect(() => {
        return () => {
            if (hideTimerRef.current) {
                clearTimeout(hideTimerRef.current)
            }
        }
    }, [])

    useEffect(() => {
        const syncFullscreenState = () => {
            setIsFullscreen(document.fullscreenElement === containerRef.current)
        }

        document.addEventListener('fullscreenchange', syncFullscreenState)
        return () => document.removeEventListener('fullscreenchange', syncFullscreenState)
    }, [])

    const keepControlsVisibleOnTouch = () => {
        setShowControls(true)
        if (hideTimerRef.current) {
            clearTimeout(hideTimerRef.current)
        }
        hideTimerRef.current = setTimeout(() => {
            setShowControls(false)
        }, 2400)
    }

    const togglePlay = async () => {
        if (!videoRef.current) {
            return
        }

        if (isPlaying) {
            videoRef.current.pause()
            setIsPlaying(false)
            return
        }

        try {
            await videoRef.current.play()
            setIsPlaying(true)
        } catch {
            setIsPlaying(false)
        }
    }

    const handleVolumeChange = (value: number) => {
        if (!videoRef.current) {
            return
        }

        const nextVolume = value / 100
        videoRef.current.volume = nextVolume
        videoRef.current.muted = nextVolume === 0
        setVolume(nextVolume)
        setIsMuted(nextVolume === 0)
    }

    const handleTimeUpdate = () => {
        if (!videoRef.current) {
            return
        }

        const nextDuration = Number.isFinite(videoRef.current.duration) ? videoRef.current.duration : 0
        const nextProgress = nextDuration > 0 ? (videoRef.current.currentTime / nextDuration) * 100 : 0
        setProgress(nextProgress)
        setCurrentTime(videoRef.current.currentTime)
        setDuration(nextDuration)
    }

    const handleSeek = (value: number) => {
        if (!videoRef.current || !videoRef.current.duration) {
            return
        }

        const seekTime = (value / 100) * videoRef.current.duration
        videoRef.current.currentTime = seekTime
        setProgress(value)
    }

    const toggleMute = () => {
        if (!videoRef.current) {
            return
        }

        const nextMuted = !isMuted
        videoRef.current.muted = nextMuted
        setIsMuted(nextMuted)

        if (nextMuted) {
            setVolume(0)
            return
        }

        const restoredVolume = volume > 0 ? volume : 1
        videoRef.current.volume = restoredVolume
        setVolume(restoredVolume)
    }

    const changeSpeed = (speed: number) => {
        if (!videoRef.current) {
            return
        }

        videoRef.current.playbackRate = speed
        setPlaybackSpeed(speed)
    }

    const toggleFullscreen = async () => {
        const container = containerRef.current
        const video = videoRef.current

        if (!container || !video) {
            return
        }

        if (!document.fullscreenElement) {
            try {
                await container.requestFullscreen()
                return
            } catch {
                // Continue with browser-specific video fallback.
            }

            const iosVideo = video as HTMLVideoElement & {
                webkitEnterFullscreen?: () => void
            }
            if (typeof iosVideo.webkitEnterFullscreen === 'function') {
                iosVideo.webkitEnterFullscreen()
            }
            return
        }

        if (document.fullscreenElement === container) {
            try {
                await document.exitFullscreen()
            } catch {
                // No-op; fullscreen exit can fail in restricted contexts.
            }
        }
    }

    return (
        <div
            ref={containerRef}
            className={`relative mx-auto w-full max-w-6xl overflow-hidden rounded-xl bg-[#11111198] shadow-[0_0_20px_rgba(0,0,0,0.2)] backdrop-blur-sm ${className ?? ''}`}
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
            onTouchStart={keepControlsVisibleOnTouch}
        >
            <video
                ref={videoRef}
                className="w-full"
                poster={poster}
                preload="metadata"
                onClick={() => {
                    keepControlsVisibleOnTouch()
                    void togglePlay()
                }}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleTimeUpdate}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={() => setIsPlaying(false)}
                playsInline
            >
                {webmSrc && <source src={webmSrc} type="video/webm" />}
                <source src={mp4Src} type="video/mp4" />
            </video>

            <div
                className={`absolute bottom-0 left-0 right-0 m-2 mx-auto w-[calc(100%-1rem)] max-w-xl rounded-2xl bg-[#11111198] p-4 backdrop-blur-md transition-all duration-500 ${
                    showControls ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-5 opacity-0 blur-sm'
                }`}
            >
                <div className="mb-2 flex items-center gap-2">
                    <span className="text-sm text-white">{formatTime(currentTime)}</span>
                    <CustomSlider value={progress} onChange={handleSeek} className="flex-1" />
                    <span className="text-sm text-white">{formatTime(duration)}</span>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-2 sm:gap-4">
                        <IconButton onClick={() => void togglePlay()} label={isPlaying ? 'Pause video' : 'Play video'}>
                            {isPlaying ? <PauseIcon /> : <PlayIcon />}
                        </IconButton>

                        <div className="flex items-center gap-1 sm:gap-2">
                            <IconButton onClick={toggleMute} label={isMuted ? 'Unmute' : 'Mute'}>
                                {isMuted ? (
                                    <VolumeOffIcon />
                                ) : volume > 0.5 ? (
                                    <VolumeHighIcon />
                                ) : (
                                    <VolumeLowIcon />
                                )}
                            </IconButton>
                            <div className="w-20 sm:w-24">
                                <CustomSlider value={volume * 100} onChange={handleVolumeChange} />
                            </div>
                        </div>

                        <IconButton
                            onClick={() => void toggleFullscreen()}
                            label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
                            active={isFullscreen}
                        >
                            {isFullscreen ? (
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    aria-hidden="true"
                                >
                                    <path d="M9 3H5a2 2 0 0 0-2 2v4" />
                                    <path d="M15 3h4a2 2 0 0 1 2 2v4" />
                                    <path d="M9 21H5a2 2 0 0 1-2-2v-4" />
                                    <path d="M15 21h4a2 2 0 0 0 2-2v-4" />
                                    <path d="m8 8 3 3" />
                                    <path d="m16 8-3 3" />
                                    <path d="m8 16 3-3" />
                                    <path d="m16 16-3-3" />
                                </svg>
                            ) : (
                                <svg
                                    viewBox="0 0 24 24"
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    aria-hidden="true"
                                >
                                    <path d="M8 3H5a2 2 0 0 0-2 2v3" />
                                    <path d="M16 3h3a2 2 0 0 1 2 2v3" />
                                    <path d="M8 21H5a2 2 0 0 1-2-2v-3" />
                                    <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
                                    <path d="M9 9 3 3" />
                                    <path d="m15 9 6-6" />
                                    <path d="m9 15-6 6" />
                                    <path d="m15 15 6 6" />
                                </svg>
                            )}
                        </IconButton>
                    </div>

                    <div className="flex items-center gap-1">
                        {[0.5, 1, 1.5, 2].map((speed) => (
                            <button
                                key={speed}
                                type="button"
                                onClick={() => changeSpeed(speed)}
                                className={`rounded-lg px-2 py-1 text-xs text-white transition-colors duration-200 hover:bg-black/60 sm:px-2.5 sm:text-sm ${
                                    playbackSpeed === speed ? 'bg-black/60' : 'bg-transparent'
                                }`}
                            >
                                {speed}x
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
