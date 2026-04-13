import { useEffect, useRef } from 'react'

const reviews = [
    {
        text: 'My bridal look was beyond imagination. The team understood exactly what I wanted and elevated it. I felt like royalty on my wedding day.',
        name: 'Priya Sharma',
        role: 'Bride, December 2024',
    },
    {
        text: 'I have never left a salon feeling this confident. The facial treatment completely transformed my skin in just one session. Truly luxurious.',
        name: 'Ananya Bose',
        role: 'Regular Client',
    },
    {
        text: 'Finally a unisex studio that actually gets men\'s grooming right. The haircut and beard sculpt was chef\'s kiss. Will always come back.',
        name: 'Rohan Das',
        role: 'Monthly Client',
    },
]

function Stars() {
    return (
        <div className="testi-stars">
            {Array(5).fill(null).map((_, i) => (
                <div key={i} className="star" />
            ))}
        </div>
    )
}

export default function Testimonials() {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const section = sectionRef.current
        if (!section) return

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    section.querySelectorAll('.reveal-up').forEach((el, i) => {
                        setTimeout(() => el.classList.add('visible'), i * 120)
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
        <section ref={sectionRef} className="testimonials-section" id="reviews">
            <div className="reveal-up">
                <p className="section-tag">Kind Words</p>
                <h2 className="section-title">What our clients <em>say</em></h2>
            </div>

            <div className="testimonials-grid">
                {reviews.map((rev, i) => (
                    <div key={i} className={`testi-card reveal-up delay-${i + 1}`}>
                        <span className="testi-quote-mark">"</span>
                        <Stars />
                        <p className="testi-text">{rev.text}</p>
                        <div className="testi-divider" />
                        <div className="testi-name">{rev.name}</div>
                        <div className="testi-role">{rev.role}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}