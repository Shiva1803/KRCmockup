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
                backgroundImage={
                    category === 'accessories' ? 'gradient-blue-red' :
                    category === 'shawls' ? 'gradient-blue-green' :
                    category === 'cosmetics' ? 'gradient-blue-green' :
                    category === 'knitwear' ? 'gradient-blue-red' :
                    category === 'tweed' ? 'gradient-blue-gold' :
                    category === 'outerwear' ? 'gradient-blue-gold' :
                    category === 'farmbites' ? 'gradient-blue-green' :
                    cat.image
                }
                height="medium"
                showBackButton={category === 'accessories' || category === 'shawls' || category === 'cosmetics' || category === 'knitwear' || category === 'tweed' || category === 'outerwear' || category === 'farmbites'}
            />

            {/* Conditional Breadcrumb and Heading */}
            {category === 'accessories' ? (
                <>
                    {/* Custom heading for accessories */}
                    <section className="py-20 md:py-28 bg-ivory">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="mb-16 inline-block">
                                <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy">
                                    Explore Accessories
                                </h2>
                                <div className="mt-4 h-0.5 bg-maroon w-full" />
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                                {products.map((product, i) => (
                                    <div
                                        key={product.id}
                                        className="fade-in group overflow-hidden flex flex-col"
                                        style={{ transitionDelay: `${i * 80}ms` }}
                                    >
                                        <div className="overflow-hidden" style={{ aspectRatio: '328 / 262.93' }}>
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="bg-gradient-to-r from-[#191A2F] to-[#8A2128] p-5 md:p-6 flex-1 flex flex-col">
                                            <h3 className="font-heading text-lg md:text-xl font-bold text-ivory min-h-[3.5rem] flex items-center">
                                                {product.name}
                                            </h3>
                                            <div className="mt-2">
                                                <span className="text-ivory font-semibold text-lg">
                                                    {product.price}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Quote Section */}
                    <div className="bg-navy py-16 md:py-20">
                        <div className="max-w-4xl mx-auto px-6 text-center">
                            <p className="font-heading text-2xl md:text-[28.62px] text-ivory italic leading-relaxed">
                                "Not just crafted by hand, but shaped by courage, resilience,<br />and enduring spirit."
                            </p>
                            <div className="mt-6 w-16 h-0.5 bg-gold mx-auto" />
                        </div>
                    </div>
                </>
            ) : category === 'shawls' ? (
                <>
                    {/* Custom heading for shawls */}
                    <section className="py-20 md:py-28 bg-ivory">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="mb-16 inline-block">
                                <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy">
                                    Explore Shawls & Wraps
                                </h2>
                                <div className="mt-4 h-0.5 bg-maroon w-full" />
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                                {products.map((product, i) => (
                                    <div
                                        key={product.id}
                                        className="fade-in group overflow-hidden flex flex-col"
                                        style={{ transitionDelay: `${i * 80}ms` }}
                                    >
                                        <div className="overflow-hidden" style={{ aspectRatio: '328 / 262.93' }}>
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="bg-gradient-to-r from-[#191A2F] to-[#354818] p-5 md:p-6 flex-1 flex flex-col">
                                            <h3 className="font-heading text-lg md:text-xl font-bold text-ivory min-h-[3.5rem] flex items-center">
                                                {product.name}
                                            </h3>
                                            <div className="mt-2">
                                                <span className="text-ivory font-semibold text-lg">
                                                    {product.price}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Quote Section */}
                    <div className="bg-navy py-16 md:py-20">
                        <div className="max-w-4xl mx-auto px-6 text-center">
                            <p className="font-heading text-2xl md:text-[28.62px] text-ivory italic leading-relaxed">
                                "Not just crafted by hand, but shaped by courage, resilience,<br />and enduring spirit."
                            </p>
                            <div className="mt-6 w-16 h-0.5 bg-gold mx-auto" />
                        </div>
                    </div>
                </>
            ) : category === 'cosmetics' ? (
                <>
                    {/* Custom heading for cosmetics */}
                    <section className="py-20 md:py-28 bg-ivory">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="mb-16 inline-block">
                                <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy">
                                    Explore Soaps
                                </h2>
                                <div className="mt-4 h-0.5 bg-maroon w-full" />
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                                {products.map((product, i) => (
                                    <div
                                        key={product.id}
                                        className="fade-in group overflow-hidden flex flex-col"
                                        style={{ transitionDelay: `${i * 80}ms` }}
                                    >
                                        <div className="overflow-hidden" style={{ aspectRatio: '328 / 262.93' }}>
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="bg-gradient-to-r from-[#191A2F] to-[#354818] p-5 md:p-6 flex-1 flex flex-col">
                                            <h3 className="font-heading text-lg md:text-xl font-bold text-ivory min-h-[3.5rem] flex items-center">
                                                {product.name}
                                            </h3>
                                            <div className="mt-2">
                                                <span className="text-ivory font-semibold text-lg">
                                                    {product.price}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Quote Section */}
                    <div className="bg-navy py-16 md:py-20">
                        <div className="max-w-4xl mx-auto px-6 text-center">
                            <p className="font-heading text-2xl md:text-[28.62px] text-ivory italic leading-relaxed">
                                "Not just crafted by hand, but shaped by courage, resilience,<br />and enduring spirit."
                            </p>
                            <div className="mt-6 w-16 h-0.5 bg-gold mx-auto" />
                        </div>
                    </div>
                </>
            ) : category === 'knitwear' ? (
                <>
                    {/* Custom heading for knitwear */}
                    <section className="py-20 md:py-28 bg-ivory">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="mb-16 inline-block">
                                <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy">
                                    Explore Knitwear
                                </h2>
                                <div className="mt-4 h-0.5 bg-maroon w-full" />
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                                {products.map((product, i) => (
                                    <div
                                        key={product.id}
                                        className="fade-in group overflow-hidden flex flex-col"
                                        style={{ transitionDelay: `${i * 80}ms` }}
                                    >
                                        <div className="overflow-hidden" style={{ aspectRatio: '328 / 262.93' }}>
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="bg-gradient-to-r from-[#191A2F] to-[#8A2128] p-5 md:p-6 flex-1 flex flex-col">
                                            <h3 className="font-heading text-lg md:text-xl font-bold text-ivory min-h-[3.5rem] flex items-center">
                                                {product.name}
                                            </h3>
                                            <div className="mt-2">
                                                <span className="text-ivory font-semibold text-lg">
                                                    {product.price}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Quote Section */}
                    <div className="bg-navy py-16 md:py-20">
                        <div className="max-w-4xl mx-auto px-6 text-center">
                            <p className="font-heading text-2xl md:text-[28.62px] text-ivory italic leading-relaxed">
                                "Not just crafted by hand, but shaped by courage, resilience,<br />and enduring spirit."
                            </p>
                            <div className="mt-6 w-16 h-0.5 bg-gold mx-auto" />
                        </div>
                    </div>
                </>
            ) : category === 'tweed' ? (
                <>
                    {/* Custom heading for tweed */}
                    <section className="py-20 md:py-28 bg-ivory">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="mb-16 inline-block">
                                <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy">
                                    Explore Tweed
                                </h2>
                                <div className="mt-4 h-0.5 bg-maroon w-full" />
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                                {products.map((product, i) => (
                                    <div
                                        key={product.id}
                                        className="fade-in group overflow-hidden flex flex-col"
                                        style={{ transitionDelay: `${i * 80}ms` }}
                                    >
                                        <div className="overflow-hidden" style={{ aspectRatio: '328 / 262.93' }}>
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="bg-gradient-to-r from-[#191A2F] to-[#DBAD4F] p-5 md:p-6 flex-1 flex flex-col">
                                            <div className="min-h-[3.5rem] flex items-center overflow-hidden">
                                                <h3 className="font-heading text-lg md:text-xl font-bold text-ivory whitespace-nowrap">
                                                    {product.name.length > 20 ? (
                                                        <span className="inline-block animate-marquee">
                                                            {product.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{product.name}
                                                        </span>
                                                    ) : (
                                                        product.name
                                                    )}
                                                </h3>
                                            </div>
                                            <div className="mt-2">
                                                <span className="text-ivory font-semibold text-lg">
                                                    {product.price}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Quote Section */}
                    <div className="bg-navy py-16 md:py-20">
                        <div className="max-w-4xl mx-auto px-6 text-center">
                            <p className="font-heading text-2xl md:text-[28.62px] text-ivory italic leading-relaxed">
                                "Not just crafted by hand, but shaped by courage, resilience,<br />and enduring spirit."
                            </p>
                            <div className="mt-6 w-16 h-0.5 bg-gold mx-auto" />
                        </div>
                    </div>
                </>
            ) : category === 'farmbites' ? (
                <>
                    {/* Custom heading for farmbites */}
                    <section className="py-20 md:py-28 bg-ivory">
                        <div className="max-w-7xl mx-auto px-6">
                            {/* Explore Oils Section */}
                            <div className="mb-20">
                                <div className="mb-16 inline-block">
                                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy">
                                        Explore Oils
                                    </h2>
                                    <div className="mt-4 h-0.5 bg-maroon w-full" />
                                </div>

                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                                    {products.filter(p => p.specs?.Subcategory === 'oils').map((product, i) => (
                                        <div
                                            key={product.id}
                                            className="fade-in group overflow-hidden flex flex-col"
                                            style={{ transitionDelay: `${i * 80}ms` }}
                                        >
                                            <div className="overflow-hidden" style={{ aspectRatio: '328 / 262.93' }}>
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                            </div>
                                            <div className="bg-gradient-to-r from-[#191A2F] to-[#354818] p-5 md:p-6 flex-1 flex flex-col">
                                                <h3 className="font-heading text-lg md:text-xl font-bold text-ivory min-h-[3.5rem] flex items-center">
                                                    {product.name}
                                                </h3>
                                                <div className="mt-2">
                                                    <span className="text-ivory font-semibold text-lg">
                                                        {product.price}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Explore Honey Section */}
                            <div className="mb-20">
                                <div className="mb-16 inline-block">
                                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy">
                                        Explore Honey
                                    </h2>
                                    <div className="mt-4 h-0.5 bg-maroon w-full" />
                                </div>

                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                                    {products.filter(p => p.specs?.Subcategory === 'honey').map((product, i) => (
                                        <div
                                            key={product.id}
                                            className="fade-in group overflow-hidden flex flex-col"
                                            style={{ transitionDelay: `${i * 80}ms` }}
                                        >
                                            <div className="overflow-hidden" style={{ aspectRatio: '328 / 262.93' }}>
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                            </div>
                                            <div className="bg-gradient-to-r from-[#191A2F] to-[#354818] p-5 md:p-6 flex-1 flex flex-col">
                                                <h3 className="font-heading text-lg md:text-xl font-bold text-ivory min-h-[3.5rem] flex items-center">
                                                    {product.name}
                                                </h3>
                                                <div className="mt-2">
                                                    <span className="text-ivory font-semibold text-lg">
                                                        {product.price}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Explore Ghee Section */}
                            <div className="mb-20">
                                <div className="mb-16 inline-block">
                                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy">
                                        Explore Ghee
                                    </h2>
                                    <div className="mt-4 h-0.5 bg-maroon w-full" />
                                </div>

                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                                    {products.filter(p => p.specs?.Subcategory === 'ghee').map((product, i) => (
                                        <div
                                            key={product.id}
                                            className="fade-in group overflow-hidden flex flex-col"
                                            style={{ transitionDelay: `${i * 80}ms` }}
                                        >
                                            <div className="overflow-hidden" style={{ aspectRatio: '328 / 262.93' }}>
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                            </div>
                                            <div className="bg-gradient-to-r from-[#191A2F] to-[#354818] p-5 md:p-6 flex-1 flex flex-col">
                                                <h3 className="font-heading text-lg md:text-xl font-bold text-ivory min-h-[3.5rem] flex items-center">
                                                    {product.name}
                                                </h3>
                                                <div className="mt-2">
                                                    <span className="text-ivory font-semibold text-lg">
                                                        {product.price}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Explore Preserves Section */}
                            <div className="mb-20">
                                <div className="mb-16 inline-block">
                                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy">
                                        Explore Preserves
                                    </h2>
                                    <div className="mt-4 h-0.5 bg-maroon w-full" />
                                </div>

                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                                    {products.filter(p => p.specs?.Subcategory === 'preserves').map((product, i) => (
                                        <div
                                            key={product.id}
                                            className="fade-in group overflow-hidden flex flex-col"
                                            style={{ transitionDelay: `${i * 80}ms` }}
                                        >
                                            <div className="overflow-hidden" style={{ aspectRatio: '328 / 262.93' }}>
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                            </div>
                                            <div className="bg-gradient-to-r from-[#191A2F] to-[#354818] p-5 md:p-6 flex-1 flex flex-col">
                                                <h3 className="font-heading text-lg md:text-xl font-bold text-ivory min-h-[3.5rem] flex items-center">
                                                    {product.name}
                                                </h3>
                                                <div className="mt-2">
                                                    <span className="text-ivory font-semibold text-lg">
                                                        {product.price}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Explore Teas Section */}
                            <div className="mb-20">
                                <div className="mb-16 inline-block">
                                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy">
                                        Explore Teas
                                    </h2>
                                    <div className="mt-4 h-0.5 bg-maroon w-full" />
                                </div>

                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                                    {products.filter(p => p.specs?.Subcategory === 'teas').map((product, i) => (
                                        <div
                                            key={product.id}
                                            className="fade-in group overflow-hidden flex flex-col"
                                            style={{ transitionDelay: `${i * 80}ms` }}
                                        >
                                            <div className="overflow-hidden" style={{ aspectRatio: '328 / 262.93' }}>
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                            </div>
                                            <div className="bg-gradient-to-r from-[#191A2F] to-[#354818] p-5 md:p-6 flex-1 flex flex-col">
                                                <h3 className="font-heading text-lg md:text-xl font-bold text-ivory min-h-[3.5rem] flex items-center">
                                                    {product.name}
                                                </h3>
                                                <div className="mt-2">
                                                    <span className="text-ivory font-semibold text-lg">
                                                        {product.price}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Explore Grains & Staples Section */}
                            <div>
                                <div className="mb-16 inline-block">
                                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy">
                                        Explore Grains & Staples
                                    </h2>
                                    <div className="mt-4 h-0.5 bg-maroon w-full" />
                                </div>

                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                                    {products.filter(p => p.specs?.Subcategory === 'grains').map((product, i) => (
                                        <div
                                            key={product.id}
                                            className="fade-in group overflow-hidden flex flex-col"
                                            style={{ transitionDelay: `${i * 80}ms` }}
                                        >
                                            <div className="overflow-hidden" style={{ aspectRatio: '328 / 262.93' }}>
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                                />
                                            </div>
                                            <div className="bg-gradient-to-r from-[#191A2F] to-[#354818] p-5 md:p-6 flex-1 flex flex-col">
                                                <h3 className="font-heading text-lg md:text-xl font-bold text-ivory min-h-[3.5rem] flex items-center">
                                                    {product.name}
                                                </h3>
                                                <div className="mt-2">
                                                    <span className="text-ivory font-semibold text-lg">
                                                        {product.price}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Quote Section */}
                    <div className="bg-navy py-16 md:py-20">
                        <div className="max-w-4xl mx-auto px-6 text-center">
                            <p className="font-heading text-2xl md:text-[28.62px] text-ivory italic leading-relaxed">
                                "Not just crafted by hand, but shaped by courage, resilience,<br />and enduring spirit."
                            </p>
                            <div className="mt-6 w-16 h-0.5 bg-gold mx-auto" />
                        </div>
                    </div>
                </>
            ) : category === 'outerwear' ? (
                <>
                    {/* Custom heading for outerwear */}
                    <section className="py-20 md:py-28 bg-ivory">
                        <div className="max-w-7xl mx-auto px-6">
                            <div className="mb-16 inline-block">
                                <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy">
                                    Explore Outerwears
                                </h2>
                                <div className="mt-4 h-0.5 bg-maroon w-full" />
                            </div>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                                {products.map((product, i) => (
                                    <div
                                        key={product.id}
                                        className="fade-in group overflow-hidden flex flex-col"
                                        style={{ transitionDelay: `${i * 80}ms` }}
                                    >
                                        <div className="overflow-hidden" style={{ aspectRatio: '328 / 262.93' }}>
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                        </div>
                                        <div className="bg-gradient-to-r from-[#191A2F] to-[#DBAD4F] p-5 md:p-6 flex-1 flex flex-col">
                                            <div className="min-h-[3.5rem] flex items-center overflow-hidden">
                                                <h3 className="font-heading text-lg md:text-xl font-bold text-ivory whitespace-nowrap">
                                                    {product.name.length > 20 ? (
                                                        <span className="inline-block animate-marquee">
                                                            {product.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{product.name}
                                                        </span>
                                                    ) : (
                                                        product.name
                                                    )}
                                                </h3>
                                            </div>
                                            <div className="mt-2">
                                                <span className="text-ivory font-semibold text-lg">
                                                    {product.price}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Quote Section */}
                    <div className="bg-navy py-16 md:py-20">
                        <div className="max-w-4xl mx-auto px-6 text-center">
                            <p className="font-heading text-2xl md:text-[28.62px] text-ivory italic leading-relaxed">
                                "Not just crafted by hand, but shaped by courage, resilience,<br />and enduring spirit."
                            </p>
                            <div className="mt-6 w-16 h-0.5 bg-gold mx-auto" />
                        </div>
                    </div>
                </>
            ) : (
                <>
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
                </>
            )}
        </div>
    )
}
