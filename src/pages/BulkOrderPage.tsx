import { useState } from 'react'
import HeroSection from '../components/HeroSection'
import { useFadeIn } from '../hooks/useAnimations'

export default function BulkOrderPage() {
    const fadeRef = useFadeIn()
    const [submitted, setSubmitted] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => setSubmitted(false), 4000)
    }

    return (
        <div ref={fadeRef}>
            {/* Hero */}
            <HeroSection
                title="Bulk Orders"
                subtitle="Custom orders for corporate gifting, institutional needs, and wholesale purchases. Let us craft something special for you."
                height="medium"
                overlay="dark"
            />

            {/* Form Section */}
            <section className="py-20 md:py-28 bg-ivory">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="fade-in">
                        <div className="text-center mb-12">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy">
                                Request a Quote
                            </h2>
                            <div className="mt-4 w-16 h-0.5 bg-gold mx-auto" />
                            <p className="mt-6 text-navy/60 text-base md:text-lg">
                                Fill in the details below and our team will get back to you within 48 hours.
                            </p>
                        </div>

                        {submitted ? (
                            <div className="p-8 bg-olive/10 border border-olive/20 text-center">
                                <h3 className="font-heading text-2xl text-olive font-bold">
                                    Thank You!
                                </h3>
                                <p className="mt-2 text-olive/80">
                                    Your inquiry has been submitted. We'll be in touch shortly.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-xs tracking-wider uppercase text-navy/60 mb-2 font-medium">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            required
                                            className="w-full px-4 py-3 bg-white border border-navy/10 text-navy text-sm focus:outline-none focus:border-gold transition-colors duration-300"
                                            placeholder="Your full name"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-xs tracking-wider uppercase text-navy/60 mb-2 font-medium">
                                            Email *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            required
                                            className="w-full px-4 py-3 bg-white border border-navy/10 text-navy text-sm focus:outline-none focus:border-gold transition-colors duration-300"
                                            placeholder="you@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="phone" className="block text-xs tracking-wider uppercase text-navy/60 mb-2 font-medium">
                                            Phone *
                                        </label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            required
                                            className="w-full px-4 py-3 bg-white border border-navy/10 text-navy text-sm focus:outline-none focus:border-gold transition-colors duration-300"
                                            placeholder="+91 XXXXX XXXXX"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="quantity" className="block text-xs tracking-wider uppercase text-navy/60 mb-2 font-medium">
                                            Estimated Quantity *
                                        </label>
                                        <input
                                            type="number"
                                            id="quantity"
                                            required
                                            min="10"
                                            className="w-full px-4 py-3 bg-white border border-navy/10 text-navy text-sm focus:outline-none focus:border-gold transition-colors duration-300"
                                            placeholder="Minimum 10 units"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="product-interest" className="block text-xs tracking-wider uppercase text-navy/60 mb-2 font-medium">
                                        Product Interest *
                                    </label>
                                    <select
                                        id="product-interest"
                                        required
                                        className="w-full px-4 py-3 bg-white border border-navy/10 text-navy text-sm focus:outline-none focus:border-gold transition-colors duration-300 appearance-none"
                                    >
                                        <option value="">Select a product category</option>
                                        <option value="shawls">Shawls</option>
                                        <option value="stoles">Stoles</option>
                                        <option value="blankets">Blankets</option>
                                        <option value="mufflers">Mufflers</option>
                                        <option value="custom">Custom / Mixed Order</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-xs tracking-wider uppercase text-navy/60 mb-2 font-medium">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={5}
                                        className="w-full px-4 py-3 bg-white border border-navy/10 text-navy text-sm focus:outline-none focus:border-gold transition-colors duration-300 resize-none"
                                        placeholder="Tell us about your requirements, customization needs, timeline, etc."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-gold text-navy font-semibold text-sm tracking-widest uppercase hover:bg-ochre transition-all duration-300 hover:shadow-lg hover:shadow-gold/20"
                                >
                                    Submit Inquiry
                                </button>

                                <p className="text-navy/40 text-xs text-center tracking-wide">
                                    We respect your privacy. Your information will not be shared with third parties.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </div>
    )
}
