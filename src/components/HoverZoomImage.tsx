import { type CSSProperties, type PointerEvent, useRef, useState } from 'react'

type HoverZoomImageProps = {
    src: string
    alt: string
    className?: string
    imageClassName?: string
    style?: CSSProperties
    zoomScale?: number
    loading?: 'eager' | 'lazy'
}

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value))

export default function HoverZoomImage({
    src,
    alt,
    className = '',
    imageClassName = '',
    style,
    zoomScale = 1.85,
    loading = 'lazy',
}: HoverZoomImageProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isActive, setIsActive] = useState(false)

    const setZoomOrigin = (x: number, y: number) => {
        const node = containerRef.current

        if (!node) {
            return
        }

        node.style.setProperty('--zoom-origin-x', `${x}%`)
        node.style.setProperty('--zoom-origin-y', `${y}%`)
    }

    const resetZoom = () => {
        setIsActive(false)
        setZoomOrigin(50, 50)
    }

    const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
        if (event.pointerType === 'touch') {
            return
        }

        const rect = event.currentTarget.getBoundingClientRect()
        const x = clamp(((event.clientX - rect.left) / rect.width) * 100, 0, 100)
        const y = clamp(((event.clientY - rect.top) / rect.height) * 100, 0, 100)

        setZoomOrigin(x, y)

        if (!isActive) {
            setIsActive(true)
        }
    }

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden ${className}`.trim()}
            style={
                {
                    '--zoom-origin-x': '50%',
                    '--zoom-origin-y': '50%',
                    ...style,
                } as CSSProperties
            }
            onPointerEnter={(event) => {
                if (event.pointerType !== 'touch') {
                    setIsActive(true)
                }
            }}
            onPointerMove={handlePointerMove}
            onPointerLeave={resetZoom}
        >
            <img
                src={src}
                alt={alt}
                loading={loading}
                decoding="async"
                className={`h-full w-full transform-gpu object-cover transition-transform duration-300 ease-out will-change-transform ${imageClassName}`.trim()}
                style={{
                    transformOrigin: 'var(--zoom-origin-x) var(--zoom-origin-y)',
                    transform: isActive ? `scale(${zoomScale})` : 'scale(1)',
                }}
            />
            <div
                aria-hidden="true"
                className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    background:
                        'radial-gradient(circle at var(--zoom-origin-x) var(--zoom-origin-y), rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.08) 22%, transparent 58%)',
                }}
            />
        </div>
    )
}
