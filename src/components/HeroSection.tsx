import { Link, useNavigate } from 'react-router-dom'

interface HeroSectionProps {
    title: string
    subtitle?: string
    ctaText?: string
    ctaLink?: string
    backgroundImage?: string
    overlay?: 'dark' | 'navy' | 'olive' | 'maroon'
    height?: 'full' | 'large' | 'medium'
    align?: 'center' | 'left'
    showBackButton?: boolean
}

export default function HeroSection({
    title,
    subtitle,
    ctaText,
    ctaLink,
    backgroundImage,
    overlay = 'dark',
    height = 'full',
    align = 'center',
    showBackButton = false,
}: HeroSectionProps) {
    const navigate = useNavigate()
    const heightClasses = {
        full: 'min-h-screen',
        large: 'min-h-[75vh]',
        medium: 'min-h-[50vh]',
    }

    const overlayClasses = {
        dark: 'bg-navy/70',
        navy: 'bg-navy/80',
        olive: 'bg-olive/70',
        maroon: 'bg-maroon/70',
    }

    return (
        <section
            className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}
        >
            {/* Background */}
            {backgroundImage === 'gradient-blue-red' ? (
                <div className="absolute inset-0 bg-gradient-to-r from-[#191A2F] to-[#8A2128]" />
            ) : backgroundImage === 'gradient-blue-green' ? (
                <div className="absolute inset-0 bg-gradient-to-r from-[#191A2F] to-[#354818]" />
            ) : backgroundImage === 'gradient-blue-gold' ? (
                <div className="absolute inset-0 bg-gradient-to-r from-[#191A2F] to-[#DBAD4F]" />
            ) : backgroundImage ? (
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                />
            ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy/95 to-olive/60" />
            )}

            {/* Overlay */}
            {backgroundImage !== 'gradient-blue-red' && backgroundImage !== 'gradient-blue-green' && backgroundImage !== 'gradient-blue-gold' && (
                <div className={`absolute inset-0 ${overlayClasses[overlay]}`} />
            )}

            {/* Decorative line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            {/* Back Button */}
            {showBackButton && (
                <button
                    onClick={() => navigate(-1)}
                    className="absolute left-4 md:left-6 top-6 md:top-1/2 md:-translate-y-1/2 z-20 text-ivory hover:text-gold transition-colors duration-300"
                    aria-label="Go back"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-7 h-7 md:w-10 md:h-10"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
            )}

            {/* Content */}
            <div
                className={`relative z-10 max-w-5xl mx-auto px-6 py-24 md:py-32 ${align === 'center' ? 'text-center' : 'text-left'
                    }`}
            >
                <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-ivory leading-tight tracking-wide">
                    {title}
                </h1>
                {subtitle && (
                    <p className="mt-6 text-ivory/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
                        {subtitle}
                    </p>
                )}
                {ctaText && ctaLink && (
                    <div className="mt-10">
                        <Link
                            to={ctaLink}
                            className="inline-block px-8 py-3.5 bg-gold text-navy font-semibold text-sm tracking-widest uppercase hover:bg-ochre transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
                        >
                            {ctaText}
                        </Link>
                    </div>
                )}
            </div>
        </section>
    )
}
