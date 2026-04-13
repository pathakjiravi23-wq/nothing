const footerLinks = {
    Services: ['Bridal Makeup', 'Hair Styling', 'Skin Facials', 'Nail Art', 'Mehndi', "Men's Grooming"],
    Studio: ['About Us', 'Our Team', 'Gallery', 'Reviews', 'Blog'],
    Visit: ['Sevoke Road, Siliguri', 'West Bengal 734001', '+91 98765 43210', 'hello@cocostudios.in', 'Mon–Sun: 9am–8pm'],
}

export default function Footer() {
    return (
        <footer>
            <div className="footer-grid">
                {/* Brand */}
                <div>
                    <div className="footer-brand-logo">
                        COCO <span>·</span> STUDIOS
                    </div>
                    <div className="footer-brand-sub">Unisex Beauty Studio</div>
                    <p className="footer-brand-desc">
                        A sanctuary of beauty and grooming in the heart of Siliguri.
                        Where every visit is a ritual and every client leaves transformed.
                    </p>
                </div>

                {/* Link columns */}
                {Object.entries(footerLinks).map(([title, links]) => (
                    <div key={title}>
                        <div className="footer-col-title">{title}</div>
                        <ul className="footer-links">
                            {links.map(link => (
                                <li key={link}>
                                    <a href="#">{link}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="footer-bottom">
                <div className="footer-copy">© 2025 Coco Studios Unisex. All rights reserved.</div>
                <div className="footer-social">
                    <a href="#">Instagram</a>
                    <a href="#">Facebook</a>
                    <a href="#">WhatsApp</a>
                </div>
            </div>
        </footer>
    )
}