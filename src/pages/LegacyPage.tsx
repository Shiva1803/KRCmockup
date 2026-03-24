import HeroSection from '../components/HeroSection'
import SectionHeading from '../components/SectionHeading'
import { useFadeIn } from '../hooks/useAnimations'

export default function LegacyPage() {
    const fadeRef = useFadeIn()

    return (
        <div ref={fadeRef}>
            {/* Hero */}
            <HeroSection
                title="The Legacy"
                subtitle="A story of honour, sacrifice, and the indomitable spirit of the women who keep the flame alive."
                height="medium"
                overlay="navy"
            />

            {/* Regiment Story */}
            <section className="py-20 md:py-28 bg-ivory">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="fade-in">
                            <span className="text-ochre text-xs tracking-[0.3em] uppercase font-semibold">
                                Chapter I
                            </span>
                            <h2 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-tight">
                                The Regiment Story
                            </h2>
                            <div className="mt-4 w-16 h-0.5 bg-gold" />
                            <p className="mt-8 text-navy/70 text-base md:text-lg leading-relaxed text-justify">
                                The Kumaon Regiment of the Indian Army carries a legacy shaped in the highlands of the Himalayas. Across generations, its soldiers have stood watch over the nation's most formidable frontiers with quiet resolve and unyielding courage. Through generations of duty, their valour has been honoured with the nation's highest gallantry distinctions, including Param Vir Chakras, Maha Vir Chakras, and Vir Chakras. Yet beyond the battlefield lies a silent pillar of strength, the families whose resilience and grace echo the same spirit that guards the nation.
                            </p>
                        </div>
                        <div className="fade-in">
                            <div className="relative">
                                <div className="aspect-[3/4] bg-navy/10 overflow-hidden">
                                    <img
                                        src="/regiment-story.webp"
                                        alt="Regiment Heritage"
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-maroon/30 -z-10" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Divider */}
            <section className="bg-navy py-16 md:py-20">
                <div className="max-w-3xl mx-auto px-6 text-center">
                    <p className="fade-in font-heading text-xl sm:text-2xl md:text-3xl text-ivory font-light italic leading-relaxed">
                        "Their hands, which once held the hands of heroes, now weave the warmth that shelters a nation."
                    </p>
                    <div className="mt-6 w-12 h-0.5 bg-gold mx-auto" />
                </div>
            </section>

            {/* Veer Nari Contribution */}
            <section className="py-20 md:py-28 bg-ivory">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        <div className="fade-in order-2 lg:order-1">
                            <div className="relative">
                                <div className="aspect-[3/4] bg-navy/10 overflow-hidden">
                                    <img
                                        src="/veer-nari-contribution.png"
                                        alt="Veer Nari artisans at work"
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-amber-900 -z-10" />
                            </div>
                        </div>
                        <div className="fade-in order-1 lg:order-2">
                            <span className="text-ochre text-xs tracking-[0.3em] uppercase font-semibold">
                                Chapter II
                            </span>
                            <h2 className="mt-4 font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-navy leading-tight">
                                Veer Nari
                                <br />
                                <span className="text-maroon">Contribution</span>
                            </h2>
                            <div className="mt-4 w-16 h-0.5 bg-gold" />
                            <p className="mt-8 text-navy/70 text-base md:text-lg leading-relaxed text-justify">
                                At the heart of KRC Woollens lies the Veer Nari programme, an initiative rooted in dignity, purpose, and quiet resilience. Within the hills of Kumaon, a community of women connected to the legacy of fallen soldiers carry forward a different kind of service: one that rebuilds strength through craft and self-reliance.
                            </p>
                            <p className="mt-4 text-navy/70 text-base md:text-lg leading-relaxed text-justify">
                                Here, raw wool is patiently transformed by skilled hands into finely woven shawls, stoles, blankets, and mufflers. Each thread carries a story - of endurance, of quiet courage, and of lives that continue to stand strong in the face of sacrifice. What emerges is more than a textile; it is a living expression of resilience, shaped by hands that honour a legacy.
                            </p>

                            {/* Impact Numbers */}
                            <div className="mt-10 grid grid-cols-2 gap-6">
                                {[
                                    { num: '400+', label: 'Women Employed' },
                                    { num: '10,000+', label: 'Products Crafted' },
                                    { num: '100%', label: 'Pure Wool' },
                                    { num: '50+', label: 'Years of Heritage' },
                                ].map((item) => (
                                    <div key={item.label} className="border-l-2 border-gold pl-4">
                                        <span className="block font-heading text-2xl md:text-3xl font-bold text-navy">
                                            {item.num}
                                        </span>
                                        <span className="text-navy/50 text-xs md:text-sm tracking-wider uppercase">
                                            {item.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Heritage & Founding */}
            <section className="py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="fade-in max-w-3xl mx-auto text-center">
                        <SectionHeading
                            title="Heritage & Founding"
                            subtitle="From regimental tradition to national pride. The story of KRC Woollens."
                        />
                    </div>

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                year: 'The Beginning',
                                title: 'A Mission of Honour',
                                desc: 'KRC Woollens was founded in 1977 under the Kumaon Regimental Centre to create dignity and opportunity for the families of fallen soldiers, and was inaugurated by General T. N. Raina, then Chief of Army Staff.',
                            },
                            {
                                year: 'The Craft',
                                title: 'Craft in Every Thread',
                                desc: 'Through dedicated training, carefully sourced raw wool, and refined craftsmanship, every product bearing the KRC name reflects the finest traditions of Indian wool weaving.',
                            },
                            {
                                year: 'The Future',
                                title: 'Growing the Legacy',
                                desc: 'Today KRC Woollens continues to grow its reach, supporting more Veer Naris while bringing the Warmth of our Woollens to audiences across India and beyond',
                            },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="fade-in p-8 bg-ivory border border-navy/5 hover:border-gold/30 transition-all duration-500"
                                style={{ transitionDelay: `${i * 100}ms` }}
                            >
                                <span className="text-ochre text-xs tracking-[0.3em] uppercase font-semibold">
                                    {item.year}
                                </span>
                                <h3 className="mt-3 font-heading text-xl md:text-2xl font-bold text-navy">
                                    {item.title}
                                </h3>
                                <p className="mt-4 text-navy/60 text-sm leading-relaxed text-justify">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-olive/90 via-olive to-olive/80" />
                <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                    <h2 className="fade-in font-heading text-3xl md:text-4xl text-ivory font-bold">
                        Be Part of the Legacy
                    </h2>
                    <p className="fade-in mt-4 text-ivory/70 text-base md:text-lg">
                        Every purchase supports the Veer Nari mission. Explore our collection and wear a story of courage.
                    </p>
                    <a
                        href="/products"
                        className="fade-in inline-block mt-8 px-8 py-3.5 bg-gold text-navy font-semibold text-sm tracking-widest uppercase hover:bg-ochre transition-all duration-300"
                    >
                        Shop Now
                    </a>
                </div>
            </section>
        </div>
    )
}
