import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Star, Clock, MapPin, Phone, Play } from 'lucide-react';
import './Home.css';
import heroImage from '../assets/hero.png';
import biryaniImage from '../assets/biryani.png';
import paneerImage from '../assets/paneer.png';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section" style={{ backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.9)), url(${heroImage})` }}>
        <div className="container hero-content">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            transition={{ duration: 0.5 }}
            className="hero-badge"
          >
            Experience The Authentic Taste
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-title font-heading"
          >
            The MG Grand <br/>
            <span className="text-gold">Premium Multicuisine</span> Restaurant
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-subtitle"
          >
            Indulge in a culinary journey with our exquisite dishes, premium ambience, and exceptional service in Madanapalle.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-actions"
          >
            <Link to="/menu" className="btn-gold luxury-glow">Explore Menu</Link>
            <Link to="/reservations" className="btn-outline-gold">Book a Table</Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.8 }}
            className="hero-stats glassmorphism"
          >
            <div className="stat-item">
              <span className="stat-number">4.5<Star size={16} fill="#D4AF37" color="#D4AF37" className="mb-1" /></span>
              <span className="stat-text">4,000+ Reviews</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-text">Premium Dishes</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-text">Authentic Taste</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Highlights */}
      <section className="section-padding about-highlights">
        <div className="container">
          <div className="row align-items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-lg-6 mb-5 mb-lg-0"
            >
              <div className="image-wrapper">
                <img src={biryaniImage} alt="Premium Biryani" className="img-fluid rounded-lg" style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.8)' }} />
                <div className="experience-badge glassmorphism" style={{ border: '1px solid var(--color-gold)' }}>
                  <span className="years text-gold">10+</span>
                  <span className="text text-white">Years of<br/>Excellence</span>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="col-lg-6 ps-lg-5"
            >
              <h4 className="section-subtitle">Our Story</h4>
              <h2 className="section-title font-heading">A Symphony of Flavors & Elegance</h2>
              <p className="section-description">
                At MG Grand, we believe dining is not just about food—it's an experience. 
                Our master chefs bring together the finest ingredients, traditional recipes, 
                and modern culinary techniques to create dishes that delight the senses.
              </p>
              <ul className="highlight-list">
                <li><ChevronRight className="text-gold" size={20} /> Premium ambience for family and friends.</li>
                <li><ChevronRight className="text-gold" size={20} /> Signature Biryanis crafted to perfection.</li>
                <li><ChevronRight className="text-gold" size={20} /> Hygiene and quality are our top priorities.</li>
              </ul>
              <Link to="/about" className="btn-outline-gold mt-4">Discover Our Journey</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="section-padding popular-dishes bg-dark-secondary">
        <div className="container text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="d-flex justify-content-center"
          >
            <h4 className="section-subtitle justify-content-center">Our Specialties</h4>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-title mb-5 font-heading"
          >
            Signature Delights
          </motion.h2>
          
          <div className="row g-4 text-start">
            {[
              { name: "Chicken Biryani", desc: "Authentic dum biryani cooked with aromatic spices.", price: "₹280", img: biryaniImage },
              { name: "MLA Biryani", desc: "A spicy and flavorful specialty with minced meat.", price: "₹320", img: biryaniImage },
              { name: "Paneer Majestic", desc: "Crispy paneer tossed in a rich yogurt sauce.", price: "₹250", img: paneerImage },
              { name: "Pepper Chicken", desc: "Succulent chicken cooked with crushed black pepper.", price: "₹290", img: biryaniImage }
            ].map((dish, idx) => (
              <motion.div 
                className="col-md-6 col-lg-3" 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
              >
                <div className="menu-card glassmorphism-card h-100">
                  <div className="menu-card-img-wrapper" style={{ height: '220px' }}>
                    <img src={dish.img} alt={dish.name} className="menu-card-img" />
                    <div className="steam-effect"></div>
                  </div>
                  <div className="menu-card-content p-4 d-flex flex-column" style={{ background: 'linear-gradient(to top, rgba(15, 15, 15, 0.9), rgba(25, 25, 25, 0.8))' }}>
                    <h3 className="menu-item-title mb-2 fs-4">{dish.name}</h3>
                    <p className="menu-item-desc mb-3" style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)' }}>{dish.desc}</p>
                    <div className="dish-footer d-flex justify-content-between align-items-center mt-auto border-top pt-3" style={{ borderColor: 'rgba(212, 175, 55, 0.1)' }}>
                      <span className="dish-price text-gold fw-bold fs-5">{dish.price}</span>
                      <button className="add-to-cart-sm" style={{ width: '35px', height: '35px', borderRadius: '50%', background: 'transparent', border: '1px solid var(--color-gold)', color: 'var(--color-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s' }}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-5 pt-3"
          >
            <Link to="/menu" className="btn-gold luxury-glow py-3 px-5 fs-6">View Full Menu</Link>
          </motion.div>
        </div>
      </section>
      
      {/* Quick Info */}
      <section className="quick-info section-padding position-relative" style={{ background: 'linear-gradient(135deg, #050505, #111)' }}>
        <div className="container">
          <div className="row g-4">
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="col-md-4"
            >
              <div className="info-card glassmorphism-card border-0 shadow-lg">
                <div className="info-icon"><Clock size={32} /></div>
                <h3 className="font-heading">Opening Hours</h3>
                <p>Mon - Sun: 11:00 AM - 10:30 PM</p>
                <p className="text-gold fw-bold">Open Daily</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="col-md-4"
            >
              <div className="info-card active shadow-lg" style={{ background: 'linear-gradient(135deg, var(--color-gold), var(--color-gold-dark))' }}>
                <div className="info-icon bg-black text-gold"><MapPin size={32} /></div>
                <h3 className="font-heading text-black">Visit Us</h3>
                <p className="text-dark fw-medium">S.V. Plaza, Gollapalle Ring Road</p>
                <p className="text-dark fw-medium">Madanapalle, AP 517326</p>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="col-md-4"
            >
              <div className="info-card glassmorphism-card border-0 shadow-lg">
                <div className="info-icon"><Phone size={32} /></div>
                <h3 className="font-heading">Contact Us</h3>
                <p>09851113311</p>
                <p>info@themggrand.com</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
