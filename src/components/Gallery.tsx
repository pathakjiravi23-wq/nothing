import { useEffect, useRef } from 'react'

const items = [
    { cls: 'g1', label: 'Bridal Collection', tag: '01 / Bridal' },
    { cls: 'g2', label: 'Skin Rituals', tag: '02 / Skin' },
    { cls: 'g3', label: 'Nail Artistry', tag: '03 / Nails' },
    { cls: 'g4', label: 'Hair Styling', tag: '04 / Hair' },
    { cls: 'g5', label: 'Mehndi Magic', tag: '05 / Mehndi' },
]

export default function Gallery() {
    const sectionRef = useRef<HTMLElement>(null)

    useEffect(() => {
        const section = sectionRef.current
        if (!section) return

        const obs = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    section.querySelectorAll('.reveal-up').forEach((el, i) => {
                        setTimeout(() => el.classList.add('visible'), i * 100)
                    })
                    obs.unobserve(section)
                }
            },
            { threshold: 0.08 }
        )
        obs.observe(section)
        return () => obs.disconnect()
    }, [])

    return (
        <section ref={sectionRef} className="gallery-section" id="gallery">
            <div className="gallery-header">
                <p className="section-tag reveal-up" style={{ color: 'var(--gold)' }}>Portfolio</p>
                <h2 className="section-title reveal-up delay-1" style={{ color: 'var(--cream)' }}>
                    Our work <em>speaks</em><br />for itself
                </h2>
            </div>

            <div className="gallery-grid">
                {items.map((item, i) => (
                    <div key={i} className="gallery-item">
                        <div className={`gallery-placeholder ${item.cls}`}>
                            {/* Replace with <img> when you have real photos */}
                        </div>
                        <div className="gallery-overlay" />
                        <div className="gallery-label">
                            <span className="gallery-label-num">{item.tag}</span>
                            {item.label}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}