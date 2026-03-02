import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useScrollDirection } from '../hooks/useAnimations'

const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/products', label: 'Products' },
    { to: '/legacy', label: 'The Legacy' },
    { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false)
    const scrollDirection = useScrollDirection()

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${scrollDirection === 'down' ? '-translate-y-full' : 'translate-y-0'
                }`}
        >
            <nav className="bg-navy/95 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        {/* Logo */}
                        <Link to="/" className="flex-shrink-0 flex items-center gap-3" onClick={() => setMobileOpen(false)}>
                            <img src="/krclogo.jpeg" alt="KRC Crest" className="h-10 md:h-12 w-auto" />
                            <span className="text-ivory/30 text-2xl font-light select-none">|</span>
                            <span className="font-heading text-2xl md:text-3xl font-bold text-ivory tracking-wider">
                                KRC<span className="text-gold">.</span>
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    className={({ isActive }) =>
                                        `font-body text-sm tracking-widest uppercase transition-colors duration-300 ${isActive
                                            ? 'text-gold'
                                            : 'text-ivory/80 hover:text-gold'
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                            <Link
                                to="/bulk-order"
                                className="ml-4 px-5 py-2 bg-gold text-navy text-sm font-semibold tracking-wider uppercase rounded-none hover:bg-ochre transition-colors duration-300"
                            >
                                Bulk Order
                            </Link>
                        </div>

                        {/* Hamburger */}
                        <button
                            className="md:hidden flex flex-col gap-1.5 p-2"
                            onClick={() => setMobileOpen(!mobileOpen)}
                            aria-label="Toggle menu"
                        >
                            <span
                                className={`block w-6 h-0.5 bg-ivory transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''
                                    }`}
                            />
                            <span
                                className={`block w-6 h-0.5 bg-ivory transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''
                                    }`}
                            />
                            <span
                                className={`block w-6 h-0.5 bg-ivory transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''
                                    }`}
                            />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="px-6 pb-6 pt-2 space-y-1 bg-navy border-t border-ivory/10">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                onClick={() => setMobileOpen(false)}
                                className={({ isActive }) =>
                                    `block py-3 text-sm tracking-widest uppercase transition-colors duration-300 ${isActive ? 'text-gold' : 'text-ivory/80 hover:text-gold'
                                    }`
                                }
                            >
                                {link.label}
                            </NavLink>
                        ))}
                        <Link
                            to="/bulk-order"
                            onClick={() => setMobileOpen(false)}
                            className="block mt-4 px-5 py-3 bg-gold text-navy text-sm font-semibold tracking-wider uppercase text-center hover:bg-ochre transition-colors duration-300"
                        >
                            Bulk Order
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}
