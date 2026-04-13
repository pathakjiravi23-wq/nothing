import { useEffect, useRef, useState } from 'react'

export default function Booking() {
    const sectionRef = useRef<HTMLElement>(null)
    const [phone, setPhone] = useState('')
    const [sent, setSent] = useState(false)

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

    const handleSubmit = () => {
        if (!phone.trim()) return
        setSent(true)
        setTimeout(() => setSent(false), 3000)
        setPhone('')
    }

    return (
        <section ref={sectionRef} className="booking-section" id="contact">
            <div className="booking-bg-text">BOOK</div>

            <div className="booking-content">
                <p className="booking-eyebrow reveal-up">Reserve Your Session</p>
                <h2 className="booking-title reveal-up delay-1">
                    Ready to feel<br /><em>extraordinary?</em>
                </h2>
                <p className="booking-sub reveal-up delay-2">
                    Drop your number and we'll call you to confirm your appointment.<br />
                    Same-day bookings welcome.
                </p>

                <div className="booking-form reveal-up delay-3">
                    <input
                        className="booking-input"
                        type="tel"
                        placeholder="Your phone number"
                        value={phone}
                        onChange={e => setPhone(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && handleSubmit()}
                    />
                    <button className="booking-btn" onClick={handleSubmit}>
                        {sent ? '✓ Sent!' : 'Request Call'}
                    </button>
                </div>

                <p className="booking-contact reveal-up delay-4">
                    Or WhatsApp us · +91 9266308242 &nbsp;·&nbsp; Open 10am – 10pm, All Days
                </p>
            </div>
        </section>
    )
}