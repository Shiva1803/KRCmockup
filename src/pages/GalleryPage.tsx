import InteractiveBentoGallery, { type MediaItemType } from '../components/InteractiveBentoGallery'
import HeroSection from '../components/HeroSection'
import VideoPlayer from '../components/VideoPlayer'
import { useFadeIn } from '../hooks/useAnimations'

const galleryMediaItems: MediaItemType[] = [
    {
        id: 1,
        type: 'image',
        title: 'Chief Minister Pushkar Singh Dhami Visit',
        desc: 'Visit of Honourable Chief Minister, Uttarakhand, Pushkar Singh Dhami to KRC Woollens.',
        url: 'public/image 155.png',
        span: 'md:col-start-1 md:row-start-1 md:row-span-3',
    },
    {
        id: 2,
        type: 'image',
        title: 'Visit of Japanese Army Officers',
        desc: 'Visit of Japanese Army Officers to KRC Woollens.',
        url: 'public/image 159.png',
        span: 'md:col-start-2 md:row-start-1 md:row-span-2',
    },
    {
        id: 3,
        type: 'image',
        title: 'Vice Admiral Rajesh Dhankhar AVSM, NM Visit',
        desc: 'Vice Admiral Rajesh Dhankhar AVSM, NM visited KRC Woollens.',
        url: '/public/image 154.png',
        span: 'md:col-start-3 md:row-start-1 md:row-span-3',
    },
    {
        id: 4,
        type: 'image',
        title: 'Lt Gen Rajiv Ghai Visit',
        desc: 'Lt Gen Rajiv Ghai, SYSM, UYSM, AVSM, SM, Colonel of the Kumaon Regt, Naga Regt and Kumaon Scouts visited KRC Woollens.',
        url: 'public/image 158.png',
        span: 'md:col-start-1 md:row-start-4 md:row-span-3',
    },
    {
        id: 5,
        type: 'image',
        title: 'Governor of Uttarakhand Gurmit Singh Visit',
        desc: 'Visit of Lieutenant General Gurmit Singh (Retd), PVSM, UYSM, AVSM, VSM, Governor of Uttarakhand to KRC Woollens.',
        url: 'public/image 156.png',
        span: 'md:col-start-2 md:row-start-3 md:row-span-2',
    },
    {
        id: 6,
        type: 'image',
        title: 'Lt Gen Rana Pratap Kalita Visit',
        desc: 'Lt Gen Rana Pratap Kalita (Retd), PVSM, UYSM, AVSM, SM, VSM then Colonel of the Kumaon Regt, Naga Regt and Kumaon Scouts visited KRC Woollens.',
        url: '/public/image 163.png',
        span: 'md:col-start-3 md:row-start-4 md:row-span-3',
    },
    {
        id: 7,
        type: 'image',
        title: 'Lt Gen Virendra Vats Visit',
        desc: 'Visit of Lt Gen Virendra Vats, YSM, SM, VSM, Commandant, Defence Services Staff College, Wellington.',
        url: 'public/image 157.png',
        span: 'md:col-start-2 md:row-start-5 md:row-span-2',
    },
]

const reflectionMediaItems: MediaItemType[] = [
    {
        id: 101,
        type: 'image',
        title: 'Lt Gen Virendra Vats Visit',
        desc: 'Visit of Lt Gen Virendra Vats, YSM, SM, VSM, Commandant, Defence Services Staff College, Wellington.',
        url: '/image%20162.png',
        span: 'md:col-span-1 md:row-span-1',
    },
    {
        id: 102,
        type: 'image',
        title: 'Air Marshal SP Wagle Visit',
        desc: 'Air Marshal SP Wagle, VM visited KRC Woollens.',
        url: '/WhatsApp%20Image%202026-04-14%20at%204.03.42%20AM%201.png',
        span: 'md:col-span-1 md:row-span-1',
    },
    {
        id: 103,
        type: 'image',
        title: 'Former PM IK Gujral Visit',
        desc: 'Visit of former Prime Minister of India IK Gujral to KRC Woollens.',
        url: '/image%20160.png',
        span: 'md:col-span-1 md:row-span-1',
    },
    {
        id: 104,
        type: 'image',
        title: 'Mr Ajay Bhatt Visit',
        desc: 'Mr Ajay Bhatt, Minister of state for Defence and Tourism, Govt of India visited KRC Woollens.',
        url: '/image%20161.png',
        span: 'md:col-span-1 md:row-span-1',
    },
]

export default function GalleryPage() {
    const fadeRef = useFadeIn()

    return (
        <div ref={fadeRef} className="bg-ivory">
            <HeroSection
                title="Frames of Honour"
                subtitle="A timeless collection of moments that reflect the enduring legacy, honour, and spirit of KRC Woollens."
                backgroundImage="/Rectangle 303.png"
                overlay="dark"
                height="medium"
            />

            <section className="bg-ivory py-14 md:py-16">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <p className="fade-in text-lg leading-relaxed text-navy/75 sm:text-xl">
                        Explore moments of significance, where tradition, honour, and distinguished presence come together in enduring legacy.
                    </p>
                </div>
            </section>

            <section className="bg-ivory pb-24 md:pb-28">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="fade-in">
                        <InteractiveBentoGallery
                            mediaItems={galleryMediaItems}
                            alwaysVisibleCaptionIndex={null}
                        />
                    </div>
                </div>
            </section>

            <section className="bg-ivory pb-24 md:pb-28">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_1.85fr] lg:gap-14">
                        <div className="fade-in">
                            <p className="font-heading text-[32px] leading-[1.28] italic text-navy md:text-[40px]">
                                "A reflection of moments
                                <br /> where legacy is lived, honour
                                <br /> is upheld, and purpose
                                <br /> remains unwavering."
                            </p>
                        </div>
                        <div className="fade-in">
                            <InteractiveBentoGallery
                                mediaItems={reflectionMediaItems}
                                layout="quad"
                                alwaysVisibleCaptionIndex={null}
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-ivory pb-24 md:pb-28">
                <div className="mx-auto max-w-7xl px-6">
                    <div className="fade-in text-center">
                        <p className="font-heading text-[20px] leading-[1.45] text-maroon md:text-[24px]">
                            Experience the essence of KRC Woollens through a visual narrative of
                            <br /> legacy, craftsmanship, and enduring excellence.
                        </p>
                    </div>

                    <div className="fade-in mt-10 md:mt-12">
                        <VideoPlayer
                            mp4Src="/krc%20green%20copy.mp4"
                            poster="/kumaonhills.webp"
                        />
                    </div>
                </div>
            </section>
        </div>
    )
}
