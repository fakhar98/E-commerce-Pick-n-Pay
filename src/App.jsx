import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Home from './Home';
import Products from './Products';

const App = () => {
  const [cartCount, setCartCount] = React.useState(0);
  const [showCart, setShowCart] = React.useState(false);
  const [cart, setCart] = React.useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setCartCount((prev) => prev + 1);
  };

  return (
    <Router>
      <Navbar cartCount={cartCount} onCartClick={() => setShowCart(true)} />
      <div style={{marginTop: '1rem', minHeight: '80vh'}}>
        <Routes>
          <Route path="/" element={<Home setCartCount={setCartCount} showCart={showCart} setShowCart={setShowCart} />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/about" element={
            <div className="container mt-4">
              <h2>About Pick n Pay</h2>
              <p style={{fontSize: '1.1rem', lineHeight: 1.7}}>
                Welcome to <strong>Pick n Pay</strong>, your one-stop destination for all your shopping needs! Established with a vision to make quality products accessible and affordable for everyone, Pick n Pay has grown into a trusted name in the world of e-commerce. Our store offers a vast selection of products across categories such as Electronics, Fashion, Home & Kitchen, Books, Toys, Sports, Beauty, and Grocery. Whether you're looking for the latest gadgets, stylish apparel, home essentials, or gifts for your loved ones, you'll find it all under one roof at Pick n Pay.
                <br /><br />
                At Pick n Pay, we believe in delivering not just products, but also value and convenience. Our user-friendly platform, secure payment options, and fast shipping ensure a seamless shopping experience from start to finish. We partner with top brands and trusted suppliers to bring you genuine products at competitive prices. Our dedicated customer support team is always ready to assist you, making sure your journey with us is smooth and satisfying.
                <br /><br />
                We are committed to sustainability and community, striving to reduce our environmental footprint and support local initiatives. With regular deals, exclusive offers, and a rewarding loyalty program, shopping at Pick n Pay is not just easy—it's enjoyable and rewarding.
                <br /><br />
                Thank you for choosing Pick n Pay. We look forward to serving you and becoming your preferred online shopping destination!
              </p>
            </div>
          } />
          <Route path="/contact" element={
            <div className="container mt-4" style={{maxWidth: 600}}>
              <h2>Contact Us</h2>
              <p className="mb-4">Have a question, feedback, or need support? Fill out the form below and our team will get back to you as soon as possible.</p>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="4" placeholder="Type your message here..." required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          } />
        </Routes>
        {/* Cart Modal/Page (shared for all pages) */}
        {showCart && (
          <div className="position-fixed top-0 start-0 w-100 h-100" style={{background: 'rgba(0,0,0,0.4)', zIndex: 2000}} onClick={() => setShowCart(false)}>
            <div className="bg-white rounded shadow p-4 position-absolute" style={{top: '10%', left: '50%', transform: 'translateX(-50%)', minWidth: 320, maxWidth: 400}} onClick={e => e.stopPropagation()}>
              <h4>Cart</h4>
              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <ul className="list-group mb-3">
                  {cart.map((item, idx) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={idx}>
                      <span>{item.name}</span>
                      <button className="btn btn-sm btn-danger" onClick={() => setCart(cart.filter((_, i) => i !== idx))}>Remove</button>
                    </li>
                  ))}
                </ul>
              )}
              <button className="btn btn-secondary w-100" onClick={() => setShowCart(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </Router>
  );
};

export default App;
