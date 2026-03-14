import HeroSection from '../components/HeroSection'
import { useFadeIn } from '../hooks/useAnimations'

export default function ContactPage() {
    const fadeRef = useFadeIn()

    return (
        <div ref={fadeRef}>
            {/* Hero */}
            <HeroSection
                title="Contact Us"
                subtitle="We'd love to hear from you. Reach out for inquiries, orders, or to learn more about our mission."
                height="medium"
                overlay="maroon"
            />

            {/* Contact Cards */}
            <section className="py-20 md:py-28 bg-ivory">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        {/* Left Column: Phone + WhatsApp */}
                        <div className="fade-in space-y-8">
                            {/* Phone */}
                            <div className="p-8 md:p-12 bg-white border border-navy/5 hover:border-gold/30 transition-all duration-500">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-maroon/10 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-maroon" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy">
                                        Phone
                                    </h3>
                                </div>
                                <p className="text-navy/70 text-base leading-relaxed">
                                    For direct inquiries and order assistance.
                                </p>
                                <a
                                    href="tel:+918979769881"
                                    className="mt-4 inline-block font-heading text-xl text-navy font-bold hover:text-maroon transition-colors duration-300"
                                >
                                    +91 89797 69881
                                </a>
                            </div>

                            {/* WhatsApp */}
                            <div className="p-8 md:p-12 bg-white border border-navy/5 hover:border-gold/30 transition-all duration-500">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-olive/10 rounded-full flex items-center justify-center">
                                        <svg className="w-6 h-6 text-olive" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy">
                                        WhatsApp
                                    </h3>
                                </div>
                                <p className="text-navy/70 text-base leading-relaxed mb-8">
                                    The quickest way to reach us. Send us a message on WhatsApp and our team will
                                    respond within 24 hours.
                                </p>
                                <a
                                    href="https://wa.me/918979769881"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block w-full text-center px-8 py-4 bg-olive text-ivory font-semibold text-sm tracking-widest uppercase hover:bg-olive/90 transition-all duration-300"
                                >
                                    Chat on WhatsApp
                                </a>
                                <p className="mt-4 text-navy/40 text-xs text-center tracking-wide">
                                    Available Mon–Sat, 9 AM – 6 PM IST
                                </p>
                            </div>
                        </div>

                        {/* Right Column: Visit Us (full height) */}
                        <div className="fade-in">
                            <div className="h-full p-8 md:p-12 bg-white border border-navy/5 hover:border-gold/30 transition-all duration-500 flex flex-col">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 bg-ochre/10 rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-ochre" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy">
                                        Visit Us
                                    </h3>
                                </div>
                                <div className="text-navy/70 text-base leading-relaxed">
                                    <p>KRC Woollens</p>
                                    <p>Regimental Centre,</p>
                                    <p>Ranikhet, Uttarakhand</p>
                                    <p>India — 263645</p>
                                </div>
                                <div className="mt-6 w-full flex-1 min-h-[300px] overflow-hidden border border-navy/10">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.6815239626503!2d79.42504897558426!3d29.642042837524208!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0abd61e27a1f7%3A0xf97db30e1c2fbd6d!2sKRC%20woollens!5e1!3m2!1sen!2sin!4v1772429424257!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="KRC Woollens Location"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="fade-in mt-12 p-8 md:p-12 bg-olive text-center">
                        <h3 className="font-heading text-2xl md:text-3xl font-bold text-ivory">
                            Email Us
                        </h3>
                        <a
                            href="mailto:info@krcwoollens.com"
                            className="mt-4 inline-block font-heading text-xl text-gold hover:text-ochre transition-colors duration-300"
                        >
                            info@krcwoollens.com
                        </a>
                        <p className="mt-2 text-ivory/50 text-sm">
                            For detailed inquiries, quotations, and partnership opportunities.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
