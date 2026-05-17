import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Leaf, Flame, Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './Menu.css';
import biryaniImg from '../assets/biryani.png';
import paneerImg from '../assets/paneer.png';

const categories = ['All', 'Starters', 'Veg Specials', 'Biryani Collection', 'Tandoori'];

const menuItems = [
  {
    id: 1,
    name: 'Chicken Biryani',
    desc: 'Authentic dum biryani cooked with aromatic spices. Rich steam effect.',
    price: '₹280',
    category: 'Biryani Collection',
    image: biryaniImg,
    isVeg: false,
    isSpicy: true,
    bestseller: true,
    steam: true,
  },
  {
    id: 2,
    name: 'MLA Biryani',
    desc: 'A spicy and flavorful specialty with minced meat. Premium royal presentation.',
    price: '₹320',
    category: 'Biryani Collection',
    image: biryaniImg,
    isVeg: false,
    isSpicy: true,
    chefSpecial: true,
    steam: true,
  },
  {
    id: 3,
    name: 'Paneer Majestic',
    desc: 'Crispy paneer tossed in a rich yogurt sauce. Elegant veg premium styling.',
    price: '₹250',
    category: 'Veg Specials',
    image: paneerImg,
    isVeg: true,
    isSpicy: false,
    chefSpecial: true,
  },
  {
    id: 4,
    name: 'Pepper Chicken',
    desc: 'Succulent chicken cooked with crushed black pepper. Smoky cinematic effect.',
    price: '₹290',
    category: 'Starters',
    image: biryaniImg, 
    isVeg: false,
    isSpicy: true,
    steam: true,
  },
  {
    id: 5,
    name: 'Paneer Butter Masala',
    desc: 'Soft paneer cubes cooked in a rich, creamy, and mildly sweet tomato gravy.',
    price: '₹260',
    category: 'Veg Specials',
    image: paneerImg,
    isVeg: true,
    isSpicy: false,
  },
  {
    id: 6,
    name: 'Tandoori Chicken',
    desc: 'Classic bone-in chicken marinated in yogurt and spices, roasted in a clay oven.',
    price: '₹350',
    category: 'Tandoori',
    image: biryaniImg,
    isVeg: false,
    isSpicy: false,
    bestseller: true,
    steam: true,
  }
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = menuItems.filter(
    item => activeCategory === 'All' || item.category === activeCategory
  );

  return (
    <div className="menu-page">
      {/* Menu Hero */}
      <section className="menu-hero">
        <div className="menu-hero-overlay"></div>
        <div className="container text-center position-relative z-1">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="menu-title"
          >
            Culinary <span className="text-gold">Masterpieces</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="menu-subtitle"
          >
            A symphony of authentic flavors crafted for a premium dining experience.
          </motion.p>
        </div>
      </section>

      <section className="menu-content section-padding">
        <div className="container">
          
          {/* Spotlight Section */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="spotlight-section mb-5 pb-4"
          >
            <div className="d-flex justify-content-center">
              <h4 className="section-subtitle justify-content-center text-center mb-2">Featured</h4>
            </div>
            <h2 className="text-center mb-5 text-gold" style={{ fontSize: '2.5rem', fontFamily: 'var(--font-heading)' }}>Chef's Signatures</h2>
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2,
                slideShadows: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination, Autoplay]}
              className="spotlight-swiper"
            >
              {menuItems.filter(item => item.bestseller || item.chefSpecial).map((item) => (
                <SwiperSlide key={`spotlight-${item.id}`} className="spotlight-slide">
                  <div className="spotlight-card">
                    <img src={item.image} alt={item.name} />
                    <div className="spotlight-overlay">
                      <h3>{item.name}</h3>
                      <p>{item.price}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="category-filter-container"
          >
            <div className="category-filters glassmorphism">
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
          </motion.div>

          {/* Veg Specials Banner */}
          <AnimatePresence>
            {(activeCategory === 'All' || activeCategory === 'Veg Specials') && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="veg-specials-banner mb-5 glassmorphism-green"
              >
                <div className="veg-banner-content">
                  <h2><Leaf className="text-gold me-2" /> Premium Vegetarian Showcase</h2>
                  <p>Discover our rich, hand-crafted vegetarian delicacies fit for royalty.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Menu Items Grid */}
          <motion.div layout className="row g-4 g-lg-5 text-start">
            <AnimatePresence>
              {filteredItems.map(item => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="col-md-6 col-lg-4"
                >
                  <div className="menu-card glassmorphism-card">
                    <div className="menu-card-img-wrapper">
                      <img src={item.image} alt={item.name} className="menu-card-img" />
                      {item.steam && <div className="steam-effect"></div>}
                      <div className="menu-card-badges">
                        {item.isVeg ? (
                          <span className="badge veg-badge"><Leaf size={14} className="me-1" /> Veg</span>
                        ) : (
                          <span className="badge non-veg-badge">Non-Veg</span>
                        )}
                        {item.isSpicy && <span className="badge spicy-badge"><Flame size={14} className="me-1" /> Spicy</span>}
                        {item.bestseller && <span className="badge bestseller-badge"><Star size={14} className="me-1" /> Bestseller</span>}
                      </div>
                    </div>
                    <div className="menu-card-content">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h3 className="menu-item-title">{item.name}</h3>
                        <span className="menu-item-price">{item.price}</span>
                      </div>
                      <p className="menu-item-desc">{item.desc}</p>
                      
                      <div className="menu-card-footer mt-auto pt-3">
                        {item.chefSpecial && <span className="chef-special-text text-gold">★ Chef's Special</span>}
                        <button className="btn-add-cart ms-auto luxury-glow">
                          <ShoppingCart size={18} /> Add to Order
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default Menu;
