import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />

      {/* 1. Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>Savor the Authentic Flavors of Tradition</h1>
          <p>Experience culinary excellence with every single bite. Fresh ingredients, timeless recipes.</p>
          <button className="cta-btn">Explore Our Menu</button>
        </div>
      </section>

      {/* 2. Featured Dishes Section */}
      <section className="featured-section">
        <h2 className="section-title">Our Featured Dishes</h2>
        <div className="dishes-grid">
          {/* Mock Data for Day 1 Showcase */}
          <div className="dish-card">
            <div className="dish-img-placeholder">🍲</div>
            <h3>Special Mutton Karahi</h3>
            <p>Rich traditional gravy cooked with fresh spices.</p>
            <span className="price">Rs. 1800</span>
          </div>
          <div className="dish-card">
            <div className="dish-img-placeholder">🍕</div>
            <h3>Chicken Tikka Pizza</h3>
            <p>Smoky chicken tikka chunks with loads of cheese.</p>
            <span className="price">Rs. 1200</span>
          </div>
          <div className="dish-card">
            <div className="dish-img-placeholder">🍔</div>
            <h3>Crunchy Zinger Burger</h3>
            <p>Crispy fried chicken breast with secret sauce.</p>
            <span className="price">Rs. 450</span>
          </div>
        </div>
      </section>

      {/* 3. Why Choose Us Section */}
      <section className="why-choose-us">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="benefits-container">
          <div className="benefit-item">
            <h4>Fresh Ingredients</h4>
            <p>We source our vegetables and meat daily to ensure top notch quality.</p>
          </div>
          <div className="benefit-item">
            <h4>Expert Chefs</h4>
            <p>Our kitchen is managed by master chefs with decades of experience.</p>
          </div>
          <div className="benefit-item">
            <h4>Hygenic Environment</h4>
            <p>Strict safety and hygiene guidelines are followed in our kitchen.</p>
          </div>
        </div>
      </section>

      {/* 4. Customer Testimonials */}
      <section className="testimonials-section">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonials-grid">
          <div className="review-card">
            <p>"The best food experience in town! Their service is exceptionally fast and friendly."</p>
            <h5>- Ahmed Ali</h5>
          </div>
          <div className="review-card">
            <p>"Amazing environment and the taste of the Biryani was out of this world."</p>
            <h5>- Sarah Khan</h5>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;