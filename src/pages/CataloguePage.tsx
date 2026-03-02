import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import { useFadeIn } from '../hooks/useAnimations'
import { categories } from '../data/products'

export default function CataloguePage() {
    const fadeRef = useFadeIn()

    return (
        <div ref={fadeRef}>
            {/* Hero */}
            <HeroSection
                title="Catalogue"
                subtitle="Browse our complete product range. Download or explore online."
                height="medium"
                overlay="navy"
            />

            {/* Catalogue Content */}
            <section className="py-20 md:py-28 bg-ivory">
                <div className="max-w-5xl mx-auto px-6">
                    {/* Download Section */}
                    <div className="fade-in text-center mb-16 md:mb-20">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-navy/5 rounded-full mb-6">
                            <svg className="w-8 h-8 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                        </div>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy">
                            Download Full Catalogue
                        </h2>
                        <div className="mt-4 w-16 h-0.5 bg-gold mx-auto" />
                        <p className="mt-6 text-navy/60 text-base md:text-lg max-w-xl mx-auto">
                            Get our comprehensive product catalogue with detailed specifications,
                            pricing, and care instructions.
                        </p>
                        <button
                            className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-gold text-navy font-semibold text-sm tracking-widest uppercase hover:bg-ochre transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download PDF Catalogue
                        </button>
                        <p className="mt-3 text-navy/40 text-xs tracking-wide">
                            PDF &middot; 12.5 MB &middot; Updated March 2026
                        </p>
                    </div>

                    {/* Product Overview Grid */}
                    <div className="fade-in">
                        <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy text-center mb-12">
                            Quick Overview
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {categories.map((cat, i) => (
                                <Link
                                    key={cat.slug}
                                    to={`/products/${cat.slug}`}
                                    className="group flex items-center gap-5 p-6 bg-white border border-navy/5 hover:border-gold/30 hover:shadow-lg transition-all duration-500"
                                    style={{ transitionDelay: `${i * 80}ms` }}
                                >
                                    <div className="w-20 h-20 flex-shrink-0 overflow-hidden">
                                        <img
                                            src={cat.image}
                                            alt={cat.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-heading text-lg font-bold text-navy group-hover:text-maroon transition-colors duration-300">
                                            {cat.name}
                                        </h4>
                                        <p className="mt-1 text-navy/50 text-sm truncate">{cat.description}</p>
                                        <span className="mt-2 inline-block text-gold text-xs tracking-widest uppercase">
                                            {cat.productCount} items
                                        </span>
                                    </div>
                                    <span className="text-gold text-lg group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0">
                                        →
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Bulk Order CTA */}
                    <div className="fade-in mt-16 md:mt-20 p-8 md:p-12 bg-navy text-center">
                        <h3 className="font-heading text-2xl md:text-3xl text-ivory font-bold">
                            Need a Custom Quote?
                        </h3>
                        <p className="mt-3 text-ivory/60 text-sm md:text-base">
                            For bulk orders, custom specifications, or corporate gifting needs.
                        </p>
                        <Link
                            to="/bulk-order"
                            className="inline-block mt-6 px-8 py-3.5 bg-gold text-navy font-semibold text-sm tracking-widest uppercase hover:bg-ochre transition-all duration-300"
                        >
                            Request Bulk Quote
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
