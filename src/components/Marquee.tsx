const items = [
    { text: 'Hair Styling', highlight: false },
    { text: 'Bridal Makeup', highlight: true },
    { text: 'Skin Treatments', highlight: false },
    { text: 'Nail Artistry', highlight: false },
    { text: 'Facials & Glow', highlight: true },
    { text: 'Keratin Therapy', highlight: false },
    { text: 'Mehndi & Henna', highlight: false },
    { text: 'Hair Colouring', highlight: true },
    { text: 'Threading & Wax', highlight: false },
    { text: 'Men\'s Grooming', highlight: false },
]

const allItems = [...items, ...items]

export default function Marquee() {
    return (
        <section className="marquee-section">
            <div className="marquee-track">
                {allItems.map((item, i) => (
                    <span key={i} className={`marquee-item${item.highlight ? ' highlight' : ''}`}>
                        {item.text}
                        <span className="marquee-dot" />
                    </span>
                ))}
            </div>
        </section>
    )
}