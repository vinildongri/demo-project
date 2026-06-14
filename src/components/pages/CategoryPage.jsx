import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { categoryData } from '../../data/categoryData';
import Header from '../layouts/Header';
import '../../stylesCss/Gallery.css';

const CategoryPage = () => {
    // 1. Get the ID from the URL (e.g., 'wedding' or 'interior')
    const { id } = useParams();

    // 2. Find the matching data
    const category = categoryData.find(c => c.id === id);

    // 3. Lightbox State
    const [lightboxData, setLightboxData] = useState(null);

    // Scroll to top when page loads
    useEffect(() => {
        window.scrollTo(0, 0);

        if (lightboxData) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';

        return () => { document.body.style.overflow = ''; };
    }, [lightboxData, id]);

    if (!category) return <div style={{ padding: '100px', textAlign: 'center' }}>Gallery Not Found</div>;

    const openLightbox = (imgSrc, label) => {
        const highResImg = imgSrc.replace('w=800', 'w=1600');
        setLightboxData({ src: highResImg, label });
    };

    return (
        <div className="category-standalone-page">
            <Header /> {/* Reusing your premium header! */}

            <div className="cat-page-content" style={{ paddingTop: '120px' }}>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '2rem' }}>
                    <Link to="/#gallery" className="btn-back" style={{ textDecoration: 'none' }}>
                        &larr; Back to Home
                    </Link>
                    <h1 className="section-title" style={{ margin: '0 auto' }}>
                        {category.title}
                    </h1>
                </div>

                <p className="cat-page-desc">{category.desc}</p>

                <div className="gallery-grid">
                    {category.images.map((img, i) => (
                        <div
                            key={i}
                            className="g-item"
                            onClick={() => openLightbox(img, `${category.title} - Image ${i + 1}`)}
                        >
                            <img src={img} alt={`${category.title} ${i + 1}`} />
                            <div className="g-overlay"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Overlay */}
            <div className={`lightbox ${lightboxData ? 'open' : ''}`} onClick={() => setLightboxData(null)}>
                {lightboxData && (
                    <div className="lightbox-content-wrapper" onClick={(e) => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={() => setLightboxData(null)}>&times;</button>
                        <div style={{ textAlign: 'center' }}>
                            <img src={lightboxData.src} alt={lightboxData.label} className="lightbox-img" />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CategoryPage;