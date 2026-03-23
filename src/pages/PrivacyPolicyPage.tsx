import { useFadeIn } from '../hooks/useAnimations'

export default function PrivacyPolicyPage() {
    const fadeRef = useFadeIn()

    return (
        <div ref={fadeRef} className="min-h-screen bg-ivory py-20 md:py-28">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-maroon mt-8">
                        Privacy Policy
                    </h1>
                    <div className="mt-3 w-16 h-0.5 bg-gold mx-auto" />
                    <p className="mt-4 text-navy/60 text-sm tracking-wide">
                        Last Updated: March 2026
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-sm md:prose-base max-w-none">
                    <p className="text-navy/70 leading-relaxed mb-6">
                        At KRC Woollens, we respect your privacy and are committed to maintaining transparency about how our website operates.
                    </p>
                        
                        <p className="text-navy/70 leading-relaxed mb-8">
                            This website is designed primarily for informational purposes, allowing users to explore our products, view or download catalogues, and contact us directly.
                        </p>

                        {/* Section 1 */}
                        <h2 className="font-heading text-xl md:text-2xl font-bold text-navy mt-8 mb-4">
                            1. Information We Collect
                        </h2>
                        <p className="text-navy/70 leading-relaxed mb-4">
                            We do not collect, store, or maintain personal data in any database on this website.
                        </p>
                        <p className="text-navy/70 leading-relaxed mb-3">
                            However, you may voluntarily share information with us when you:
                        </p>
                        <ul className="list-none space-y-2 mb-4 ml-4">
                            <li className="text-navy/70 leading-relaxed">- Contact us via WhatsApp</li>
                            <li className="text-navy/70 leading-relaxed">- Call us directly</li>
                            <li className="text-navy/70 leading-relaxed">- Send inquiries through any external communication channel</li>
                        </ul>
                        <p className="text-navy/70 leading-relaxed mb-8">
                            Any information shared through these channels is handled privately and is not stored on our website.
                        </p>

                        {/* Section 2 */}
                        <h2 className="font-heading text-xl md:text-2xl font-bold text-navy mt-8 mb-4">
                            2. Use of Information
                        </h2>
                        <p className="text-navy/70 leading-relaxed mb-3">
                            Since we do not store user data on our website:
                        </p>
                        <ul className="list-none space-y-2 mb-4 ml-4">
                            <li className="text-navy/70 leading-relaxed">- We do not create user profiles</li>
                            <li className="text-navy/70 leading-relaxed">- We do not track personal activity tied to individuals</li>
                            <li className="text-navy/70 leading-relaxed">- We do not sell or share personal data</li>
                        </ul>
                        <p className="text-navy/70 leading-relaxed mb-8">
                            Any information you share directly with us (via WhatsApp or phone) is used only to respond to your inquiries or assist with your requirements.
                        </p>

                        {/* Section 3 */}
                        <h2 className="font-heading text-xl md:text-2xl font-bold text-navy mt-8 mb-4">
                            3. Third-Party Services
                        </h2>
                        <p className="text-navy/70 leading-relaxed mb-3">
                            We may use basic third-party services such as:
                        </p>
                        <ul className="list-none space-y-2 mb-4 ml-4">
                            <li className="text-navy/70 leading-relaxed">- Hosting providers</li>
                            <li className="text-navy/70 leading-relaxed">- Analytics tools (if enabled)</li>
                        </ul>
                        <p className="text-navy/70 leading-relaxed mb-8">
                            These services may collect limited non-personal data (such as browser type or page visits) to improve website performance.
                        </p>

                        {/* Section 4 */}
                        <h2 className="font-heading text-xl md:text-2xl font-bold text-navy mt-8 mb-4">
                            4. Data Security
                        </h2>
                        <p className="text-navy/70 leading-relaxed mb-8">
                            As we do not store user data on our website, risks associated with data storage are minimized. However, we ensure that our website is maintained using secure and reliable platforms.
                        </p>

                        {/* Section 5 */}
                        <h2 className="font-heading text-xl md:text-2xl font-bold text-navy mt-8 mb-4">
                            5. Your Control
                        </h2>
                        <p className="text-navy/70 leading-relaxed mb-3">
                            You are not required to provide any personal information to use this website.
                        </p>
                        <p className="text-navy/70 leading-relaxed mb-8">
                            If you choose to contact us, you do so voluntarily.
                        </p>

                        {/* Section 6 */}
                        <h2 className="font-heading text-xl md:text-2xl font-bold text-navy mt-8 mb-4">
                            6. Contact Us
                        </h2>
                        <p className="text-navy/70 leading-relaxed mb-3">
                            If you have any questions about this Privacy Policy, please contact us:
                        </p>
                        <a 
                            href="tel:+918979769881"
                            className="text-maroon font-semibold hover:text-ochre transition-colors duration-300"
                        >
                            +91 89797 69881
                        </a>
                </div>
            </div>
        </div>
    )
}
