export interface Product {
    id: string
    name: string
    description: string
    price: string
    image: string
    category: string
    specs?: Record<string, string>
}

export interface Category {
    slug: string
    name: string
    description: string
    image: string
    productCount: number
}

export const categories: Category[] = [
    {
        slug: 'shawls',
        name: 'Shawls',
        description: 'Exquisite hand-woven shawls crafted from the finest Himalayan wool, embodying centuries of tradition.',
        image: 'https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?w=800&q=80',
        productCount: 6,
    },
    {
        slug: 'stoles',
        name: 'Stoles',
        description: 'Elegant stoles that combine warmth with sophistication, perfect for every occasion.',
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
        productCount: 5,
    },
    {
        slug: 'blankets',
        name: 'Blankets',
        description: 'Luxurious blankets woven with meticulous care, bringing comfort and elegance to your home.',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
        productCount: 4,
    },
    {
        slug: 'mufflers',
        name: 'Mufflers',
        description: 'Distinguished mufflers that offer warmth and style, handcrafted with regimental precision.',
        image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80',
        productCount: 4,
    },
]

export const products: Product[] = [
    // Shawls
    {
        id: 'regiment-heritage-shawl',
        name: 'Regiment Heritage Shawl',
        description: 'A masterpiece of wool craftsmanship, this shawl features intricate patterns inspired by regimental insignia. Each piece is hand-woven by the skilled artisans of our Veer Nari programme.',
        price: '₹4,500',
        image: 'https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?w=800&q=80',
        category: 'shawls',
        specs: {
            Material: '100% Pure Himalayan Wool',
            Dimensions: '200 cm × 80 cm',
            Weight: '350g',
            Care: 'Dry Clean Only',
        },
    },
    {
        id: 'golden-weave-shawl',
        name: 'Golden Weave Shawl',
        description: 'Adorned with golden thread accents, this premium shawl represents the finest in Indian wool craftsmanship.',
        price: '₹5,200',
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
        category: 'shawls',
        specs: {
            Material: 'Merino Wool Blend',
            Dimensions: '210 cm × 85 cm',
            Weight: '380g',
            Care: 'Dry Clean Only',
        },
    },
    {
        id: 'highland-classic-shawl',
        name: 'Highland Classic Shawl',
        description: 'A timeless design inspired by the highland traditions, crafted for both warmth and elegance.',
        price: '₹3,800',
        image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=80',
        category: 'shawls',
        specs: {
            Material: 'Fine Wool',
            Dimensions: '190 cm × 75 cm',
            Weight: '320g',
            Care: 'Hand Wash Cold',
        },
    },
    {
        id: 'ceremonial-wrap-shawl',
        name: 'Ceremonial Wrap',
        description: 'Designed for formal occasions, this wrap combines ceremonial elegance with everyday comfort.',
        price: '₹6,000',
        image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
        category: 'shawls',
        specs: {
            Material: 'Premium Pashmina Blend',
            Dimensions: '220 cm × 90 cm',
            Weight: '280g',
            Care: 'Dry Clean Only',
        },
    },
    {
        id: 'battalion-check-shawl',
        name: 'Battalion Check Shawl',
        description: 'Classic check pattern with a military-inspired colour palette, woven with exceptional precision.',
        price: '₹4,000',
        image: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=800&q=80',
        category: 'shawls',
        specs: {
            Material: '100% Wool',
            Dimensions: '200 cm × 80 cm',
            Weight: '340g',
            Care: 'Dry Clean Recommended',
        },
    },
    {
        id: 'ivory-elegance-shawl',
        name: 'Ivory Elegance Shawl',
        description: 'A pristine ivory shawl with subtle embroidery, perfect for special occasions.',
        price: '₹5,500',
        image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80',
        category: 'shawls',
        specs: {
            Material: 'Cashmere-Wool Blend',
            Dimensions: '200 cm × 85 cm',
            Weight: '300g',
            Care: 'Dry Clean Only',
        },
    },

    // Stoles
    {
        id: 'officer-stole',
        name: "Officer's Stole",
        description: 'A refined stole inspired by regimental officer traditions, featuring a subtle herringbone weave.',
        price: '₹2,800',
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
        category: 'stoles',
        specs: {
            Material: 'Pure Wool',
            Dimensions: '180 cm × 60 cm',
            Weight: '200g',
            Care: 'Hand Wash Cold',
        },
    },
    {
        id: 'silk-border-stole',
        name: 'Silk Border Stole',
        description: 'Elegant woollen stole with hand-stitched silk borders, blending luxury with tradition.',
        price: '₹3,500',
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
        category: 'stoles',
        specs: {
            Material: 'Wool-Silk Blend',
            Dimensions: '185 cm × 65 cm',
            Weight: '220g',
            Care: 'Dry Clean Only',
        },
    },
    {
        id: 'parade-stole',
        name: 'Parade Stole',
        description: 'Inspired by ceremonial parade wear, this stole features bold stripes and premium wool.',
        price: '₹2,500',
        image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80',
        category: 'stoles',
        specs: {
            Material: 'Fine Wool',
            Dimensions: '180 cm × 55 cm',
            Weight: '180g',
            Care: 'Hand Wash Cold',
        },
    },
    {
        id: 'evening-drape-stole',
        name: 'Evening Drape Stole',
        description: 'A luxurious evening stole that adds sophistication to any outfit.',
        price: '₹3,200',
        image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=80',
        category: 'stoles',
        specs: {
            Material: 'Merino Wool',
            Dimensions: '190 cm × 60 cm',
            Weight: '200g',
            Care: 'Dry Clean Only',
        },
    },
    {
        id: 'heritage-stripe-stole',
        name: 'Heritage Stripe Stole',
        description: 'Featuring heritage-inspired stripes, this stole is a tribute to regimental traditions.',
        price: '₹2,900',
        image: 'https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&q=80',
        category: 'stoles',
        specs: {
            Material: 'Pure Wool',
            Dimensions: '175 cm × 55 cm',
            Weight: '190g',
            Care: 'Hand Wash Cold',
        },
    },

    // Blankets
    {
        id: 'commanders-blanket',
        name: "Commander's Blanket",
        description: 'A heavy-duty premium blanket designed for maximum warmth, featuring a classic military-inspired design.',
        price: '₹8,500',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80',
        category: 'blankets',
        specs: {
            Material: 'Heavy-gauge Pure Wool',
            Dimensions: '220 cm × 150 cm',
            Weight: '1.8kg',
            Care: 'Dry Clean Only',
        },
    },
    {
        id: 'barracks-blanket',
        name: 'Barracks Blanket',
        description: 'Inspired by the enduring warmth of barracks-style blankets, built to last generations.',
        price: '₹6,500',
        image: 'https://images.unsplash.com/photo-1578632292335-df3abbb0d586?w=800&q=80',
        category: 'blankets',
        specs: {
            Material: 'Wool Blend',
            Dimensions: '210 cm × 140 cm',
            Weight: '1.5kg',
            Care: 'Dry Clean Recommended',
        },
    },
    {
        id: 'highland-throw',
        name: 'Highland Throw',
        description: 'A versatile throw blanket with highland-inspired patterns, perfect for home or travel.',
        price: '₹5,800',
        image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80',
        category: 'blankets',
        specs: {
            Material: 'Fine Wool',
            Dimensions: '180 cm × 130 cm',
            Weight: '1.2kg',
            Care: 'Hand Wash Cold',
        },
    },
    {
        id: 'royal-plaid-blanket',
        name: 'Royal Plaid Blanket',
        description: 'A regal plaid blanket in deep navy and gold, embodying the spirit of regimental excellence.',
        price: '₹9,200',
        image: 'https://images.unsplash.com/photo-1601924638867-3a6de6b7a500?w=800&q=80',
        category: 'blankets',
        specs: {
            Material: 'Premium Merino Wool',
            Dimensions: '230 cm × 160 cm',
            Weight: '2.0kg',
            Care: 'Dry Clean Only',
        },
    },

    // Mufflers
    {
        id: 'sentinel-muffler',
        name: 'Sentinel Muffler',
        description: 'A warm and distinguished muffler inspired by sentinel duty in the mountain passes.',
        price: '₹1,800',
        image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?w=800&q=80',
        category: 'mufflers',
        specs: {
            Material: 'Pure Wool',
            Dimensions: '150 cm × 30 cm',
            Weight: '120g',
            Care: 'Hand Wash Cold',
        },
    },
    {
        id: 'garrison-muffler',
        name: 'Garrison Muffler',
        description: 'Classic garrison-style muffler with ribbed knit texture and premium wool construction.',
        price: '₹2,100',
        image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
        category: 'mufflers',
        specs: {
            Material: 'Merino Wool',
            Dimensions: '160 cm × 32 cm',
            Weight: '140g',
            Care: 'Hand Wash Cold',
        },
    },
    {
        id: 'alpine-muffler',
        name: 'Alpine Muffler',
        description: 'Inspired by alpine conditions, this extra-warm muffler features a dense weave for ultimate insulation.',
        price: '₹2,500',
        image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800&q=80',
        category: 'mufflers',
        specs: {
            Material: 'Heavy Wool Blend',
            Dimensions: '170 cm × 35 cm',
            Weight: '180g',
            Care: 'Dry Clean Recommended',
        },
    },
    {
        id: 'regimental-stripe-muffler',
        name: 'Regimental Stripe Muffler',
        description: 'Featuring distinctive regimental stripes, this muffler combines identity with craftsmanship.',
        price: '₹1,900',
        image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=80',
        category: 'mufflers',
        specs: {
            Material: 'Fine Wool',
            Dimensions: '155 cm × 28 cm',
            Weight: '110g',
            Care: 'Hand Wash Cold',
        },
    },
]

export function getProductsByCategory(categorySlug: string): Product[] {
    return products.filter((p) => p.category === categorySlug)
}

export function getProductById(productId: string): Product | undefined {
    return products.find((p) => p.id === productId)
}

export function getCategoryBySlug(slug: string): Category | undefined {
    return categories.find((c) => c.slug === slug)
}
