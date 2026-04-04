import { Link, useParams } from 'react-router-dom'
import HoverZoomImage from '../components/HoverZoomImage'
import { getProductById, getCategoryBySlug } from '../data/products'
import { useFadeIn } from '../hooks/useAnimations'

export default function ProductDetailPage() {
    const { category, productId } = useParams<{ category: string; productId: string }>()
    const fadeRef = useFadeIn()

    const product = getProductById(productId || '')
    const cat = getCategoryBySlug(category || '')

    if (!product || !cat) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-ivory pt-20">
                <div className="text-center">
                    <h1 className="font-heading text-4xl text-navy font-bold">Product Not Found</h1>
                    <Link to="/products" className="mt-6 inline-block text-gold hover:text-ochre text-sm tracking-wider uppercase">
                        ← Back to Products
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div ref={fadeRef} className="pt-16 md:pt-20 bg-ivory">
            {/* Breadcrumb */}
            <div className="border-b border-navy/5">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <nav className="flex items-center gap-2 text-xs tracking-wider flex-wrap">
                        <Link to="/products" className="text-navy/50 hover:text-gold transition-colors">
                            Products
                        </Link>
                        <span className="text-navy/30">/</span>
                        <Link to={`/products/${category}`} className="text-navy/50 hover:text-gold transition-colors">
                            {cat.name}
                        </Link>
                        <span className="text-navy/30">/</span>
                        <span className="text-navy font-medium">{product.name}</span>
                    </nav>
                </div>
            </div>

            {/* Product Detail */}
            <section className="py-12 md:py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                        {/* Image */}
                        <div className="fade-in">
                            <HoverZoomImage
                                src={product.image}
                                alt={product.name}
                                className="aspect-square bg-white border border-navy/5"
                                zoomScale={1.65}
                                loading="eager"
                            />
                        </div>

                        {/* Info */}
                        <div className="fade-in">
                            <span className="text-ochre text-xs tracking-[0.3em] uppercase font-semibold">
                                {cat.name}
                            </span>
                            <h1 className="mt-3 font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-tight">
                                {product.name}
                            </h1>
                            <div className="mt-4 w-12 h-0.5 bg-gold" />
                            <p className="mt-6 font-heading text-2xl md:text-3xl font-bold text-ochre">
                                {product.price}
                            </p>
                            <p className="mt-6 text-navy/70 text-base md:text-lg leading-relaxed">
                                {product.description}
                            </p>

                            {/* Specs Table */}
                            {product.specs && (
                                <div className="mt-8 border-t border-navy/10">
                                    <h3 className="mt-6 font-heading text-lg font-bold text-navy">
                                        Specifications
                                    </h3>
                                    <div className="mt-4 space-y-0">
                                        {Object.entries(product.specs).map(([key, value]) => (
                                            <div
                                                key={key}
                                                className="flex items-center justify-between py-3 border-b border-navy/5"
                                            >
                                                <span className="text-navy/50 text-sm">{key}</span>
                                                <span className="text-navy font-medium text-sm">{value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* CTAs */}
                            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                <a
                                    href="https://wa.me/918979769881"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 text-center px-8 py-3.5 bg-gold text-navy font-semibold text-sm tracking-widest uppercase hover:bg-ochre transition-all duration-300"
                                >
                                    Bulk Order Inquiry
                                </a>
                                <Link
                                    to="/contact"
                                    className="flex-1 text-center px-8 py-3.5 border-2 border-navy text-navy font-semibold text-sm tracking-widest uppercase hover:bg-navy hover:text-ivory transition-all duration-300"
                                >
                                    Contact Us
                                </Link>
                            </div>

                            {/* Trust Badge */}
                            <div className="mt-8 p-4 bg-navy/5 border border-navy/10">
                                <p className="text-xs text-navy/60 tracking-wide text-center">
                                    Handcrafted by Veer Nari artisans &middot; 100% Authentic &middot; Quality Guaranteed
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Back to Category */}
            <section className="pb-16 md:pb-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <Link
                        to={`/products/${category}`}
                        className="inline-block text-sm tracking-widest uppercase text-navy/60 hover:text-gold transition-colors duration-300"
                    >
                        ← Back to {cat.name}
                    </Link>
                </div>
            </section>
        </div>
    )
}
