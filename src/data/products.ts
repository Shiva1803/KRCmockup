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
        slug: 'outerwear',
        name: 'Outerwear',
        description: 'Finely tailored outerwear crafted with precision, warmth, and enduring Himalayan heritage.',
        image: '/outerwear.png',
        productCount: 6,
    },
    {
        slug: 'knitwear',
        name: 'Knitwear',
        description: 'Soft yet enduring, each layer carries warmth, comfort, and the quiet strength woven through every thread.',
        image: '/knitwear.png',
        productCount: 1,
    },
    {
        slug: 'shawls',
        name: 'Shawls & Wraps',
        description: 'A timeless expression of heritage, each drape embodies tradition, warmth, and the artistry of skilled hands.',
        image: '/shawls.png',
        productCount: 7,
    },
    {
        slug: 'accessories',
        name: 'Accessories',
        description: 'Small essentials with lasting purpose, designed to bring warmth, function, and refined simplicity to everyday wear.',
        image: '/accessories.png',
        productCount: 4,
    },
    {
        slug: 'tweed',
        name: 'Tweed',
        description: 'Premium tweed fabrics woven with strength, character, and a legacy of fine craftsmanship.',
        image: '/tweed.png',
        productCount: 4,
    },
    {
        slug: 'cosmetics',
        name: 'Cosmetics',
        description: 'Crafted with natural ingredients, these essentials bring purity, care, and everyday nourishment to your skin.',
        image: '/cosmetics.png',
        productCount: 21,
    },
    {
        slug: 'farmbites',
        name: 'Farm Bites',
        description: 'Harvested from pristine Himalayan lands, delivering pure flavours, natural goodness, and timeless authenticity.',
        image: '/farmbites.png',
        productCount: 4,
    },
]

export const products: Product[] = [
    // Shawls
    {
        id: 'shawl-bageshwari',
        name: 'Shawl Bageshwari',
        description: 'A masterpiece of wool craftsmanship, this shawl features intricate patterns inspired by regimental insignia. Each piece is hand-woven by the skilled artisans of our Veer Nari programme.',
        price: '₹1268',
        image: '/image 138.png',
        category: 'shawls',
        specs: {
            Material: '100% Pure Himalayan Wool',
            Dimensions: '200 cm × 80 cm',
            Weight: '350g',
            Care: 'Dry Clean Only',
        },
    },
    {
        id: 'shawl-dharchuli',
        name: 'Shawl Dharchuli',
        description: 'Adorned with golden thread accents, this premium shawl represents the finest in Indian wool craftsmanship.',
        price: '₹1457',
        image: '/image 138 (1).png',
        category: 'shawls',
        specs: {
            Material: 'Merino Wool Blend',
            Dimensions: '210 cm × 85 cm',
            Weight: '380g',
            Care: 'Dry Clean Only',
        },
    },
    {
        id: 'shawl-kinari',
        name: 'Shawl Kinari',
        description: 'A timeless design inspired by the highland traditions, crafted for both warmth and elegance.',
        price: '₹1398',
        image: '/image 138 (2).png',
        category: 'shawls',
        specs: {
            Material: 'Fine Wool',
            Dimensions: '190 cm × 75 cm',
            Weight: '320g',
            Care: 'Hand Wash Cold',
        },
    },
    {
        id: 'superfine-plain-shawl',
        name: 'Superfine Plain Shawl',
        description: 'Designed for formal occasions, this wrap combines ceremonial elegance with everyday comfort.',
        price: '₹1217',
        image: '/image 138 (3).png',
        category: 'shawls',
        specs: {
            Material: 'Premium Pashmina Blend',
            Dimensions: '220 cm × 90 cm',
            Weight: '280g',
            Care: 'Dry Clean Only',
        },
    },
    {
        id: 'stole',
        name: 'Stole',
        description: 'Classic check pattern with a military-inspired colour palette, woven with exceptional precision.',
        price: '₹1106',
        image: '/image 138 (4).png',
        category: 'shawls',
        specs: {
            Material: '100% Wool',
            Dimensions: '200 cm × 80 cm',
            Weight: '340g',
            Care: 'Dry Clean Recommended',
        },
    },
    {
        id: 'munshiyari-shawl',
        name: 'Munshiyari Shawl',
        description: 'A pristine ivory shawl with subtle embroidery, perfect for special occasions.',
        price: '₹1215',
        image: '/image 137.png',
        category: 'shawls',
        specs: {
            Material: 'Cashmere-Wool Blend',
            Dimensions: '200 cm × 85 cm',
            Weight: '300g',
            Care: 'Dry Clean Only',
        },
    },
    {
        id: 'ranikhet-shawl',
        name: 'Ranikhet Shawl',
        description: 'A refined shawl inspired by regimental officer traditions, featuring a subtle herringbone weave.',
        price: '₹1373',
        image: '/image 137 (1).png',
        category: 'shawls',
        specs: {
            Material: 'Pure Wool',
            Dimensions: '180 cm × 60 cm',
            Weight: '200g',
            Care: 'Hand Wash Cold',
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

    // Accessories
    {
        id: 'classic-muffler',
        name: 'Muffler',
        description: 'Classic woollen muffler with traditional patterns, perfect for everyday warmth and style.',
        price: '₹1500',
        image: '/muffler.png',
        category: 'accessories',
        specs: {
            Material: 'Pure Wool',
            Dimensions: '150 cm × 30 cm',
            Weight: '120g',
            Care: 'Hand Wash Cold',
        },
    },
    {
        id: 'scarf-superfine',
        name: 'Scarf Superfine',
        description: 'Superfine wool scarf with elegant drape and exceptional softness for refined comfort.',
        price: '₹688',
        image: '/scarfsupreme.png',
        category: 'accessories',
        specs: {
            Material: 'Superfine Wool',
            Dimensions: '180 cm × 35 cm',
            Weight: '100g',
            Care: 'Dry Clean Only',
        },
    },
    {
        id: 'kinari-round-border',
        name: 'Kinari Round Border',
        description: 'Distinctive scarf featuring traditional kinari round border detailing and premium wool.',
        price: '₹1414',
        image: '/kinariround.png',
        category: 'accessories',
        specs: {
            Material: 'Fine Wool',
            Dimensions: '170 cm × 32 cm',
            Weight: '110g',
            Care: 'Hand Wash Cold',
        },
    },
    {
        id: 'small-scarf',
        name: 'Small Scarf',
        description: 'Compact and versatile scarf, ideal for layering and adding a touch of warmth.',
        price: '₹660',
        image: '/smallscarf.png',
        category: 'accessories',
        specs: {
            Material: 'Wool Blend',
            Dimensions: '140 cm × 25 cm',
            Weight: '80g',
            Care: 'Hand Wash Cold',
        },
    },

    // Cosmetics
    {
        id: 'citrus-woods',
        name: 'Citrus Woods',
        description: 'Natural soap with citrus and wood essences.',
        price: '₹250',
        image: '/image 137 (2) copy.png',
        category: 'cosmetics',
    },
    {
        id: 'sandalwood-patchouli',
        name: 'Sandalwood & Patchouli',
        description: 'Luxurious soap with sandalwood and patchouli.',
        price: '₹140',
        image: '/image 137 (3).png',
        category: 'cosmetics',
    },
    {
        id: 'lemongrass-nettle',
        name: 'Lemongrass & Nettle',
        description: 'Refreshing soap with lemongrass and nettle.',
        price: '₹140',
        image: '/image 137 (6).png',
        category: 'cosmetics',
    },
    {
        id: 'rhododendron-rose',
        name: 'Rhododendron & Rose',
        description: 'Floral soap with rhododendron and rose.',
        price: '₹160',
        image: '/image 137 (5).png',
        category: 'cosmetics',
    },
    {
        id: 'himalayan-morning',
        name: 'Himalayan Morning',
        description: 'Fresh morning-inspired soap.',
        price: '₹270',
        image: '/image 137 (8).png',
        category: 'cosmetics',
    },
    {
        id: 'frangipani',
        name: 'Frangipani',
        description: 'Exotic frangipani scented soap.',
        price: '₹205',
        image: '/image 137 (9).png',
        category: 'cosmetics',
    },
    {
        id: 'lemongrass-scrub',
        name: 'Lemongrass Scrub',
        description: 'Exfoliating lemongrass scrub soap.',
        price: '₹205',
        image: '/image 137 (10).png',
        category: 'cosmetics',
    },
    {
        id: 'rose-geranium',
        name: 'Rose Geranium',
        description: 'Aromatic rose geranium soap.',
        price: '₹225',
        image: '/image 137 (11).png',
        category: 'cosmetics',
    },
    {
        id: 'haldi-chandan',
        name: 'Haldi Chandan',
        description: 'Traditional turmeric and sandalwood soap.',
        price: '₹140',
        image: '/image 137 (12).png',
        category: 'cosmetics',
    },
    {
        id: 'cinnamon',
        name: 'Cinnamon',
        description: 'Warm cinnamon scented soap.',
        price: '₹105',
        image: '/image 137 (13).png',
        category: 'cosmetics',
    },
    {
        id: 'zesty-lime',
        name: 'Zesty Lime',
        description: 'Energizing lime soap.',
        price: '₹230',
        image: '/image 137 (14).png',
        category: 'cosmetics',
    },
    {
        id: 'vanilla',
        name: 'Vanilla',
        description: 'Sweet vanilla scented soap.',
        price: '₹230',
        image: '/image 137 (15).png',
        category: 'cosmetics',
    },
    {
        id: 'wild-berry',
        name: 'Wild Berry',
        description: 'Fruity wild berry soap.',
        price: '₹225',
        image: '/image 137 (16).png',
        category: 'cosmetics',
    },
    {
        id: 'forest-bathing',
        name: 'Forest Bathing',
        description: 'Earthy forest-inspired soap.',
        price: '₹250',
        image: '/image 137 (17).png',
        category: 'cosmetics',
    },
    {
        id: 'rosemary',
        name: 'RoseMary',
        description: 'Herbal rosemary soap.',
        price: '₹105',
        image: '/image 137 (18).png',
        category: 'cosmetics',
    },
    {
        id: 'kumkumadi-body-soap',
        name: 'Kumkumadi Body Soap',
        description: 'Luxurious kumkumadi body soap.',
        price: '₹140',
        image: '/image 137 (19).png',
        category: 'cosmetics',
    },
    {
        id: 'precious-patchouli',
        name: 'Precious Patchouli',
        description: 'Rich patchouli scented soap.',
        price: '₹225',
        image: '/image 137 (20).png',
        category: 'cosmetics',
    },
    {
        id: 'mountain-nights',
        name: 'Mountain Nights',
        description: 'Calming mountain night soap.',
        price: '₹270',
        image: '/image 137 (21).png',
        category: 'cosmetics',
    },
    {
        id: 'papaya',
        name: 'Papaya',
        description: 'Tropical papaya soap.',
        price: '₹230',
        image: '/image 137 (22).png',
        category: 'cosmetics',
    },
    {
        id: 'vetiver',
        name: 'Vetiver',
        description: 'Earthy vetiver scented soap.',
        price: '₹105',
        image: '/image 137 (23).png',
        category: 'cosmetics',
    },
    {
        id: 'silky-smooth-avocado',
        name: 'Silky Smooth Avocado',
        description: 'Nourishing avocado soap.',
        price: '₹140',
        image: '/image 137 (24).png',
        category: 'cosmetics',
    },

    // Knitwear
    {
        id: 'poncho',
        name: 'Poncho',
        description: 'Soft and comfortable poncho with timeless design.',
        price: '₹1575',
        image: '/image 137 (25).png',
        category: 'knitwear',
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
