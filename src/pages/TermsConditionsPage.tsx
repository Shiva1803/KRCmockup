import { useFadeIn } from '../hooks/useAnimations'

export default function TermsConditionsPage() {
    const fadeRef = useFadeIn()

    return (
        <div ref={fadeRef} className="min-h-screen bg-ivory py-20 md:py-28">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-maroon">
                        Terms & Conditions
                    </h1>
                    <div className="mt-3 w-16 h-0.5 bg-gold mx-auto" />
                    <p className="mt-4 text-navy/60 text-sm tracking-wide">
                        Last Updated: March 2026
                    </p>
                </div>

                {/* Content */}
                <div className="prose prose-sm md:prose-base max-w-none">
                    <p className="text-navy/70 leading-relaxed mb-8">
                        Welcome to KRC Woollens. By accessing or using this website, you agree to the following terms and conditions.
                    </p>

                    {/* Section 1 */}
                    <h2 className="font-heading text-xl md:text-2xl font-bold text-navy mt-8 mb-4">
                        1. Website Purpose
                    </h2>
                    <p className="text-navy/70 leading-relaxed mb-3">
                        This website is intended to:
                    </p>
                    <ul className="list-none space-y-2 mb-4 ml-4">
                        <li className="text-navy/70 leading-relaxed">- Showcase KRC Woollens products</li>
                        <li className="text-navy/70 leading-relaxed">- Enable users to contact us via phone or WhatsApp</li>
                    </ul>
                    <p className="text-navy/70 leading-relaxed mb-8">
                        No direct purchases are made through the website, We use 3rd party services such as <span className="font-semibold text-navy">WhatsApp to initiate purchases and communications.</span>
                    </p>

                    {/* Section 2 */}
                    <h2 className="font-heading text-xl md:text-2xl font-bold text-navy mt-8 mb-4">
                        2. Use of Website
                    </h2>
                    <p className="text-navy/70 leading-relaxed mb-3">
                        You agree to use this website for lawful purposes only. You must not attempt to:
                    </p>
                    <ul className="list-none space-y-2 mb-8 ml-4">
                        <li className="text-navy/70 leading-relaxed">- Disrupt or damage the website</li>
                        <li className="text-navy/70 leading-relaxed">- Misuse its content or functionality</li>
                    </ul>

                    {/* Section 3 */}
                    <h2 className="font-heading text-xl md:text-2xl font-bold text-navy mt-8 mb-4">
                        3. Product Information
                    </h2>
                    <p className="text-navy/70 leading-relaxed mb-3">
                        We strive to ensure all product descriptions and catalogue details are accurate. However:
                    </p>
                    <ul className="list-none space-y-2 mb-8 ml-4">
                        <li className="text-navy/70 leading-relaxed">- Variations may occur due to materials and manufacturing</li>
                        <li className="text-navy/70 leading-relaxed">- Displayed content is subject to updates without prior notice</li>
                    </ul>

                    {/* Section 4 */}
                    <h2 className="font-heading text-xl md:text-2xl font-bold text-navy mt-8 mb-4">
                        4. Orders & Communication
                    </h2>
                    <p className="text-navy/70 leading-relaxed mb-3">
                        All orders and inquiries are handled <span className="font-semibold text-navy">offline via direct communication</span> (phone or WhatsApp).
                    </p>
                    <ul className="list-none space-y-2 mb-8 ml-4">
                        <li className="text-navy/70 leading-relaxed">- Submitting an inquiry does not guarantee order acceptance</li>
                        <li className="text-navy/70 leading-relaxed">- Final pricing and availability are confirmed during direct communication</li>
                    </ul>

                    {/* Section 5 */}
                    <h2 className="font-heading text-xl md:text-2xl font-bold text-navy mt-8 mb-4">
                        5. Intellectual Property
                    </h2>
                    <p className="text-navy/70 leading-relaxed mb-8">
                        All content on this website, including text, images, catalogues, and branding, is the property of KRC Woollens and may not be reproduced or used without permission.
                    </p>

                    {/* Section 6 */}
                    <h2 className="font-heading text-xl md:text-2xl font-bold text-navy mt-8 mb-4">
                        6. Limitation of Liability
                    </h2>
                    <p className="text-navy/70 leading-relaxed mb-3">
                        KRC Woollens shall not be held liable for:
                    </p>
                    <ul className="list-none space-y-2 mb-8 ml-4">
                        <li className="text-navy/70 leading-relaxed">- Any inaccuracies in displayed content</li>
                        <li className="text-navy/70 leading-relaxed">- Any indirect or consequential damages from using this website</li>
                    </ul>

                    {/* Section 7 */}
                    <h2 className="font-heading text-xl md:text-2xl font-bold text-navy mt-8 mb-4">
                        7. Changes to Terms
                    </h2>
                    <p className="text-navy/70 leading-relaxed mb-8">
                        We reserve the right to update these terms at any time. Continued use of the website constitutes acceptance of any changes.
                    </p>

                    {/* Section 8 */}
                    <h2 className="font-heading text-xl md:text-2xl font-bold text-navy mt-8 mb-4">
                        8. Contact Us
                    </h2>
                    <p className="text-navy/70 leading-relaxed mb-3">
                        For any questions regarding these Terms & Conditions, please contact us:
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
