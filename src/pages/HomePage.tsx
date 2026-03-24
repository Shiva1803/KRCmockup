import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import { useFadeIn } from '../hooks/useAnimations'

export default function HomePage() {
    const fadeRef = useFadeIn()

    return (
        <div ref={fadeRef}>
            {/* Hero Section with Video Background */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Video Background */}
                <video
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-full min-h-full w-auto h-auto object-cover"
                    src="/headervideoforhome-compressed.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-navy/70" />
                {/* Decorative bottom line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
                {/* Content */}
                <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 md:py-32 text-center">
                    <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-ivory leading-tight tracking-wide">
                        Woven with Honour
                    </h1>
                    <p className="mt-6 text-ivory/70 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
                        Premium handcrafted woollens by the brave women of India's martyred soldiers, where every thread tells a story of courage, sacrifice, and resilience.
                    </p>
                    <div className="mt-10">
                        <Link
                            to="/products"
                            className="inline-block px-8 py-3.5 bg-gold text-navy font-semibold text-sm tracking-widest uppercase hover:bg-ochre transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
                        >
                            Explore Collection
                        </Link>
                    </div>
                </div>
            </section>

            {/* Brand Purpose Section */}
            <section className="py-20 md:py-28 bg-ivory">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Image */}
                        <div className="fade-in order-2 lg:order-1">
                            <div className="relative">
                                <div className="aspect-[4/5] bg-navy/10 overflow-hidden">
                                    <img
                                        src="/veernari.webp"
                                        alt="Veer Nari artisan"
                                        loading="lazy"
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                                {/* Decorative border */}
                                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gold/30 -z-10" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="fade-in order-1 lg:order-2">
                            <span className="text-ochre text-sm font-semibold tracking-[0.3em] uppercase">
                                Our Purpose
                            </span>
                            <h2 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-tight">
                                Empowering the
                                <br />
                                <span className="text-maroon">Veer Nari</span>
                            </h2>
                            <div className="mt-4 w-16 h-0.5 bg-gold" />
                            <p className="mt-8 text-navy/70 text-base md:text-lg leading-relaxed">
                                KRC Woollens was born from a mission greater than commerce. We provide dignified
                                employment to the wives and mothers of our martyred soldiers — the Veer Naris —
                                transforming their skilled hands into artisans of premium woollen craft.
                            </p>
                            <p className="mt-4 text-navy/70 text-base md:text-lg leading-relaxed">
                                Every product you purchase carries the warmth of their resilience and the pride of
                                a nation that honours its heroes.
                            </p>
                            <Link
                                to="/legacy"
                                className="inline-block mt-8 text-sm tracking-widest uppercase text-navy font-semibold border-b-2 border-gold pb-1 hover:text-maroon hover:border-maroon transition-colors duration-300"
                            >
                                Discover Our Legacy
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Statistics Band */}
            <section className="bg-navy py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: '500+', label: 'Veer Nari Employed' },
                            { number: '10,000+', label: 'Products Crafted' },
                            { number: '100%', label: 'Pure Wool' },
                            { number: '50+', label: 'Years of Heritage' },
                        ].map((stat, i) => (
                            <div key={i} className="fade-in">
                                <span className="block font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-gold">
                                    {stat.number}
                                </span>
                                <span className="mt-2 block text-ivory/60 text-xs md:text-sm tracking-wider uppercase">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Primary CTA Section */}
            <section className="py-20 md:py-28 bg-ivory">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="fade-in text-center">
                        <SectionHeading
                            title="Crafted for Excellence"
                            subtitle="From luxurious shawls to distinguished mufflers, our collection represents the pinnacle of Indian wool craftsmanship."
                        />
                        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {[
                                {
                                    title: 'Explore Products',
                                    desc: 'Browse our curated collection of handcrafted woollens.',
                                    link: '/products',
                                    icon: '→',
                                    bg: '/vbhwjbkj.webp',
                                },
                                {
                                    title: 'Bulk Orders',
                                    desc: 'Custom orders for corporate gifting and institutional needs.',
                                    link: '/bulk-order',
                                    icon: '→',
                                    bg: '/bulkorder-bg.webp',
                                },
                                {
                                    title: 'Download Catalogue',
                                    desc: 'View our complete product range with specifications.',
                                    link: '/catalogue',
                                    icon: '→',
                                    bg: '/catalogue-bg.webp',
                                },
                            ].map((card) => (
                                <Link
                                    key={card.title}
                                    to={card.link}
                                    className="group relative overflow-hidden min-h-[220px] flex flex-col justify-end p-8 border border-navy/5 hover:border-gold/40 hover:shadow-lg hover:shadow-gold/5 transition-all duration-500"
                                >
                                    <div
                                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                        style={{ backgroundImage: `url(${card.bg})` }}
                                    />
                                    <div className="absolute inset-0 bg-navy/60 group-hover:bg-navy/70 transition-colors duration-500" />
                                    <div className="relative z-10">
                                        <h3 className="font-heading text-xl md:text-2xl font-bold text-ivory group-hover:text-gold transition-colors duration-300">
                                            {card.title}
                                        </h3>
                                        <p className="mt-3 text-ivory/70 text-sm leading-relaxed">{card.desc}</p>
                                        <span className="mt-6 inline-block text-gold text-xl group-hover:translate-x-2 transition-transform duration-300">
                                            {card.icon}
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Heritage Banner */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/95 to-maroon/80" />
                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                    <p className="fade-in font-heading text-2xl sm:text-3xl md:text-4xl text-ivory font-light italic leading-relaxed">
                        "Every thread is a tribute. Every weave, a salute to the courage that protects our nation."
                    </p>
                    <div className="mt-8 w-12 h-0.5 bg-gold mx-auto" />
                    <p className="mt-6 text-ochre text-sm tracking-[0.3em] uppercase">
                        KRC Woollens
                    </p>
                </div>
            </section>
        </div>
    )
}
