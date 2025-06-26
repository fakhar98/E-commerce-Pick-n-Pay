import React from 'react';

const Footer = () => (
  <footer className="bg-dark text-white mt-5 py-4">
    <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
      <div className="mb-2 mb-md-0">
        <span className="fw-bold">Pick n Pay</span> &copy; {new Date().getFullYear()} All rights reserved.
      </div>
      <div>
        <a href="#about" className="text-white me-3 text-decoration-none">About</a>
        <a href="#products" className="text-white me-3 text-decoration-none">Products</a>
        <a href="#contact" className="text-white text-decoration-none">Contact</a>
      </div>
    </div>
  </footer>
);

export default Footer;
