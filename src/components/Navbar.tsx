import { useState, useEffect } from 'react'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const links = ['Services', 'About', 'Gallery', 'Reviews', 'Contact']

    const scrollTo = (id: string) => {
        setMenuOpen(false)
        document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>
            <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
                <a href="#" className="nav-logo">
                    COCO <span>·</span> STUDIOS
                </a>

                <ul className="nav-links">
                    {links.map(link => (
                        <li key={link}>
                            <a href={`#${link.toLowerCase()}`}
                                onClick={e => { e.preventDefault(); scrollTo(link) }}>
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>

                <button className="nav-cta"
                    onClick={() => scrollTo('contact')}>
                    Book Now
                </button>

                <button
                    className={`hamburger${menuOpen ? ' open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span /><span /><span />
                </button>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
                {links.map((link, i) => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        onClick={e => { e.preventDefault(); scrollTo(link) }}
                        style={{ transitionDelay: menuOpen ? `${i * 0.07}s` : '0s' }}
                    >
                        {link}
                    </a>
                ))}
            </div>
        </>
    )
}