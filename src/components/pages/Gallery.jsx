import React from 'react';
import { Link } from 'react-router-dom';
import { categoryData } from '../../data/categoryData';
import '../../stylesCss/Gallery.css';

const Gallery = () => {
    return (
        <section id="gallery">
            <div className="container">
                <div className="section-header fade-up">
                    <span className="section-eyebrow">Visual Tour</span>
                    <h2 className="section-title">Explore by <em>Space</em></h2>
                    <div className="divider"></div>
                </div>

                <div className="category-grid" id="mainCategoryGrid">
                    {categoryData.map((cat, index) => {
                        const delay = `${index * 0.1}s`;
                        return (
                            // Link replaces onClick. It navigates to /gallery/wedding, etc.
                            <Link
                                to={`/gallery/${cat.id}`}
                                key={cat.id}
                                className="category-card fade-up"
                                style={{ transitionDelay: delay }}
                            >
                                <img src={cat.cover} alt={cat.title} />
                                <div className="category-overlay">
                                    <h3 className="category-title">{cat.title}</h3>
                                    <span className="category-subtitle">View Gallery &rarr;</span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Gallery;