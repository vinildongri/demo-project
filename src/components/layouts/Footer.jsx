import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import '../../stylesCss/Footer.css'; // Make sure the path matches!

const Footer = () => {
    // --- Framer Motion Animation Variants ---
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    // --- Professional Custom Scroll Function ---
    const scrollToSection = (e, sectionId) => {
        e.preventDefault(); // This hides the '#' from the URL

        const element = document.getElementById(sectionId);
        if (element) {
            // Calculate the exact position while accounting for your fixed header height
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    };

    return (
        <footer id="footer" className="luxury-footer">
            {/* Top Gold Gradient Divider */}
            <div className="footer-top-divider"></div>

            {/* Ambient Background Glows */}
            <div className="footer-ambient-bg">
                <div className="footer-glow top-right"></div>
                <div className="footer-glow bottom-left"></div>
            </div>

            <motion.div
                className="container footer-container"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
            >
                {/* --- Main Footer Grid --- */}
                <div className="footer-grid">

                    {/* SECTION 1: Brand Area & SECTION 5: Social Media */}
                    <motion.div variants={fadeInUp} className="footer-col brand-col">
                        <div className="brand-header">
                            <h2 className="footer-logo">Vikram</h2>
                            <span className="footer-logo-sub">Convention Hall</span>
                        </div>
                        <p className="footer-tagline">"Creating Memorable Celebrations"</p>
                        <p className="footer-desc">
                            Experience the pinnacle of luxury hosting. Vikram combines breathtaking architecture with impeccable 5-star service for your most treasured moments.
                        </p>

                        {/* Social Icons */}
                        <div className="social-icons">
                            {[
                                { icon: <FaInstagram />, href: "https://www.instagram.com/Vikramconvention?igsh=Y3FoZXlocGMwZXAx" },
                                { icon: <FaFacebookF />, href: "/" },
                                { icon: <FaYoutube />, href: "/" },
                                { icon: <FaMapMarkerAlt />, href: "https://www.google.com/maps/place/Vikram+Convention+Hall+%7C+Centralised+A%2Fc+Mangalpally/@17.2181339,78.6027668,15z/data=!4m10!1m2!2m1!1sVikram+Convention+Hall!3m6!1s0x3bcba79b11eca637:0x425c3a8c5ea08ab6!8m2!3d17.2180376!4d78.6028409!15sChZWaWtyYW0gQ29udmVudGlvbiBIYWxsWhgiFnZpa3JhbSBjb252ZW50aW9uIGhhbGySAQxiYW5xdWV0X2hhbGzgAQA!16s%2Fg%2F11ng18n735?authuser=0&entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D" }
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    target="_blank"                  /* Opens link in a new tab */
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.15, boxShadow: "0px 0px 15px rgba(212, 175, 55, 0.4)" }}
                                    className="social-icon"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* SECTION 2: Quick Links */}
                    <motion.div variants={fadeInUp} className="footer-col">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="footer-links">
                            <li>
                                <a href="/" className="footer-link group" >
                                    <span className="link-line"></span>
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#about" className="footer-link group" onClick={(e) => scrollToSection(e, 'about')} >
                                    <span className="link-line"></span>
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="/gallery/dining" className="footer-link group">
                                    <span className="link-line"></span>
                                    Dining
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="footer-link group" onClick={(e) => scrollToSection(e, 'contact')}>
                                    <span className="link-line"></span>
                                    Book Now
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* SECTION 3: Event Categories */}
                    <motion.div variants={fadeInUp} className="footer-col">
                        <h4 className="footer-heading">Celebrations</h4>
                        <ul className="footer-links">
                            <li>
                                <a href="/gallery/wedding" className="footer-link group" >
                                    <span className="link-line"></span>
                                    Weddings
                                </a>
                            </li>
                            <li>
                                <a href="/gallery/party" className="footer-link group" >
                                    <span className="link-line"></span>
                                    Corporate Events
                                </a>
                            </li>
                            <li>
                                <a href="/gallery/guest-rooms" className="footer-link group" >
                                    <span className="link-line"></span>
                                    Guest Rooms
                                </a>
                            </li>
                            <li>
                                <a href="/gallery/exterior" className="footer-link group" >
                                    <span className="link-line"></span>
                                    Exterior
                                </a>
                            </li>
                            <li>
                                <a href="/gallery/parking" className="footer-link group" >
                                    <span className="link-line"></span>
                                    Parking & Amenities Exterior
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                    {/* SECTION 4 & 6: Contact & Newsletter */}
                    <motion.div variants={fadeInUp} className="footer-col">

                        {/* Luxury Glassmorphism Newsletter Input */}

                        <h4 className="footer-heading">Contact Us</h4>
                        <ul className="footer-contact-list">
                            <li className="footer-contact-link">
                                <a
                                    href="https://www.google.com/maps/place/Vikram+Convention+Hall+%7C+Centralised+A%2Fc+Mangalpally/@17.2181339,78.6027668,15z/data=!4m10!1m2!2m1!1sVikram+Convention+Hall!3m6!1s0x3bcba79b11eca637:0x425c3a8c5ea08ab6!8m2!3d17.2180376!4d78.6028409!15sChZWaWtyYW0gQ29udmVudGlvbiBIYWxsWhgiFnZpa3JhbSBjb252ZW50aW9uIGhhbGySAQxiYW5xdWV0X2hhbGzgAQA!16s%2Fg%2F11ng18n735?authuser=0&entry=ttu&g_ep=EgoyMDI2MDYyMS4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaMapMarkerAlt className="contact-icon" />
                                    <span>Koheda X Road, Mangalpalle, Bongloor<br />Telangana 501510</span>
                                </a>
                            </li>
                            <li>
                                <FaPhoneAlt className="contact-icon" />
                                <span>+91 7901091234</span>
                            </li>
                            <li className='footer-contact-link'>
                                <a href="https://wa.me/9393882113" target="_blank" rel="noreferrer">
                                    <FaWhatsapp className="contact-icon whatsapp-icon" />
                                    <span>+91 7901091234</span>
                                </a>
                            </li>
                            <li className='footer-contact-link'>
                                <a href="mailto:Vikram@gmail.com">
                                    <FaEnvelope className="contact-icon" />
                                    <span>Vikram@gmail.com</span>
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                </div>

                {/* BOTTOM BAR */}
                <motion.div variants={fadeInUp} className="footer-bottom">
                    <p>© 2026 Vikram Convention Hall. All Rights Reserved.</p>

                    <p className="designer-credit">
                        Designed by <span>Vinil</span>
                    </p>
                </motion.div>

            </motion.div>
        </footer>
    );
};

export default Footer;