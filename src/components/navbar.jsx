import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ cartCount, onCartClick }) => {
  const location = useLocation();
  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'Products', to: '/products' },
    { label: 'About', to: '/about' },
    { label: 'Contact', to: '/contact' },
  ];
  return (
    <nav className="navbar navbar-expand-lg" style={{ background: '#0d6efd' }}>
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold text-white" style={{fontSize: '2rem'}} to="/">Pick n Pay</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav d-flex align-items-center" style={{gap: '1.5rem'}}>
            {navLinks.map(({label, to}) => (
              <li className="nav-item" key={label}>
                <Link
                  className={`nav-link fw-semibold px-3 py-2 border border-white rounded ${location.pathname === to ? 'active' : 'text-white'}`}
                  to={to}
                  style={{fontSize: '1.2rem', transition: 'background 0.2s, color 0.2s'}}
                  onMouseOver={e => {
                    e.target.style.background = '#fff';
                    e.target.style.color = '#0d6efd';
                  }}
                  onMouseOut={e => {
                    e.target.style.background = 'transparent';
                    e.target.style.color = location.pathname === to ? '#0d6efd' : '#fff';
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <button className="btn btn-warning position-relative ms-3" onClick={onCartClick} style={{fontSize: '1.2rem'}}>
            <span role="img" aria-label="cart">🛒</span>
            {cartCount > 0 && (
              <span className="badge bg-danger position-absolute top-0 start-100 translate-middle" style={{fontSize: 12}}>{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
