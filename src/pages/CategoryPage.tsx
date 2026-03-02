import { Link, useParams } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import SectionHeading from '../components/SectionHeading'
import { getCategoryBySlug, getProductsByCategory } from '../data/products'
import { useFadeIn } from '../hooks/useAnimations'

export default function CategoryPage() {
    const { category } = useParams<{ category: string }>()
    const fadeRef = useFadeIn()

    const cat = getCategoryBySlug(category || '')
    const products = getProductsByCategory(category || '')

    if (!cat) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-ivory pt-20">
                <div className="text-center">
                    <h1 className="font-heading text-4xl text-navy font-bold">Category Not Found</h1>
                    <Link to="/products" className="mt-6 inline-block text-gold hover:text-ochre text-sm tracking-wider uppercase">
                        ← Back to Products
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div ref={fadeRef}>
            {/* Category Hero */}
            <HeroSection
                title={cat.name}
                subtitle={cat.description}
                backgroundImage={cat.image}
                height="medium"
            />

            {/* Breadcrumb */}
            <div className="bg-ivory border-b border-navy/5">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <nav className="flex items-center gap-2 text-xs tracking-wider">
                        <Link to="/products" className="text-navy/50 hover:text-gold transition-colors">
                            Products
                        </Link>
                        <span className="text-navy/30">/</span>
                        <span className="text-navy font-medium">{cat.name}</span>
                    </nav>
                </div>
            </div>

            {/* Product Grid */}
            <section className="py-20 md:py-28 bg-ivory">
                <div className="max-w-7xl mx-auto px-6">
                    <SectionHeading
                        title={`Our ${cat.name}`}
                        subtitle={`Explore our curated selection of ${cat.name.toLowerCase()}, each handcrafted with precision and care.`}
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
                        {products.map((product, i) => (
                            <Link
                                key={product.id}
                                to={`/products/${category}/${product.id}`}
                                className="fade-in group bg-white border border-navy/5 overflow-hidden hover:shadow-xl hover:shadow-navy/5 transition-all duration-500"
                                style={{ transitionDelay: `${i * 80}ms` }}
                            >
                                <div className="aspect-square overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-5 md:p-6">
                                    <h3 className="font-heading text-lg md:text-xl font-bold text-navy group-hover:text-maroon transition-colors duration-300">
                                        {product.name}
                                    </h3>
                                    <p className="mt-2 text-navy/50 text-sm line-clamp-2">
                                        {product.description}
                                    </p>
                                    <div className="mt-4 flex items-center justify-between">
                                        <span className="text-ochre font-semibold text-lg font-heading">
                                            {product.price}
                                        </span>
                                        <span className="text-gold text-xs tracking-widest uppercase group-hover:translate-x-1 transition-transform duration-300">
                                            View →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
