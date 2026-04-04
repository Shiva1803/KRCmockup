import { Link, useParams } from 'react-router-dom'
import HoverZoomImage from '../components/HoverZoomImage'
import HeroSection from '../components/HeroSection'
import SectionHeading from '../components/SectionHeading'
import { type Product, getCategoryBySlug, getProductsByCategory } from '../data/products'
import { useFadeIn } from '../hooks/useAnimations'

type FeaturedCategoryConfig = {
    title: string
    gradientClassName: string
    marqueeTitles?: boolean
}

type FarmBitesSection = {
    title: string
    subcategory: string
}

const heroBackgrounds: Record<string, string> = {
    accessories: 'gradient-blue-red',
    shawls: 'gradient-blue-green',
    cosmetics: 'gradient-blue-green',
    knitwear: 'gradient-blue-red',
    tweed: 'gradient-blue-gold',
    outerwear: 'gradient-blue-gold',
    farmbites: 'gradient-blue-green',
}

const featuredCategoryConfigs: Record<string, FeaturedCategoryConfig> = {
    accessories: {
        title: 'Explore Accessories',
        gradientClassName: 'bg-gradient-to-r from-[#191A2F] to-[#8A2128]',
    },
    shawls: {
        title: 'Explore Shawls & Wraps',
        gradientClassName: 'bg-gradient-to-r from-[#191A2F] to-[#354818]',
    },
    cosmetics: {
        title: 'Explore Soaps and Scrubs',
        gradientClassName: 'bg-gradient-to-r from-[#191A2F] to-[#354818]',
    },
    knitwear: {
        title: 'Explore Knitwear',
        gradientClassName: 'bg-gradient-to-r from-[#191A2F] to-[#8A2128]',
    },
    tweed: {
        title: 'Explore Tweed',
        gradientClassName: 'bg-gradient-to-r from-[#191A2F] to-[#DBAD4F]',
        marqueeTitles: true,
    },
    outerwear: {
        title: 'Explore Outerwears',
        gradientClassName: 'bg-gradient-to-r from-[#191A2F] to-[#DBAD4F]',
        marqueeTitles: true,
    },
}

const farmBitesSections: FarmBitesSection[] = [
    { title: 'Explore Oils', subcategory: 'oils' },
    { title: 'Explore Honey', subcategory: 'honey' },
    { title: 'Explore Ghee', subcategory: 'ghee' },
    { title: 'Explore Preserves', subcategory: 'preserves' },
    { title: 'Explore Teas', subcategory: 'teas' },
    { title: 'Explore Grains & Staples', subcategory: 'grains' },
    { title: 'Explore Beverages', subcategory: 'beverages' },
]

function CategorySectionHeader({
    title,
    subtitle,
}: {
    title: string
    subtitle?: string
}) {
    return (
        <div className="mb-12 md:mb-16">
            <div className="inline-block">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy">
                    {title}
                </h2>
                <div className="mt-4 h-0.5 bg-maroon w-full" />
            </div>

            {subtitle && (
                <p className="mt-5 max-w-3xl text-sm leading-relaxed text-navy/65 md:text-base">
                    {subtitle}
                </p>
            )}
        </div>
    )
}

function QuoteSection() {
    return (
        <div className="bg-navy py-16 md:py-20">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <p className="font-heading text-2xl md:text-[28.62px] text-ivory italic leading-relaxed">
                    "Not just crafted by hand, but shaped by courage, resilience,<br />and enduring spirit."
                </p>
                <div className="mt-6 w-16 h-0.5 bg-gold mx-auto" />
            </div>
        </div>
    )
}

function ProductName({
    product,
    marqueeTitles = false,
}: {
    product: Product
    marqueeTitles?: boolean
}) {
    if (!marqueeTitles) {
        return (
            <h3 className="font-heading text-lg md:text-xl font-bold text-ivory min-h-[3.5rem] flex items-center">
                {product.name}
            </h3>
        )
    }

    return (
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
    )
}

function FeaturedProductGrid({
    products,
    gradientClassName,
    marqueeTitles = false,
}: {
    products: Product[]
    gradientClassName: string
    marqueeTitles?: boolean
}) {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 transition-all duration-300">
            {products.map((product, index) => (
                <div
                    key={product.id}
                    className="fade-in group overflow-hidden flex flex-col"
                    style={{ transitionDelay: `${index * 60}ms` }}
                >
                    <HoverZoomImage
                        src={product.image}
                        alt={product.name}
                        className="overflow-hidden"
                        style={{ aspectRatio: '328 / 262.93' }}
                    />
                    <div className={`${gradientClassName} p-5 md:p-6 flex-1 flex flex-col`}>
                        <ProductName product={product} marqueeTitles={marqueeTitles} />
                        <div className="mt-2">
                            <span className="text-ivory font-semibold text-lg">
                                {product.price}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

function LinkedProductGrid({
    products,
    categorySlug,
}: {
    products: Product[]
    categorySlug: string
}) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 transition-all duration-300">
            {products.map((product, index) => (
                <Link
                    key={product.id}
                    to={`/products/${categorySlug}/${product.id}`}
                    className="fade-in group bg-white border border-navy/5 overflow-hidden hover:shadow-xl hover:shadow-navy/5 transition-all duration-500"
                    style={{ transitionDelay: `${index * 60}ms` }}
                >
                    <HoverZoomImage
                        src={product.image}
                        alt={product.name}
                        className="aspect-square"
                    />
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
    )
}

export default function CategoryPage() {
    const { category } = useParams<{ category: string }>()
    const fadeRef = useFadeIn()

    const categorySlug = category || ''
    const cat = getCategoryBySlug(categorySlug)
    const products = getProductsByCategory(categorySlug)

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

    const featuredCategory = featuredCategoryConfigs[categorySlug]

    return (
        <div ref={fadeRef}>
            <HeroSection
                title={cat.name}
                subtitle={cat.description}
                backgroundImage={heroBackgrounds[categorySlug] || cat.image}
                height="medium"
                showBackButton={Boolean(heroBackgrounds[categorySlug])}
            />

            {featuredCategory ? (
                <>
                    <section className="py-20 md:py-28 bg-ivory">
                        <div className="max-w-7xl mx-auto px-6">
                            <CategorySectionHeader title={featuredCategory.title} />
                            <FeaturedProductGrid
                                products={products}
                                gradientClassName={featuredCategory.gradientClassName}
                                marqueeTitles={featuredCategory.marqueeTitles}
                            />
                        </div>
                    </section>

                    <QuoteSection />
                </>
            ) : categorySlug === 'farmbites' ? (
                <>
                    <section className="py-20 md:py-28 bg-ivory">
                        <div className="max-w-7xl mx-auto px-6 space-y-20">
                            {farmBitesSections.map((section) => {
                                const sectionProducts = products.filter(
                                    (product) => product.specs?.Subcategory?.toLowerCase() === section.subcategory
                                )

                                if (!sectionProducts.length) {
                                    return null
                                }

                                return (
                                    <div key={section.subcategory}>
                                        <CategorySectionHeader title={section.title} />
                                        <FeaturedProductGrid
                                            products={sectionProducts}
                                            gradientClassName="bg-gradient-to-r from-[#191A2F] to-[#354818]"
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </section>

                    <QuoteSection />
                </>
            ) : (
                <>
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

                    <section className="py-20 md:py-28 bg-ivory">
                        <div className="max-w-7xl mx-auto px-6">
                            <SectionHeading
                                title={`Our ${cat.name}`}
                                subtitle={`Explore our curated selection of ${cat.name.toLowerCase()}, each handcrafted with precision and care.`}
                            />
                            <LinkedProductGrid
                                products={products}
                                categorySlug={categorySlug}
                            />
                        </div>
                    </section>
                </>
            )}
        </div>
    )
}
