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
                            <h2 className="footer-logo">VARA</h2>
                            <span className="footer-logo-sub">Convention Hall</span>
                        </div>
                        <p className="footer-tagline">"Creating Memorable Celebrations"</p>
                        <p className="footer-desc">
                            Experience the pinnacle of luxury hosting. VARA combines breathtaking architecture with impeccable 5-star service for your most treasured moments.
                        </p>

                        {/* Social Icons */}
                        <div className="social-icons">
                            {[
                                { icon: <FaInstagram />, href: "https://www.instagram.com/varaconvention?igsh=Y3FoZXlocGMwZXAx" },
                                { icon: <FaFacebookF />, href: "/" },
                                { icon: <FaYoutube />, href: "/" },
                                { icon: <FaMapMarkerAlt />, href: "https://www.google.com/maps/place/VARA+CONVENTION+hall/@17.2175119,78.6117838,13.55z/data=!4m6!3m5!1s0x3bcba7a0e3741ab1:0xbd50a8d117cc788b!8m2!3d17.2396003!4d78.6122902!16s%2Fg%2F11mdv54vnq?authuser=0&entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D" }
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
                                    href="https://www.google.com/maps/place/VARA+CONVENTION+hall/@17.2175119,78.6117838,13.55z/data=!4m6!3m5!1s0x3bcba7a0e3741ab1:0xbd50a8d117cc788b!8m2!3d17.2396003!4d78.6122902!16s%2Fg%2F11mdv54vnq?authuser=0&entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaMapMarkerAlt className="contact-icon" />
                                    <span>Koheda Rd, Ramdas Pally<br />Telangana 501510</span>
                                </a>
                            </li>
                            <li>
                                <FaPhoneAlt className="contact-icon" />
                                <span>+91 7386638777</span>
                            </li>
                            <li className='footer-contact-link'>
                                <a href="https://wa.me/9393882113" target="_blank" rel="noreferrer">
                                    <FaWhatsapp className="contact-icon whatsapp-icon" />
                                    <span>+91 93938 82113</span>
                                </a>
                            </li>
                            <li className='footer-contact-link'>
                                <a href="mailto:vara@gmail.com">
                                    <FaEnvelope className="contact-icon" />
                                    <span>vara@gmail.com</span>
                                </a>
                            </li>
                        </ul>
                    </motion.div>

                </div>

                {/* BOTTOM BAR */}
                <motion.div variants={fadeInUp} className="footer-bottom">
                    <p>© 2026 VARA Convention Hall. All Rights Reserved.</p>

                    <p className="designer-credit">
                        Designed by <span>Vinil</span>
                    </p>
                </motion.div>

            </motion.div>
        </footer>
    );
};

export default Footer;