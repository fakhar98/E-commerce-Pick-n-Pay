import React, { useState } from 'react';

const categories = [
  'All',
  'Electronics',
  'Fashion',
  'Home & Kitchen',
  'Books',
  'Toys',
  'Sports',
  'Beauty',
  'Grocery',
];

const products = [
  // Electronics
  { name: 'Logitech G G535', img: 'https://m.media-amazon.com/images/I/813Nn+eQrLL._AC_SX466_.jpg', link: 'https://www.amazon.com/dp/B0D4R2MDDY', category: 'Electronics' },
  { name: 'Smart Watch', img: 'https://m.media-amazon.com/images/I/61lrpyxMNQL._AC_SL1500_.jpg', link: 'https://www.amazon.com/dp/B0F5WXPND3', category: 'Electronics' },
  { name: 'Sony AirPods', img: 'https://m.media-amazon.com/images/I/41H-Lb8rA1L._AC_SX466_.jpg', link: 'https://www.amazon.com/dp/B07T81554H', category: 'Electronics' },
  { name: 'Canon EOS Rebel T7', img: 'https://m.media-amazon.com/images/I/81rA2B6iKGL._AC_SL1500_.jpg', link: 'https://www.amazon.com/dp/B07C2Z21X5', category: 'Electronics' },
  { name: 'Samsung Galaxy Tab', img: 'https://m.media-amazon.com/images/I/71w6Y9QpQzL._AC_SL1500_.jpg', link: 'https://www.amazon.com/dp/B09N41RC6L', category: 'Electronics' },
  // Fashion
  { name: 'Men T-Shirt', img: 'https://m.media-amazon.com/images/I/71pWzhdJNwL._AC_UL1500_.jpg', link: 'https://www.amazon.com/dp/B07NQGJZTW', category: 'Fashion' },
  { name: 'Women Dress', img: 'https://m.media-amazon.com/images/I/71pQKQwQwQL._AC_UL1500_.jpg', link: 'https://www.amazon.com/dp/B07QKQWQWQ', category: 'Fashion' },
  { name: 'Sneakers', img: 'https://m.media-amazon.com/images/I/71QKQwQwQwL._AC_UL1500_.jpg', link: 'https://www.amazon.com/dp/B07SNKQWQW', category: 'Fashion' },
  // Home & Kitchen
  { name: 'Nonstick Cookware Set', img: 'https://m.media-amazon.com/images/I/71Ypc1inZTL._AC_SX679_.jpg', link: 'https://www.amazon.com/dp/B0B2K47S1T', category: 'Home & Kitchen' },
  { name: 'Espresso Machine', img: 'https://m.media-amazon.com/images/I/81vpsIs58WL._AC_SL1500_.jpg', link: 'https://www.amazon.com/dp/B07V3GXZ4T', category: 'Home & Kitchen' },
  { name: 'Vacuum Cleaner', img: 'https://m.media-amazon.com/images/I/71QKQwQwQwL._AC_SL1500_.jpg', link: 'https://www.amazon.com/dp/B07QKQWQWQ', category: 'Home & Kitchen' },
  // Books
  { name: 'The Silent Patient', img: 'https://m.media-amazon.com/images/I/91lslnZ-btL._SL1500_.jpg', link: 'https://www.amazon.com/dp/1250301696', category: 'Books' },
  { name: 'Atomic Habits', img: 'https://m.media-amazon.com/images/I/91bYsX41DVL._AC_SL1500_.jpg', link: 'https://www.amazon.com/dp/0735211299', category: 'Books' },
  { name: 'The Alchemist', img: 'https://m.media-amazon.com/images/I/71aFt4+OTOL._AC_SL1500_.jpg', link: 'https://www.amazon.com/dp/0061122416', category: 'Books' },
  // Toys
  { name: 'Lego Classic Bricks', img: 'https://m.media-amazon.com/images/I/81sXyDjMOPL.__AC_SX300_SY300_QL70_FMwebp_.jpg', link: 'https://www.amazon.com/dp/B00NHQF6MG', category: 'Toys' },
  { name: 'Nerf Blaster', img: 'https://m.media-amazon.com/images/I/81QKQwQwQwL._AC_SL1500_.jpg', link: 'https://www.amazon.com/dp/B07QKQWQWQ', category: 'Toys' },
  { name: 'Barbie Doll', img: 'https://m.media-amazon.com/images/I/71QKQwQwQwL._AC_UL1500_.jpg', link: 'https://www.amazon.com/dp/B07SNKQWQW', category: 'Toys' },
  // Sports
  { name: 'Football', img: 'https://m.media-amazon.com/images/I/81QKQwQwQwL._AC_SL1500_.jpg', link: 'https://www.amazon.com/dp/B07QKQWQWQ', category: 'Sports' },
  { name: 'Yoga Mat', img: 'https://m.media-amazon.com/images/I/71QKQwQwQwL._AC_SL1500_.jpg', link: 'https://www.amazon.com/dp/B07QKQWQWQ', category: 'Sports' },
  // Beauty
  { name: 'Face Cream', img: 'https://m.media-amazon.com/images/I/71QKQwQwQwL._AC_SL1500_.jpg', link: 'https://www.amazon.com/dp/B07QKQWQWQ', category: 'Beauty' },
  { name: 'Lipstick', img: 'https://m.media-amazon.com/images/I/71QKQwQwQwL._AC_UL1500_.jpg', link: 'https://www.amazon.com/dp/B07SNKQWQW', category: 'Beauty' },
  // Grocery
  { name: 'Organic Honey', img: 'https://m.media-amazon.com/images/I/71QKQwQwQwL._AC_SL1500_.jpg', link: 'https://www.amazon.com/dp/B07QKQWQWQ', category: 'Grocery' },
  { name: 'Almonds', img: 'https://m.media-amazon.com/images/I/71QKQwQwQwL._AC_SL1500_.jpg', link: 'https://www.amazon.com/dp/B07QKQWQWQ', category: 'Grocery' },
];

const Products = ({ addToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Products</h2>
      <div className="d-flex flex-wrap gap-2 mb-4">
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
    </div>
  );
};

export default Products;
