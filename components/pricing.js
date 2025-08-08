'use client'

import { useState, useEffect } from 'react';

export default function Pricing() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/products.json');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const renderStars = (count) => {
    return Array(5).fill().map((_, i) => (
      <i 
        key={i} 
        className={i < count ? "fa-solid fa-star" : "fa-regular fa-star"}
      ></i>
    ));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className="pricing">
      <div className="pricing-top">
        <img src="/images/furniture2.png" alt="Christmas furniture" />
        <div className="pricing-top-content">
          <h1>GET READY FOR A CHRISTMAS</h1>
          <button>ACTUAL TRENDS</button>
        </div>
      </div>
      <div className="pricing-cards">
        {products.map(product => (
          <div key={product.id} className="pricing-card">
            <div className="pricing-card-icons">
              <i className="fa-solid fa-link"></i>
              <i className="fa-regular fa-heart"></i>
              <i className="fa-solid fa-magnifying-glass-plus"></i>
            </div>
            <div className="img-wrapper">
              <img src={product.image} alt={product.name} />
            </div>
            <h3>{product.name}</h3>
            <div className="stars">
              {renderStars(product.stars)}
            </div>
            <h4>{product.price}</h4>
          </div>
        ))}
      </div>
      <button>GO TO SHOP</button>
    </section>
  );
}