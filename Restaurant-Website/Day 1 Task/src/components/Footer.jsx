import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-info">
          <h3>Zauq Restaurant</h3>
          <p>Contact: +92 300 1234567</p>
          <p>Email: info@zauqrestaurant.com</p>
          <p>Address: Block 4, Gulistan-e-Johar, Karachi</p>
        </div>
        <div className="footer-socials">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Zauq Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;