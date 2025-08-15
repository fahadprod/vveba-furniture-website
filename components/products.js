'use client'

import { useState, useEffect } from 'react';
import Magnifier from "react-magnifier";

export default function Products({cart, setCart}) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All', icon: '' },
    { id: 'bedroom', name: 'Bedroom', icon: '/images/bedroom.png' },
    { id: 'buffet', name: 'Buffet', icon: '/images/buffet.png' },
    { id: 'dining', name: 'Dining', icon: '/images/dining.png' },
    { id: 'sofa', name: 'Sofa', icon: '/images/sofa.png' },
    { id: 'table', name: 'Table', icon: '/images/table.png' },
    { id: 'wardrobe', name: 'Wardrobe', icon: '/images/wardrobe.png' }
  ];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/products.json');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.products);
        setFilteredProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filterProducts = (category) => {
    setActiveCategory(category);
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  const renderStars = (count) => {
    return Array(5).fill().map((_, i) => (
      <i
        key={i}
        className={i < count ? "fa-solid fa-star" : "fa-regular fa-star"}
      ></i>
    ));
  };

  const addToCart = (product) => {
    // Check if product already exists in cart
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      // If exists, increase quantity
      setCart(cart.map(item =>
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      // If new, add to cart with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    
    // Optional: Show a notification or feedback
    alert(`${product.name} added to cart!`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      <section className="products" id="products">
        <div className="products-top">
          <h3>SEARCH FOR</h3>
          <h2>1500</h2>
          <h1>PRODUCTS</h1>
        </div>
        <div className="products-icons">
          {categories.map(category => (
            <div
              key={category.id}
              className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
              onClick={() => filterProducts(category.id)}
            >
              {category?.icon == '' ? <i style={{ color: '#073E72', fontSize: '28px', marginTop: '20px', marginBottom: '30px' }} class="fa-solid fa-border-all"></i> : <img src={category.icon} alt={`${category.name} furniture`} />}
              <span>{category.name}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="pricing" id='pricing'>
        <div className="pricing-top">
          <img src="/images/furniture2.png" alt="Christmas furniture" />
          <div className="pricing-top-content">
            <h1>EXPLORE OUR {activeCategory.toUpperCase()} COLLECTION</h1>
            <button>SHOP NOW</button>
          </div>
        </div>
        <div className="pricing-cards" id='productList'>
          {filteredProducts.length > 0 ? (
            filteredProducts.map(product => (
              <div key={product.id} className="pricing-card">
                <div className="pricing-card-icons">
                  <i className="fa-solid fa-link"></i>
                  <i className="fa-regular fa-heart"></i>
                  <i className="fa-solid fa-plus"
                   onClick={() => addToCart(product)}
                    style={{ cursor: 'pointer' }}
                  ></i>
                </div>
                <div className="img-wrapper">
                  <Magnifier src={product.image} />;
                </div>
                <h3>{product.name}</h3>
                <div className="stars">
                  {renderStars(product.stars)}
                </div>
                <h4>{product.price}</h4>
              </div>
            ))
          ) : (
            <div className="no-products">
              <p>No products found in this category.</p>
            </div>
          )}
        </div>
        <button>VIEW ALL PRODUCTS</button>
      </section>
    </>
  );
}