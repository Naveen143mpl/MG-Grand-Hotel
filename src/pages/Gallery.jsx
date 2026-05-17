import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X } from 'lucide-react';
import './Gallery.css';

import img1 from '../assets/hero.png';
import img2 from '../assets/biryani.png';
import img3 from '../assets/paneer.png';
import img4 from '../assets/reservation.png';

const galleryItems = [
  { id: 1, type: 'image', src: img1, category: 'Ambience', title: 'Premium Dining Hall' },
  { id: 2, type: 'image', src: img2, category: 'Food', title: 'Authentic Chicken Biryani' },
  { id: 3, type: 'image', src: img3, category: 'Food', title: 'Paneer Butter Masala' },
  { id: 4, type: 'image', src: img4, category: 'Ambience', title: 'Private Dining Space' },
  { id: 5, type: 'image', src: img2, category: 'Food', title: 'Spicy Appetizers' },
  { id: 6, type: 'video', src: img1, category: 'Experience', title: 'A Night at MG Grand' },
];

const categories = ['All', 'Ambience', 'Food', 'Experience'];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = galleryItems.filter(
    item => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <div className="gallery-page">
      <section className="gallery-hero">
        <div className="container text-center position-relative z-1">
          <div className="d-flex justify-content-center">
            <motion.h4 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
              className="section-subtitle justify-content-center"
            >
              Visual Journey
            </motion.h4>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="gallery-title"
          >
            The MG Grand <span className="text-gold">Experience</span>
          </motion.h1>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="container">
          <div className="category-filter-container">
            <div className="category-filters">
              {categories.map((category, idx) => (
                <button
                  key={idx}
                  className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="masonry-grid text-start">
            <AnimatePresence>
              {filteredItems.map(item => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5 }}
                  className="masonry-item"
                  onClick={() => setSelectedItem(item)}
                >
                  <div className="gallery-card">
                    <img src={item.src} alt={item.title} className="gallery-img" />
                    <div className="gallery-overlay">
                      {item.type === 'video' ? <Play size={40} className="text-white mb-2" /> : null}
                      <h4 className="gallery-item-title">{item.title}</h4>
                      <span className="gallery-item-category">{item.category}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="lightbox"
            onClick={() => setSelectedItem(null)}
          >
            <button className="lightbox-close"><X size={30} /></button>
            <motion.div 
              initial={{ scale: 0.8 }} animate={{ scale: 1 }} exit={{ scale: 0.8 }}
              className="lightbox-content text-start"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedItem.type === 'video' ? (
                <div className="video-placeholder">
                  <Play size={80} className="text-gold opacity-50" />
                  <p className="mt-3 text-white">Video Showcase Placeholder</p>
                </div>
              ) : (
                <img src={selectedItem.src} alt={selectedItem.title} />
              )}
              <div className="lightbox-info">
                <h3>{selectedItem.title}</h3>
                <p>{selectedItem.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
