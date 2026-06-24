import React from 'react';
import "../../stylesCss/About.css";

const About = () => {
    return (
        <section id="about">
            <div className="container about-grid">
                <div className="about-img-wrap fade-up">
                    {/* React automatically looks inside the public folder for absolute paths */}
                    <img src="/vikramPics/image.png" alt="VARA Convention Exterior" className="about-img" />

                    <div className="about-badge">
                        <span className="about-badge-num">15+</span>
                        <span className="about-badge-text">Years of<br />Excellence</span>
                    </div>
                </div>

                <div className="about-content fade-up">
                    <span className="section-eyebrow">Our Legacy</span>
                    <h2>A Canvas for Your <em>Most Treasured</em> Moments</h2>

                    <p>Established with a vision to redefine luxury hosting in Hyderabad, VARA Convention Hall combines
                        breathtaking architecture with impeccable service. We believe that a venue is more than just a space—it is the
                        foundation upon which lifelong memories are built.</p>
                    <p>From intimate gatherings to grand celebrations hosting up to 2,000 guests, our meticulously designed
                        halls, lush surroundings, and dedicated event artisans ensure your occasion is executed flawlessly.</p>

                    <div className="feature-list">
                        <div className="feature-item">
                            <div className="feature-title">5-Star Ambiance</div>
                            <p className="feature-desc">Hotel-grade interiors with bespoke customizable decor and lighting.</p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-title">Master Craftsmanship</div>
                            <p className="feature-desc">Dedicated planners ensuring perfection in every single detail.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;