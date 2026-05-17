import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="nav-logo">
          MG <span className="text-gold">GRAND</span>
        </Link>

        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={isActive('/') ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/about" className={isActive('/about') ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <Link to="/menu" className={isActive('/menu') ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Menu</Link>
          <Link to="/reservations" className={isActive('/reservations') ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Reservations</Link>
          <Link to="/contact" className={isActive('/contact') ? 'active' : ''} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </div>

        <div className="nav-actions">
          <Link to="/order-online" className="btn-gold d-none d-md-flex">Order Online</Link>
          <button className="cart-btn" aria-label="Cart">
            <ShoppingCart size={20} />
            <span className="cart-badge">0</span>
          </button>
          
          <button 
            className="mobile-menu-btn d-md-none" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
