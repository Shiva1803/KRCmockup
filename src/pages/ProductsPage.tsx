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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mt-12">
                        {categories.map((cat, i) => (
                            <Link
                                key={cat.slug}
                                to={`/products/${cat.slug}`}
                                className="fade-in group relative aspect-[4/3] overflow-hidden bg-navy"
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <img
                                    src={cat.image}
                                    alt={cat.name}
                                    className="w-full h-full object-cover opacity-70 group-hover:opacity-50 group-hover:scale-110 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                                    <span className="text-gold text-xs tracking-[0.3em] uppercase">
                                        {cat.productCount} Products
                                    </span>
                                    <h3 className="mt-2 font-heading text-2xl md:text-3xl font-bold text-ivory group-hover:text-gold transition-colors duration-300">
                                        {cat.name}
                                    </h3>
                                    <p className="mt-2 text-ivory/60 text-sm line-clamp-2">
                                        {cat.description}
                                    </p>
                                    <span className="mt-4 inline-block text-gold text-sm tracking-widest uppercase group-hover:translate-x-2 transition-transform duration-300">
                                        Explore →
                                    </span>
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
                        to="/bulk-order"
                        className="fade-in inline-block mt-8 px-8 py-3.5 bg-gold text-navy font-semibold text-sm tracking-widest uppercase hover:bg-ochre transition-all duration-300"
                    >
                        Request Quote
                    </Link>
                </div>
            </section>
        </div>
    )
}
