import { useEffect, useRef } from 'react'

export default function Hero() {
    const eyebrowRef = useRef<HTMLDivElement>(null)
    const line1Ref = useRef<HTMLSpanElement>(null)
    const line2Ref = useRef<HTMLSpanElement>(null)
    const line3Ref = useRef<HTMLSpanElement>(null)
    const taglineRef = useRef<HTMLParagraphElement>(null)
    const actionsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const delays: [React.RefObject<HTMLElement | null>, number][] = [
            [eyebrowRef, 100],
            [line1Ref, 200],
            [line2Ref, 350],
            [line3Ref, 500],
            [taglineRef, 650],
            [actionsRef, 800],
        ]

        delays.forEach(([ref, delay]) => {
            setTimeout(() => {
                if (ref.current) {
                    if (ref.current.classList.contains('line')) {
                        ref.current.classList.add('visible')
                    } else {
                        ref.current.classList.add('visible')
                    }
                }
            }, delay)
        })
    }, [])

    const scrollToServices = () => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="hero" id="home">
            {/* LEFT */}
            <div className="hero-left">
                <div ref={eyebrowRef as React.RefObject<HTMLDivElement>} className="hero-eyebrow">
                    Est. 2024 &nbsp;·&nbsp; Delhi
                </div>

                <h1 className="hero-h1">
                    <span className="line">
                        <span ref={line1Ref as React.RefObject<HTMLSpanElement>} className="visible" style={{ transitionDelay: '0.05s' }}>
                            Where
                        </span>
                    </span>
                    <span className="line">
                        <span ref={line2Ref as React.RefObject<HTMLSpanElement>} className="visible" style={{ transitionDelay: '0.18s' }}>
                            Beauty <em>meets</em>
                        </span>
                    </span>
                    <span className="line">
                        <span ref={line3Ref as React.RefObject<HTMLSpanElement>} className="visible" style={{ transitionDelay: '0.32s' }}>
                            Artistry
                        </span>
                    </span>
                </h1>

                <p ref={taglineRef as React.RefObject<HTMLParagraphElement>} className="hero-tagline visible">
                    Coco Studios — Delhi's premier unisex beauty destination.
                    Expert stylists, luxury treatments, and an experience crafted for every soul.
                </p>

                <div ref={actionsRef as React.RefObject<HTMLDivElement>} className="hero-actions visible">
                    <button className="btn-primary" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                        <span>Book Appointment</span>
                    </button>
                    <button className="btn-outline" onClick={scrollToServices}>
                        Explore Services &nbsp;→
                    </button>
                </div>
            </div>

            {/* RIGHT */}
            <div className="hero-right">
                <div className="hero-visual-bg" />
                <div className="hero-orb hero-orb-1" />
                <div className="hero-orb hero-orb-2" />

                <div className="hero-big-text">CS</div>

                <div className="hero-badge">
                    <div className="hero-badge-inner">
                        <div className="hero-badge-num">4.9</div>
                        <div className="hero-badge-text">Google Rating</div>
                    </div>
                </div>
            </div>

            {/* Scroll Hint */}
            <div className="hero-scroll-hint">
                <div className="hero-scroll-line" />
                Scroll to explore
            </div>
        </section>
    )
}