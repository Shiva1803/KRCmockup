import { Link } from 'react-router-dom'

const footerLinks = [
    {
        heading: 'Explore',
        links: [
            { to: '/products', label: 'Products' },
            { to: '/catalogue', label: 'Catalogue' },
            { to: '/bulk-order', label: 'Bulk Order' },
        ],
    },
    {
        heading: 'Company',
        links: [
            { to: '/legacy', label: 'The Legacy' },
            { to: '/contact', label: 'Contact Us' },
        ],
    },
]

export default function Footer() {
    return (
        <footer className="relative bg-white text-navy overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
                style={{ backgroundImage: "url('/image.webp')" }}
            />
            <div className="absolute inset-0 bg-white/60" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
                    {/* Brand Column */}
                    <div className="md:col-span-1">
                        <Link to="/" className="inline-flex items-center gap-3">
                            <img src="/krc-logo-new.png" alt="KRC Crest" className="h-10 md:h-12 w-auto" />
                            <span className="text-navy/30 text-2xl font-light select-none">|</span>
                            <span className="font-heading text-3xl font-bold text-navy tracking-wider">
                                KRC Woollens
                            </span>
                        </Link>
                        <p className="mt-4 text-navy/60 text-sm leading-relaxed max-w-xs">
                            Premium handcrafted woollens, woven with pride by the brave women of our martyred soldiers.
                        </p>
                    </div>

                    {/* Link Columns */}
                    {footerLinks.map((group) => (
                        <div key={group.heading}>
                            <h4 className="font-heading text-lg font-semibold text-ochre tracking-wider mb-4">
                                {group.heading}
                            </h4>
                            <ul className="space-y-3">
                                {group.links.map((link) => (
                                    <li key={link.to}>
                                        <Link
                                            to={link.to}
                                            className="text-sm text-navy/60 hover:text-gold transition-colors duration-300 tracking-wide"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="mt-16 pt-8 border-t border-navy/10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-navy/40 text-xs tracking-wider">
                            &copy; {new Date().getFullYear()} KRC Woollens. All rights reserved.
                        </p>
                        <p className="text-navy/40 text-xs tracking-wider italic">
                            Crafted with honour. Worn with pride.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
