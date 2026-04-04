import { useEffect, useRef, useState } from 'react'

export function useFadeIn() {
    const ref = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1 }
        )

        const el = ref.current
        if (el) {
            const children = el.querySelectorAll('.fade-in')
            children.forEach((child) => observer.observe(child))

            return () => {
                children.forEach((child) => observer.unobserve(child))
            }
        }
    }, [])

    return ref
}

export function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('up')
    const [prevOffset, setPrevOffset] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentOffset = window.scrollY
            if (currentOffset > prevOffset && currentOffset > 80) {
                setScrollDirection('down')
            } else {
                setScrollDirection('up')
            }
            setPrevOffset(currentOffset)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [prevOffset])

    return scrollDirection
}
