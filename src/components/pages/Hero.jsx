import React from 'react';
import "../../stylesCss/Hero.css";

const Hero = () => {

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
        <section id="hero">
            <div className="hero-bg"></div>
            <div className="hero-overlay"></div>

            <div className="hero-content fade-up visible">
                {/* <span className="section-eyebrow" style={{ color: 'var(--gold-light)' }}>
                    Since 2008
                </span> */}
                <h1 className="hero-title">
                    Where Grandeur Meets <em>Elegance</em>
                </h1>
                <p className="hero-subtitle">
                    Hyderabad's premier luxury destination for weddings, corporate galas, and
                    extraordinary milestone celebrations.
                </p>
                <div className="hero-btns">
                    {/* Swapped / for # and added the custom onClick handler */}
                    <a
                        href="#contact"
                        className="btn btn-primary"
                        onClick={(e) => scrollToSection(e, 'contact')}
                    >
                        Plan Your Event
                    </a>
                    <a
                        href="#gallery"
                        className="btn btn-outline"
                        onClick={(e) => scrollToSection(e, 'gallery')}
                    >
                        Explore Venue
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;