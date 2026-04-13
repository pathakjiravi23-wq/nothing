import { useEffect, useRef } from 'react'

const stats = [
    { num: '2000+', label: 'Happy Clients' },
    { num: '6+', label: 'Years Active' },
    { num: '12', label: 'Expert Artists' },
    { num: '4.9', label: 'Google Rating' },
]

const pills = ['Bridal Specialists', 'Unisex Studio', 'Premium Products', 'Walk-in Welcome', 'Online Booking']

export default function About() {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const section = sectionRef.current
        if (!section) return

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    section.querySelectorAll('.reveal-up').forEach((el, i) => {
                        setTimeout(() => el.classList.add('visible'), i * 140)
                    })
                    obs.unobserve(section)
                }
            },
            { threshold: 0.1 }
        )
        obs.observe(section)
        return () => obs.disconnect()
    }, [])

    return (
        <section ref={sectionRef} className="about-section" id="about">
            {/* LEFT: Visual */}
            <div className="about-visual">
                <div className="about-visual-bg" />
                <div className="about-big-num">CS</div>

                <div className="about-stats-grid">
                    {stats.map((s, i) => (
                        <div key={i} className="about-stat">
                            <div className="about-stat-num">{s.num}</div>
                            <div className="about-stat-label">{s.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT: Content */}
            <div className="about-content">
                <p className="about-tag reveal-up">Our Story</p>
                <h2 className="about-title reveal-up delay-1">
                    Beauty is not<br />
                    a standard —<br />
                    <em>it's an expression</em>
                </h2>
                <p className="about-text reveal-up delay-2">
                    Founded in Delhi, Coco Studios was born from a simple belief: every person —
                    regardless of gender — deserves to feel extraordinary. We created a space where
                    luxury and warmth coexist, where your comfort is our craft.
                </p>
                <p className="about-text reveal-up delay-3">
                    Our team of trained artists brings the latest international techniques and a deeply
                    personal touch to every appointment. From a quick trim to a full bridal transformation,
                    we pour the same passion into every seat.
                </p>

                <div className="about-pills reveal-up delay-4">
                    {pills.map(pill => (
                        <span key={pill} className="about-pill">{pill}</span>
                    ))}
                </div>
            </div>
        </section>
    )
}