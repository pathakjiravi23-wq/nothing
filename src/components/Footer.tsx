const footerLinks = {
    Services: ['Bridal Makeup', 'Hair Styling', 'Skin Facials', 'Nail Art', 'Mehndi', "Men's Grooming"],
    Studio: ['About Us', 'Our Team', 'Gallery', 'Reviews', 'Blog'],
    Visit: ['1/2318,Main Mandali Road Ram Nagar,Shahdara', 'Delhi-11032', '+91 9266308242', 'hello@cocostudios.in', 'Mon–Sun: 10am–10pm'],
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
                        A sanctuary of beauty and grooming in the heart of Delhi.
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
                <div className="footer-copy">© 2024 Coco Studios Unisex. All rights reserved.</div>
                <div className="footer-social">
                    <a href="https://www.instagram.com/cocounisexstudio?igsh=MW11dHF0N3c2aWQ4dw==">Instagram</a>
                    <a href="https://www.facebook.com/people/COCO-Studio/61566714206704/#">Facebook</a>
                    <a href="https://wa.me/9266308242" target="_blank">
                        WhatsApp
                    </a>
                    <a href="https://maps.app.goo.gl/E6ZxeNAwsAMDsYvX7" target="_blank">
                        Google Maps
                    </a>
                </div>
            </div>
        </footer>
    )
}