import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="relative bg-white text-navy overflow-hidden border-t border-navy/10">
            <div className="relative z-10 max-w-6xl mx-auto px-6 py-16 md:py-20">
                <div className="flex flex-col md:flex-row justify-center items-start gap-12 md:gap-20 lg:gap-32">
                    {/* Brand Column */}
                    <div className="flex-shrink-0">
                        <Link to="/" className="inline-flex items-center gap-3">
                            <img src="/krc-logo-new.png" alt="KRC Woollens Logo" className="h-10 md:h-12 w-auto" />
                            <span className="text-navy/30 text-2xl font-light select-none">|</span>
                            <span className="font-heading text-2xl md:text-3xl font-bold text-navy tracking-wider">
                                KRC Woollens
                            </span>
                        </Link>
                        <p className="mt-4 text-navy/60 text-sm leading-relaxed max-w-xs">
                            Premium handcrafted woollens, woven with pride by the brave women of our martyred soldiers.
                        </p>
                    </div>

                    {/* Explore Column */}
                    <div className="flex-shrink-0">
                        <h4 className="font-heading text-lg font-semibold text-ochre tracking-wider mb-4">
                            Explore
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/products"
                                    className="text-sm text-navy/60 hover:text-ochre transition-colors duration-300 tracking-wide"
                                >
                                    Products
                                </Link>
                            </li>
                            <li>
                                <a
                                    href="/samplecatalogue.pdf"
                                    download
                                    className="text-sm text-navy/60 hover:text-ochre transition-colors duration-300 tracking-wide"
                                >
                                    Catalogue
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://wa.me/918979769881"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-navy/60 hover:text-ochre transition-colors duration-300 tracking-wide"
                                >
                                    Bulk Order
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div className="flex-shrink-0">
                        <h4 className="font-heading text-lg font-semibold text-ochre tracking-wider mb-4">
                            Company
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/legacy"
                                    className="text-sm text-navy/60 hover:text-ochre transition-colors duration-300 tracking-wide"
                                >
                                    The Legacy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-sm text-navy/60 hover:text-ochre transition-colors duration-300 tracking-wide"
                                >
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/privacy"
                                    className="text-sm text-navy/60 hover:text-ochre transition-colors duration-300 tracking-wide"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/terms"
                                    className="text-sm text-navy/60 hover:text-ochre transition-colors duration-300 tracking-wide"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-16 pt-8 border-t border-navy/10">
                    <div className="flex flex-col items-center justify-center gap-2 text-center">
                        <p className="text-navy text-xs tracking-wider">
                            &copy; {new Date().getFullYear()} KRC Woollens. All rights reserved.
                        </p>
                        <p className="text-navy text-xs tracking-wider italic">
                            Crafted with honour. Worn with pride.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
