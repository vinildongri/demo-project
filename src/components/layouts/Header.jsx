import React, { useState, useEffect, useCallback } from 'react';
import "../../stylesCss/Header.css"

const SCROLL_THRESHOLD = 50;

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const isHomePage = window.location.pathname === '/';

    const handleScroll = useCallback(() => {
        setIsScrolled(window.scrollY > SCROLL_THRESHOLD);
    }, []);

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll, { passive: true });

        if (window.location.hash) {
            const targetId = window.location.hash.substring(1);
            const element = document.getElementById(targetId);

            if (element) {
                setTimeout(() => {
                    const headerOffset = 80;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });

                    window.history.replaceState(null, '', window.location.pathname);
                }, 100);
            }
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    const scrollToSection = (e, sectionId) => {
        if (!isHomePage) {
            return;
        }

        e.preventDefault();

        const element = document.getElementById(sectionId);
        if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            if (isMobileMenuOpen) setIsMobileMenuOpen(false);
        }
    };

    // MAGIC HAPPENS HERE: Force 'scrolled' class if NOT on Home Page
    return (
        <header id="navbar" className={(isScrolled || !isHomePage) ? 'scrolled' : ''}>
            <div className="container nav-inner">
                <a href="/" className="nav-logo" aria-label="Vikram Convention Hall Home">
                    Vikram<span>Convention Hall</span>
                </a>

                <nav aria-label="Primary Navigation">
                    <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
                        <li><a href="/gallery">Gallery</a></li>
                        <li>
                            <a href="/#about" className="footer-link group" onClick={(e) => scrollToSection(e, 'about')}>
                                About
                            </a>
                        </li>
                        <li>
                            <a href="/#gallery" className="" onClick={(e) => scrollToSection(e, 'gallery')}>
                                Explore
                            </a>
                        </li>
                        <li>
                            <a href="/#contact" className="btn btn-outline nav-cta" onClick={(e) => scrollToSection(e, 'contact')}>
                                Enquire Now
                            </a>
                        </li>
                    </ul>
                </nav>

                <button
                    className="hamburger"
                    id="hamburger"
                    type="button"
                    onClick={toggleMobileMenu}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isMobileMenuOpen}
                >
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </button>
            </div>
        </header>
    );
};

export default Header;