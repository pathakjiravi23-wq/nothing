import { useEffect, useRef } from 'react'

const services = [
    {
        num: '01',
        icon: '💄',
        name: 'Bridal Makeup',
        desc: 'Bespoke bridal transformations — HD, airbrush, and traditional techniques tailored to your vision.',
        price: 'Starting ₹3,500',
    },
    {
        num: '02',
        icon: '✂️',
        name: 'Hair Styling',
        desc: 'Cuts, blow-outs, updos, balayage, and keratin — crafted for your texture and personality.',
        price: 'Starting ₹500',
    },
    {
        num: '03',
        icon: '🌸',
        name: 'Skin & Facials',
        desc: 'Bespoke facials using premium product lines for visible, lasting radiance and skin health.',
        price: 'Starting ₹1,200',
    },
    {
        num: '04',
        icon: '💅',
        name: 'Nail Artistry',
        desc: 'Gel, acrylic, nail art, and spa manicures — precision detailing for hands that impress.',
        price: 'Starting ₹400',
    },
    {
        num: '05',
        icon: '🪷',
        name: 'Mehndi & Henna',
        desc: 'Traditional and contemporary designs by master mehndi artists for every occasion.',
        price: 'Starting ₹800',
    },
    {
        num: '06',
        icon: '✦',
        name: "Men's Grooming",
        desc: 'Haircuts, beard sculpting, clean shaves, and grooming packages tailored for gentlemen.',
        price: 'Starting ₹300',
    },
]

export default function Services() {
    const cardsRef = useRef<HTMLDivElement[]>([])

    useEffect(() => {
        const observers: IntersectionObserver[] = []

        cardsRef.current.forEach((card, i) => {
            if (!card) return
            const obs = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => card.classList.add('visible'), i * 100)
                        obs.unobserve(card)
                    }
                },
                { threshold: 0.1 }
            )
            obs.observe(card)
            observers.push(obs)
        })

        return () => observers.forEach(o => o.disconnect())
    }, [])

    return (
        <section className="section services-section" id="services">
            <div className="reveal-up" style={{ marginBottom: '0' }}>
                <p className="section-tag">Our Expertise</p>
                <h2 className="section-title">
                    Curated <em>beauty rituals</em><br />for every soul
                </h2>
            </div>

            <div className="services-grid" style={{ marginTop: '3.5rem' }}>
                {services.map((svc, i) => (
                    <div
                        key={i}
                        ref={el => { if (el) cardsRef.current[i] = el }}
                        className="service-card reveal-up"
                    >
                        <div className="service-num">{svc.num}</div>
                        <span className="service-icon">{svc.icon}</span>
                        <h3 className="service-name">{svc.name}</h3>
                        <p className="service-desc">{svc.desc}</p>
                        <div className="service-price">{svc.price}</div>
                    </div>
                ))}
            </div>
        </section>
    )
}