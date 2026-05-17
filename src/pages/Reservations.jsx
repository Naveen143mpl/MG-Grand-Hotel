import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Utensils, Star } from 'lucide-react';
import './Reservations.css';
import resImg from '../assets/reservation.png';

const Reservations = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', date: '', time: '', guests: '2', request: ''
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Reservation Request Submitted! We will contact you shortly to confirm.');
  };

  return (
    <div className="reservation-page">
      <section className="reservation-hero" style={{ backgroundImage: `url(${resImg})` }}>
        <div className="hero-overlay"></div>
        
        <div className="container position-relative z-1">
          <div className="row justify-content-between align-items-center min-vh-100 pt-5">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="col-lg-5 mb-5 mb-lg-0 text-center text-lg-start"
            >
              <div className="d-flex justify-content-center justify-content-lg-start">
                <h4 className="section-subtitle">Book Your Experience</h4>
              </div>
              <h1 className="res-hero-title mb-4">A Table for <br/><span className="text-gold">Every Occasion</span></h1>
              <p className="hero-subtitle mb-5">
                Whether it's an intimate dinner, a family gathering, or a corporate event, 
                our premium ambience sets the perfect stage for unforgettable memories.
              </p>
              
              <div className="d-flex flex-column gap-4 text-start bg-glass p-4 rounded-lg">
                <div className="d-flex align-items-center gap-3">
                  <div className="icon-box"><Utensils size={24} className="text-gold" /></div>
                  <div>
                    <h5 className="mb-1 text-white">Private Dining</h5>
                    <p className="mb-0 text-muted small">Exclusive spaces for your special celebrations.</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div className="icon-box"><Star size={24} className="text-gold" /></div>
                  <div>
                    <h5 className="mb-1 text-white">VIP Treatment</h5>
                    <p className="mb-0 text-muted small">Personalized service with chef recommendations.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="col-lg-6"
            >
              <div className="booking-form-wrapper">
                <h3 className="form-title text-center mb-4">Reserve a Table</h3>
                
                <form onSubmit={handleSubmit} className="booking-form text-start">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Your Name</label>
                        <input type="text" name="name" className="form-control" placeholder="John Doe" required onChange={handleChange} />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" name="phone" className="form-control" placeholder="+91 98765 43210" required onChange={handleChange} />
                      </div>
                    </div>
                    
                    <div className="col-md-4">
                      <div className="form-group">
                        <label><Calendar size={14} className="me-1"/> Date</label>
                        <input type="date" name="date" className="form-control" required onChange={handleChange} />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label><Clock size={14} className="me-1"/> Time</label>
                        <input type="time" name="time" className="form-control" required onChange={handleChange} />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label><Users size={14} className="me-1"/> Guests</label>
                        <select name="guests" className="form-control" onChange={handleChange}>
                          {[1,2,3,4,5,6,7,8,'9+'].map(num => <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>)}
                        </select>
                      </div>
                    </div>
                    
                    <div className="col-12">
                      <div className="form-group">
                        <label>Special Requests (Optional)</label>
                        <textarea name="request" className="form-control" rows="3" placeholder="Birthday celebration, dietary requirements, etc." onChange={handleChange}></textarea>
                      </div>
                    </div>
                    
                    <div className="col-12 mt-4">
                      <button type="submit" className="btn-gold w-100 py-3 shadow-gold-hover">
                        Confirm Reservation
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reservations;
