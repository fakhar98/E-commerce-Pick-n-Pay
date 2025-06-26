import React, { useState, useEffect } from 'react';
import Navbar from './components/navbar';

const featuredProducts = [
  {
    img: 'https://m.media-amazon.com/images/I/813Nn+eQrLL._AC_SX466_.jpg',
    link: 'https://www.amazon.com/Logitech-LIGHTSPEED-Wireless-Gaming-Headset/dp/B0D4R2MDDY/ref=sr_1_3?crid=3K7SEAJ9LVV59&dib=eyJ2IjoiMSJ9.Pfix3I77yjMkN8wajdeQJ8tFF0Ws6RvthZl3NcGnzakNvEFJQyZdbPZf4krdbie2H6m9t8QWad9TvNH4ZP4OXzdpfr6gpV8lCLZy64VNbH-J4Pzb6GTceIRLHSm4GvhXGvbxIqDOGut9o8QA2RxiMPGXWl2H_iD4XjdbRWXEK2HiwgWhza5yaIyZ9UEh53AX_fMKjCa2ZI2mbO-Unk-2HgVI5Rgsgrd8X7S0DXK9B9Jx7033L1lzRkjoC5Stg7j8-jogZhNAU4fqn51c9ogaKDPAjJSee2gO3W9HQqiDuQ0.5Yr_TleHqr7CCyJuWLCJI9G_8SofdfCowSGOh0FWKKw&dib_tag=se&keywords=wireless+headphones&qid=1750957877&s=amazon-devices&sprefix=wireless+headphone%2Camazon-devices%2C293&sr=1-3-catcorr',
    name: 'Logitech G G535',
    isLight: false,
  },
  {
    img: 'https://m.media-amazon.com/images/I/41H-Lb8rA1L._AC_SX466_.jpg',
    link: 'https://www.amazon.com/dp/B07T81554H?th=1',
    name: 'Sony AirPods',
    isLight: true,
  },
  {
    img: 'https://m.media-amazon.com/images/I/61lrpyxMNQL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Touchscreen-Bluetooth-Waterproof-Fitness-Tracker/dp/B0F5WXPND3/ref=sr_1_25?dib=eyJ2IjoiMSJ9.G2DMoluHKvz0EdVHfodS7yGoEGUJ3VCTwmhEq_lgvtsESLAyDMg07WqbzkV5bpDfEAvqdhF8sTTk0GKYx_tRa0X04vF_ujqCv0XBz6k1EU-AFTJtUZjeL53Q73oERW5EQvF7x7Eh_dYxVx2Ceub4aqQ2O2gLy1HEVoqStYQMuyOOs1kJ1H0Fw4xa7SuIxOXwaY7TCC_wEFupspYaGjQjFWpYHfCmi4-2fYurEo91NrV-AmQdfbLIfmIY3w0VGOY9oy_nye36axp8_NcpuVHAen8JsbjULWW4FArxUAJ62qs.sLQDRCbIBqKy3uGoy3bmcdHQD1-M8fJTNuaeLKPBUmY&dib_tag=se&keywords=watch&qid=1750958158&sr=8-25&th=1',
    name: 'Smart Watch',
    isLight: true,
  },
];

const categories = [
  'All',
  'Electronics',
  'Fashion',
  'Home & Kitchen',
  'Books',
  'Toys',
];

const products = [
  {
    name: 'Logitech G G535',
    img: 'https://m.media-amazon.com/images/I/813Nn+eQrLL._AC_SX466_.jpg',
    link: 'https://www.amazon.com/Logitech-LIGHTSPEED-Wireless-Gaming-Headset/dp/B0D4R2MDDY/ref=sr_1_3?crid=3K7SEAJ9LVV59&dib=eyJ2IjoiMSJ9.Pfix3I77yjMkN8wajdeQJ8tFF0Ws6RvthZl3NcGnzakNvEFJQyZdbPZf4krdbie2H6m9t8QWad9TvNH4ZP4OXzdpfr6gpV8lCLZy64VNbH-J4Pzb6GTceIRLHSm4GvhXGvbxIqDOGut9o8QA2RxiMPGXWl2H_iD4XjdbRWXEK2HiwgWhza5yaIyZ9UEh53AX_fMKjCa2ZI2mbO-Unk-2HgVI5Rgsgrd8X7S0DXK9B9Jx7033L1lzRkjoC5Stg7j8-jogZhNAU4fqn51c9ogaKDPAjJSee2gO3W9HQqiDuQ0.5Yr_TleHqr7CCyJuWLCJI9G_8SofdfCowSGOh0FWKKw&dib_tag=se&keywords=wireless+headphones&qid=1750957877&s=amazon-devices&sprefix=wireless+headphone%2Camazon-devices%2C293&sr=1-3-catcorr',
    category: 'Electronics',
  },
  {
    name: 'Smart Watch',
    img: 'https://m.media-amazon.com/images/I/61lrpyxMNQL._AC_SL1500_.jpg',
    link: 'https://www.amazon.com/Touchscreen-Bluetooth-Waterproof-Fitness-Tracker/dp/B0F5WXPND3/ref=sr_1_25?dib=eyJ2IjoiMSJ9.G2DMoluHKvz0EdVHfodS7yGoEGUJ3VCTwmhEq_lgvtsESLAyDMg07WqbzkV5bpDfEAvqdhF8sTTk0GKYx_tRa0X04vF_ujqCv0XBz6k1EU-AFTJtUZjeL53Q73oERW5EQvF7x7Eh_dYxVx2Ceub4aqQ2O2gLy1HEVoqStYQMuyOOs1kJ1H0Fw4xa7SuIxOXwaY7TCC_wEFupspYaGjQjFWpYHfCmi4-2fYurEo91NrV-AmQdfbLIfmIY3w0VGOY9oy_nye36axp8_NcpuVHAen8JsbjULWW4FArxUAJ62qs.sLQDRCbIBqKy3uGoy3bmcdHQD1-M8fJTNuaeLKPBUmY&dib_tag=se&keywords=watch&qid=1750958158&sr=8-25&th=1',
    category: 'Electronics',
  },
  {
    name: 'Sony AirPods',
    img: 'https://m.media-amazon.com/images/I/41H-Lb8rA1L._AC_SX466_.jpg',
    link: 'https://www.amazon.com/dp/B07T81554H?th=1',
    category: 'Electronics',
  },
  {
    name: 'Novel: The Silent Patient',
    img: 'https://m.media-amazon.com/images/I/91lslnZ-btL._SL1500_.jpg',
    link: 'https://www.amazon.com/dp/1250301696',
    category: 'Books',
  },
  {
    name: 'Lego Classic Bricks',
    img: 'https://m.media-amazon.com/images/I/81sXyDjMOPL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
    link: 'https://www.amazon.com/dp/B00NHQF6MG',
    category: 'Toys',
  },
  {
    name: 'Men T-Shirt',
    img: 'https://m.media-amazon.com/images/I/71pWzhdJNwL._AC_UL1500_.jpg',
    link: 'https://www.amazon.com/dp/B07NQGJZTW',
    category: 'Fashion',
  },
  {
    name: 'Nonstick Cookware Set',
    img: 'https://m.media-amazon.com/images/I/71Ypc1inZTL._AC_SX679_.jpg',
    link: 'https://www.amazon.com/CAROTE-Induction-Stackable-Non-stick-Detachable/dp/B0B2K47S1T/ref=sr_1_1?crid=148MDUV4OHWCI&dib=eyJ2IjoiMSJ9.4dRisbC9G9uDWcKIANa2Z2BrWYAz3LTzuW8244xiiFyyOYVor5ueC6LAhajQIfQ61-lNFuGIBV7clJ-35b4hjHFnYhNnoDy2X7AP2B7sCnDEmGVoLnVi2qFQABqPtm9b3gzcfOZ9Kqvj1AwE_qSJuHSX5JGibpRS7gYJNLH9QrikuNZ36hIoV5hwXLv46NEdh8rUY8e26_uj1NOAZaSH1XXyPTsmJ2Rw-yv3Lmy09H65RZL_r4QKn_aU5zqoDnrX2fnugEw8zO3I9e-xW105IytXScwpOuuvNqB6XcdA56Q.G0rVsyjpcasSdVaQkceDDH2SGNRw7-CZajgFd1zpvZU&dib_tag=se&keywords=nonstick%2Bcookware%2Bset&qid=1750958914&sprefix=Nonstick%2B%2Caps%2C288&sr=8-1&th=1',
    category: 'Home & Kitchen',
  },
];

const Home = ({ setCartCount, showCart, setShowCart }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCartCount(cart.length);
  }, [cart, setCartCount]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? featuredProducts.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setActiveIndex((prev) => (prev === featuredProducts.length - 1 ? 0 : prev + 1));
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === featuredProducts.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const btnClass = featuredProducts[activeIndex].isLight ? 'carousel-control-dark' : 'carousel-control-light';

  // Filter products by selected category
  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div className="container mt-4 position-relative">
      {/* Featured Products Carousel */}
      <div id="featuredCarousel" className="carousel slide mb-5">
        <div className="carousel-inner">
          {featuredProducts.map((product, idx) => (
            <div className={`carousel-item${idx === activeIndex ? ' active' : ''}`} key={product.img}>
              <a href={product.link} target="_blank" rel="noopener noreferrer">
                <img src={product.img} className="d-block w-100" alt={product.name} style={{height: '350px', objectFit: 'contain', background: '#fff'}} />
              </a>
            </div>
          ))}
        </div>
        <button className={`carousel-control-prev ${btnClass}`} type="button" onClick={handlePrev} style={{filter: btnClass === 'carousel-control-dark' ? 'invert(1)' : 'none'}}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className={`carousel-control-next ${btnClass}`} type="button" onClick={handleNext} style={{filter: btnClass === 'carousel-control-dark' ? 'invert(1)' : 'none'}}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Categories */}
      <h3 className="mb-3">Categories</h3>
      <div className="row mb-5">
        <div className="d-flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              className={`btn btn${selectedCategory === cat ? '' : '-outline'}-primary`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Filtered Products */}
      <h3 className="mb-3">Featured Products</h3>
      <div className="row">
        {filteredProducts.map(product => (
          <div className="col-12 col-md-4 col-lg-3 mb-4" key={product.name}>
            <div className="card h-100 shadow-sm">
              <img src={product.img} className="card-img-top" alt={product.name} style={{height: '180px', objectFit: 'contain'}} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <div className="d-flex flex-column gap-2 mt-auto">
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on Amazon</a>
                  <button className="btn btn-success" onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Modal/Page */}
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

      {/* Floating Cart Button (Blue) */}
      <button
        className="btn btn-primary position-fixed"
        style={{ bottom: 30, right: 30, zIndex: 1050, borderRadius: '50%', width: 60, height: 60, boxShadow: '0 2px 8px rgba(0,0,0,0.2)' }}
        onClick={() => setShowCart(true)}
      >
        <span role="img" aria-label="cart" style={{fontSize: 24}}>🛒</span>
        {cart.length > 0 && (
          <span className="badge bg-danger position-absolute top-0 start-100 translate-middle" style={{fontSize: 14}}>{cart.length}</span>
        )}
      </button>
    </div>
  );
};

export default Home;
