import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp, FaEnvelope, FaCheckCircle } from 'react-icons/fa';
import '../../stylesCss/Contact.css'; // Linking your pure CSS file!

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const message = `
            🎉 New Enquiry
            👤 Name: ${formData.name}
            📞 Phone: ${formData.phone}
            📧 Email: ${formData.email}

            📝 Requirements:
            ${formData.requirements}
        `;

        const whatsappNumber = "9393882113";

        window.open(
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
            "_blank"
        );

        setIsSubmitted(true);

        setTimeout(() => {
            setIsSubmitted(false);
        }, 3000);
    };

    // --- Animation Variants ---
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
    };

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
    };

    const trustIndicators = [
        "Spacious Pillar-less Convention Hall",
        "Ample Parking Facility for 400+ Vehicles",
        "Premium Dedicated Dining Area",
        "Prime & Accessible Location"
    ];

    const [errors, setErrors] = useState({});

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        requirements: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        const phoneRegex = /^[6-9]\d{9}$/;

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        } else if (!phoneRegex.test(formData.phone)) {
            newErrors.phone = "Enter a valid 10-digit Indian mobile number";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Enter a valid email address";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    return (
        <section id="contact" className="luxury-contact">
            {/* Ambient Background Effects */}
            <div className="ambient-bg">
                <div className="glow-circle top-right"></div>
                <div className="glow-circle bottom-left"></div>
                <div className="corner-ornament top-left"></div>
                <div className="corner-ornament bottom-right"></div>
            </div>

            <div className="container contact-container">

                {/* --- LEFT COLUMN: Details & Trust --- */}
                <motion.div
                    className="contact-content"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    <motion.span variants={fadeInUp} className="luxury-eyebrow">
                        Get In Touch
                    </motion.span>

                    <motion.h2 variants={fadeInUp} className="luxury-title">
                        Begin Your <br />
                        <em>Celebration Journey</em>
                    </motion.h2>

                    <motion.div variants={fadeInUp} className="gold-divider"></motion.div>

                    <motion.p variants={fadeInUp} className="luxury-desc">
                        Our event artisans are dedicated to transforming your vision into an immaculate reality. Connect with us to curate your flawless celebration.
                    </motion.p>

                    {/* Trust Indicators */}
                    <motion.div variants={fadeInUp} className="trust-list">
                        {trustIndicators.map((text, idx) => (
                            <div key={idx} className="trust-item">
                                <FaCheckCircle className="trust-icon" />
                                <span>{text}</span>
                            </div>
                        ))}
                    </motion.div>

                    {/* Contact Details */}
                    <motion.div variants={fadeInUp} className="contact-details-grid">

                        {/* Location Link */}
                        <div className="detail-item footer-contact-link ">
                            <a href="https://www.google.com/maps/place/Vikram+CONVENTION+hall/@17.2175119,78.6117838,13.55z/data=!4m6!3m5!1s0x3bcba7a0e3741ab1:0xbd50a8d117cc788b!8m2!3d17.2396003!4d78.6122902!16s%2Fg%2F11mdv54vnq?authuser=0&entry=ttu&g_ep=EgoyMDI2MDYxMC4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank" rel="noopener noreferrer">
                                <FaMapMarkerAlt className="detail-icon" />
                                <div className=' footer-contact-link'>
                                    <h4>Location</h4>
                                    <p>Koheda X Road, Mangalpalle, Bongloor<br />Telangana 501510</p>
                                </div>
                            </a>
                        </div>

                        {/* Phone Link (tel:) */}
                        <div className="detail-item footer-contact-link">
                            <a href="tel:+917901091234">
                                <FaPhoneAlt className="detail-icon" />
                                <div>
                                    <h4>Direct Line</h4>
                                    <p>+91  7901091234</p>
                                </div>
                            </a>
                        </div>

                        {/* Email Link (mailto:) */}
                        <div className="detail-item footer-contact-link">
                            <a href="mailto:Vikram@gmail.com">
                                <FaEnvelope className="detail-icon" />
                                <div>
                                    <h4>Email</h4>
                                    <p>Vikram@gmail.com</p>
                                </div>
                            </a>
                        </div>

                    </motion.div>
                </motion.div>

                {/* --- RIGHT COLUMN: Glassmorphism Form --- */}
                <motion.div
                    className="contact-form-wrapper"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="glass-card">
                        <AnimatePresence mode="wait">
                            {isSubmitted ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="success-state"
                                >
                                    <div className="success-icon-wrap">
                                        <FaCheckCircle />
                                    </div>
                                    <h3>Request Received</h3>
                                    <p>Thank you for considering Vikram. Our event director will be in touch with you shortly.</p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onSubmit={handleSubmit}
                                    className="luxury-form"
                                >
                                    <div className="card-header">
                                        <h3 className="form-title">Request a Consultation</h3>
                                        <p className="form-subtitle">Fill out the form below and our team will contact you shortly.</p>
                                    </div>

                                    {/* Row 1: Name and Phone */}
                                    <div className="form-row">
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            placeholder="Full Name"
                                            className="glass-input"
                                            value={formData.name}
                                            onChange={handleChange}
                                        />

                                        <input
                                            type="tel"
                                            name="phone"
                                            placeholder="Phone Number"
                                            className="glass-input"
                                            value={formData.phone}
                                            onChange={handleChange}
                                        />

                                        {errors.phone && (
                                            <span className="error-text">{errors.phone}</span>
                                        )}
                                    </div>

                                    {/* Row 2: Email */}
                                    <div className="form-row">
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email Address"
                                            className="glass-input"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />

                                        {errors.email && (
                                            <span className="error-text">{errors.email}</span>
                                        )}
                                    </div>

                                    {/* Row 3: Special Requirements */}
                                    <div className="form-row">
                                        {/* <textarea rows="3" placeholder="Special Requirements or Vision Details..." className="glass-input"></textarea> */}
                                        <textarea
                                            rows="3"
                                            name="requirements"
                                            placeholder="Special Requirements or Vision Details..."
                                            className="glass-input"
                                            value={formData.requirements}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <button type="submit" className="gold-gradient-btn">
                                        <span>Submit Enquiry</span>
                                        <div className="btn-glare"></div>
                                    </button>

                                    {/* Trust Badges Below Form */}
                                    <div className="form-trust-badges">
                                        <span><FaCheckCircle className="trust-icon-sm" /> Personalized Consultation</span>
                                        <span><FaCheckCircle className="trust-icon-sm" /> Flexible Event Planning</span>
                                        <span><FaCheckCircle className="trust-icon-sm" /> Quick Response</span>
                                    </div>

                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>

            {/* --- Floating WhatsApp Button --- */}
            <a href="https://wa.me/7901091234" target="_blank" rel="noreferrer" className="floating-whatsapp">
                <FaWhatsapp className="wa-icon" />
                <span className="wa-text">BOOK NOW</span>
            </a>
        </section>
    );
};

export default Contact;