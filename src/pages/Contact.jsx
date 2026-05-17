import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container text-center">
          <div className="d-flex justify-content-center">
            <motion.h4 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
              className="section-subtitle justify-content-center"
            >
              Get In Touch
            </motion.h4>
          </div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="contact-title"
          >
            We'd Love to <span className="text-gold">Hear From You</span>
          </motion.h1>
        </div>
      </section>

      <section className="section-padding pt-0 text-start">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <div className="contact-info-wrapper">
                <h3 className="mb-4 text-white font-heading">MG <span className="text-gold">GRAND</span></h3>
                <p className="text-muted mb-5">Premium Multicuisine Restaurant with Authentic Taste & Best Ambience in Madanapalle.</p>
                
                <div className="contact-detail-card">
                  <div className="icon"><MapPin size={24} /></div>
                  <div>
                    <h5>Location</h5>
                    <p>S.V. Plaza, Gollapalle Ring Road, Old National Hwy, SBI Colony, Madanapalle, AP 517326</p>
                  </div>
                </div>
                
                <div className="contact-detail-card">
                  <div className="icon"><Phone size={24} /></div>
                  <div>
                    <h5>Phone</h5>
                    <p>09851113311</p>
                  </div>
                </div>
                
                <div className="contact-detail-card">
                  <div className="icon"><Mail size={24} /></div>
                  <div>
                    <h5>Email</h5>
                    <p>info@themggrand.com</p>
                  </div>
                </div>
                
                <div className="contact-detail-card border-bottom-0 mb-0 pb-0">
                  <div className="icon"><Clock size={24} /></div>
                  <div>
                    <h5>Opening Hours</h5>
                    <p>Open Daily <br/>11:00 AM - 10:30 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-lg-7">
              <div className="contact-form-container">
                <h3 className="mb-4 text-white">Send us a Message</h3>
                <form className="contact-form">
                  <div className="row g-4">
                    <div className="col-md-6">
                      <input type="text" className="form-control" placeholder="Your Name" required />
                    </div>
                    <div className="col-md-6">
                      <input type="email" className="form-control" placeholder="Your Email" required />
                    </div>
                    <div className="col-12">
                      <input type="text" className="form-control" placeholder="Subject" required />
                    </div>
                    <div className="col-12">
                      <textarea className="form-control" rows="5" placeholder="Your Message" required></textarea>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn-gold shadow-gold-hover">
                        <Send size={18} className="me-2" /> Send Message
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          <div className="row mt-5 pt-5">
            <div className="col-12">
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.8457007797746!2d78.49755491483015!3d13.551608690466488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb26284f1073df9%3A0x6e9f16e4dbbaf697!2sMadanapalle%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1689269389270!5m2!1sen!2sin" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="MG Grand Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/919851113311" target="_blank" rel="noreferrer" className="whatsapp-float">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="#fff"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
      </a>
    </div>
  );
};

export default Contact;
