import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import SectionHeading from '../components/SectionHeading'
import { categories } from '../data/products'
import { useFadeIn } from '../hooks/useAnimations'

export default function ProductsPage() {
    const fadeRef = useFadeIn()

    return (
        <div ref={fadeRef}>
            <HeroSection
                title="Our Collection"
                subtitle="Discover handcrafted woollens that embody the spirit of regimental heritage and the skill of our Veer Nari artisans."
                height="medium"
            />

            {/* Category Grid */}
            <section className="py-20 md:py-28 bg-ivory">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeading
                        title="Categories"
                        subtitle="Explore our range of premium woollen products, each crafted with meticulous care and tradition."
                    />

                    <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-8 mt-12 md:max-w-5xl md:mx-auto">
                        {categories.map((cat, i) => (
                            <Link
                                key={cat.slug}
                                to={`/products/${cat.slug}`}
                                className="fade-in group relative overflow-hidden bg-navy"
                                style={{ 
                                    transitionDelay: `${i * 100}ms`,
                                }}
                            >
                                <div className="md:hidden" style={{ aspectRatio: '173.74 / 120.82' }}>
                                    <img
                                        src={cat.image}
                                        alt={cat.name}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover opacity-70 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-2">
                                        <span className="text-gold text-[8px] tracking-[0.15em] uppercase font-light">
                                            {cat.productCount} Products
                                        </span>
                                        <h3 className="mt-1 font-heading text-[19px] leading-tight font-bold text-ivory group-hover:text-gold transition-colors duration-300">
                                            {cat.name}
                                        </h3>
                                        <span className="mt-1 inline-block text-gold text-[9px] tracking-wider uppercase transition-colors duration-300">
                                            EXPLORE
                                        </span>
                                    </div>
                                </div>
                                <div className="hidden md:block" style={{ aspectRatio: '612.16 / 425.7' }}>
                                    <img
                                        src={cat.image}
                                        alt={cat.name}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover opacity-70 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"
                                    />
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                                        <span className="text-gold text-xl tracking-[0.2em] uppercase font-light">
                                            {cat.productCount} Products
                                        </span>
                                        <h3 className="mt-3 font-heading text-[56px] leading-tight font-bold text-ivory group-hover:text-gold transition-colors duration-300">
                                            {cat.name}
                                        </h3>
                                        <span className="mt-4 inline-block text-gold text-[22px] tracking-wider uppercase transition-colors duration-300">
                                            EXPLORE
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Band */}
            <section className="bg-olive py-16 md:py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h3 className="fade-in font-heading text-2xl md:text-3xl text-ivory font-bold">
                        Looking for Bulk Orders?
                    </h3>
                    <p className="fade-in mt-4 text-ivory/60 text-sm md:text-base">
                        We offer custom orders for corporate gifting, institutional needs, and wholesale purchases.
                    </p>
                    <Link
                        to="https://wa.me/918979769881"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fade-in inline-block mt-8 px-8 py-3.5 bg-gold text-navy font-semibold text-sm tracking-widest uppercase hover:bg-ochre transition-all duration-300"
                    >
                        Request Quote
                    </Link>
                </div>
            </section>
        </div>
    )
}
