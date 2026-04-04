import React from 'react'

interface SectionHeadingProps {
    title: string
    subtitle?: React.ReactNode
    light?: boolean
}

export default function SectionHeading({ title, subtitle, light = false }: SectionHeadingProps) {
    return (
        <div className="text-center mb-12 md:mb-16">
            <h2
                className={`font-heading text-4xl md:text-5xl font-bold tracking-wide ${light ? 'text-ivory' : 'text-navy'
                    }`}
            >
                {title}
            </h2>
            <div className="mt-4 mx-auto w-16 h-0.5 bg-gold" />
            {subtitle && (
                <p
                    className={`mt-6 text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${light ? 'text-ivory/70' : 'text-navy/60'
                        }`}
                >
                    {subtitle}
                </p>
            )}
        </div>
    )
}
