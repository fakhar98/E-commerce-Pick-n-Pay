import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import Home from './Home';
import Products from './Products';

// --- Cart Page Component ---
const Cart = ({ cart, setCart }) => {
  const handleQuantity = (idx, delta) => {
    setCart(prev =>
      prev.map((item, i) =>
        i === idx
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) + delta) }
          : item
      )
    );
  };

  const handleRemove = idx => {
    setCart(prev => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="container mt-4" style={{ maxWidth: 600 }}>
      <h2>Cart Items</h2>
      <div className="border rounded p-3 mt-3">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul className="list-group">
            {cart.map((item, idx) => (
              <li className="list-group-item d-flex justify-content-between align-items-center" key={idx}>
                <span>
                  {item.name}
                  <span className="mx-3">
                    <button className="btn btn-sm btn-outline-secondary" onClick={() => handleQuantity(idx, -1)}>-</button>
                    <span className="mx-2">{item.quantity || 1}</span>
                    <button className="btn btn-sm btn-outline-secondary" onClick={() => handleQuantity(idx, 1)}>+</button>
                  </span>
                </span>
                <button className="btn btn-sm btn-danger" onClick={() => handleRemove(idx)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
// --- End Cart Page Component ---

const App = () => {
  const [cart, setCart] = React.useState([]);

  const addToCart = (product) => {
    setCart((prev) => {
      const idx = prev.findIndex(item => item.name === product.name);
      if (idx > -1) {
        return prev.map((item, i) =>
          i === idx ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <Router>
      <Navbar cartCount={cartCount} />
      <div style={{marginTop: '1rem', minHeight: '80vh'}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
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
      </div>
      <Footer />
    </Router>
  );
};

export default App;
