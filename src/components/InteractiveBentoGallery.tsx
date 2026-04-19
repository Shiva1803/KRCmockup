import { useEffect, useRef, useState } from 'react'

export interface MediaItemType {
    id: number
    type: 'image' | 'video'
    title: string
    desc: string
    url: string
    span: string
}

interface MediaItemProps {
    item: MediaItemType
    className?: string
}

function MediaItem({ item, className }: MediaItemProps) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isInView, setIsInView] = useState(false)
    const [isBuffering, setIsBuffering] = useState(item.type === 'video')

    useEffect(() => {
        if (item.type !== 'video' || !videoRef.current) {
            return
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    setIsInView(entry.isIntersecting)
                })
            },
            {
                root: null,
                rootMargin: '48px',
                threshold: 0.1,
            }
        )

        observer.observe(videoRef.current)

        return () => observer.disconnect()
    }, [item.type])

    useEffect(() => {
        if (item.type !== 'video' || !videoRef.current) {
            return
        }

        const videoEl = videoRef.current

        const tryPlay = async () => {
            try {
                if (videoEl.readyState >= 3) {
                    setIsBuffering(false)
                    await videoEl.play()
                    return
                }

                setIsBuffering(true)
                await new Promise<void>((resolve) => {
                    const onCanPlay = () => {
                        videoEl.removeEventListener('canplay', onCanPlay)
                        resolve()
                    }
                    videoEl.addEventListener('canplay', onCanPlay)
                })

                setIsBuffering(false)
                await videoEl.play()
            } catch {
                setIsBuffering(false)
            }
        }

        if (isInView) {
            void tryPlay()
        } else {
            videoEl.pause()
        }

        return () => {
            videoEl.pause()
        }
    }, [isInView, item.type])

    if (item.type === 'video') {
        return (
            <div className={`${className ?? ''} relative overflow-hidden`}>
                <video
                    ref={videoRef}
                    className="h-full w-full object-cover"
                    playsInline
                    muted
                    loop
                    preload="metadata"
                    style={{
                        opacity: isBuffering ? 0.75 : 1,
                        transition: 'opacity 0.25s ease',
                    }}
                >
                    <source src={item.url} type="video/mp4" />
                </video>
                {isBuffering && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/15">
                        <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    </div>
                )}
            </div>
        )
    }

    return (
        <img
            src={item.url}
            alt={item.title}
            className={`${className ?? ''} h-full w-full object-cover`}
            loading="lazy"
            decoding="async"
        />
    )
}

interface GalleryModalProps {
    selectedItem: MediaItemType | null
    onClose: () => void
}

function GalleryModal({ selectedItem, onClose }: GalleryModalProps) {
    if (!selectedItem) {
        return null
    }

    return (
        <div
            className="fixed inset-0 z-[80] bg-navy/75 backdrop-blur-sm p-3 sm:p-6"
            onClick={(event) => {
                if (event.target === event.currentTarget) {
                    onClose()
                }
            }}
        >
            <div className="mx-auto flex h-full w-full max-w-6xl flex-col justify-center">
                <button
                    type="button"
                    onClick={onClose}
                    className="ml-auto mb-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-ivory/90 text-sm font-semibold leading-none text-navy shadow-md transition-colors hover:bg-white"
                    aria-label="Close gallery preview"
                >
                    X
                </button>

                <div className="relative overflow-hidden rounded-2xl bg-navy shadow-2xl">
                    <div className="aspect-[16/10] bg-black/50">
                        <MediaItem item={selectedItem} className="h-full w-full object-contain" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/55 to-transparent px-4 py-4 sm:px-6 sm:py-5">
                        <h3 className="text-lg font-semibold text-white sm:text-2xl">{selectedItem.title}</h3>
                        <p className="mt-1 text-sm text-white/80 sm:text-base">{selectedItem.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

interface InteractiveBentoGalleryProps {
    mediaItems: MediaItemType[]
    title?: string
    description?: string
    layout?: 'bento' | 'quad'
    alwaysVisibleCaptionIndex?: number | null
    captionVisibility?: 'hover' | 'always'
}

export default function InteractiveBentoGallery({
    mediaItems,
    title,
    description,
    layout = 'bento',
    alwaysVisibleCaptionIndex,
    captionVisibility = 'hover',
}: InteractiveBentoGalleryProps) {
    const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null)
    const [items, setItems] = useState(mediaItems)

    useEffect(() => {
        setItems(mediaItems)
    }, [mediaItems])

    const persistentCaptionIndex =
        alwaysVisibleCaptionIndex !== undefined
            ? alwaysVisibleCaptionIndex
            : layout === 'bento'
              ? 0
              : null

    const containerClassName =
        layout === 'bento' ? 'mx-auto w-full max-w-[1320px]' : 'mx-auto w-full'

    const gridClassName =
        layout === 'bento'
            ? 'grid grid-cols-2 auto-rows-[96px] gap-3 sm:auto-rows-[112px] sm:gap-4 md:grid-cols-[0.95fr_2.35fr_0.95fr] md:auto-rows-[84px] md:gap-5 lg:auto-rows-[92px]'
            : 'grid grid-cols-2 auto-rows-[132px] gap-3 sm:auto-rows-[160px] sm:gap-4 md:grid-cols-2 md:auto-rows-[190px] lg:auto-rows-[240px]'

    return (
        <div className={containerClassName}>
            {(title || description) && (
                <div className="mb-8 text-center">
                    {title && (
                        <h2 className="font-heading text-3xl font-bold text-navy sm:text-4xl">{title}</h2>
                    )}
                    {description && (
                        <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-navy/70 sm:text-base">
                            {description}
                        </p>
                    )}
                </div>
            )}

            <div className={gridClassName}>
                {items.map((item, index) => {
                    const isPersistentCaption =
                        (persistentCaptionIndex !== null && index === persistentCaptionIndex) ||
                        captionVisibility === 'always'

                    return (
                        <article
                            key={item.id}
                            onClick={() => setSelectedItem(item)}
                            className={`fade-in group relative cursor-pointer overflow-hidden rounded-[14px] border border-navy/10 bg-white shadow-[0_4px_14px_rgba(25,26,47,0.08)] transition-all duration-500 hover:-translate-y-0.5 hover:shadow-[0_8px_18px_rgba(25,26,47,0.15)] ${item.span}`}
                            style={{ transitionDelay: `${index * 80}ms` }}
                        >
                            <MediaItem
                                item={item}
                                className="absolute inset-0 h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                            />
                            <div
                                className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent transition-opacity duration-400 ${
                                    isPersistentCaption ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                                }`}
                            />
                            <div
                                className={`pointer-events-none absolute inset-x-0 bottom-0 p-4 text-white transition-all duration-400 ${
                                    isPersistentCaption
                                        ? 'translate-y-0 opacity-100'
                                        : 'translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100'
                                }`}
                            >
                                <h3
                                    className={`line-clamp-1 ${
                                        isPersistentCaption
                                            ? 'text-3xl font-medium tracking-wide sm:text-4xl'
                                            : 'text-sm font-semibold sm:text-base'
                                    }`}
                                >
                                    {item.title}
                                </h3>
                                <p
                                    className={`mt-1 ${
                                        isPersistentCaption
                                            ? 'line-clamp-3 text-base text-white/80 sm:text-lg'
                                            : 'line-clamp-2 text-[11px] text-white/75 sm:text-xs'
                                    }`}
                                >
                                    {item.desc}
                                </p>
                            </div>
                        </article>
                    )
                })}
            </div>

            <GalleryModal
                selectedItem={selectedItem}
                onClose={() => setSelectedItem(null)}
            />
        </div>
    )
}
