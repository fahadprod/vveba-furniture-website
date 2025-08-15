
'use client'

import { useEffect, useState } from "react";
import axios from "axios";

export default function Navbar({cart, setCart}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showSearchDropdown, setShowSearchDropdown] = useState(false);
  const [showCartDropdown, setShowCartDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.nav-list');
      if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch products data
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get('/data/products.json');
        setProducts(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredProducts([]);
      setShowSearchDropdown(false);
      return;
    }

    const filtered = products.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
    setShowSearchDropdown(filtered.length > 0);
  }, [searchQuery, products]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleProductSelect = (product) => {
    setSearchQuery(product.name);
    setShowSearchDropdown(false);
    const productListSection = document.getElementById('productList');
    if (productListSection) {
      productListSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Cart functions
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCart(cart.map(item =>
      item.id === productId 
        ? { ...item, quantity: newQuantity } 
        : item
    ));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + (price * item.quantity);
    }, 0).toFixed(2);
  };

  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);
  return (
    <nav className="navbar">
       <div className="navbar-top">
        <div className="logo">
          <i className="fa-solid fa-couch"></i>
          <span>FURNITURE</span>
        </div>
        <div className="search-bar" style={{ position: 'relative' }}>
          <input 
            type="text" 
            placeholder="What are you looking for?" 
            value={searchQuery}
            onChange={handleInputChange}
            onFocus={() => searchQuery && setShowSearchDropdown(true)}
            onBlur={() => setTimeout(() => setShowSearchDropdown(false), 200)}
          />
          <i className="fa-solid fa-magnifying-glass"></i>
          
          {showSearchDropdown && (
            <div className="search-dropdown">
              {isLoading ? (
                <div className="dropdown-item">Loading...</div>
              ) : filteredProducts.length > 0 ? (
                filteredProducts.map(product => (
                  <div 
                    key={product.id} 
                    className="dropdown-item"
                    onMouseDown={() => handleProductSelect(product)}
                  >
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      width="40" 
                      height="40" 
                      style={{ marginRight: '10px' }}
                    />
                    <div>
                      <div>{product.name}</div>
                      <div style={{ color: '#888', fontSize: '1.2rem' }}>{product.price}</div>
                    </div>
                    <i 
                      className="fa-solid fa-plus" 
                      onClick={(e) => {
                        e.stopPropagation();
                        addToCart(product);
                      }}
                      style={{ cursor: 'pointer', marginLeft: 'auto' }}
                    ></i>
                  </div>
                ))
              ) : (
                <div className="dropdown-item">No products found</div>
              )}
            </div>
          )}
        </div>
        <div className="user">
          <div 
            className="cart-icon-container"
            onClick={() => setShowCartDropdown(!showCartDropdown)}
          >
            <i className="fa-solid fa-cart-shopping"></i>
            {cartItemCount > 0 && (
              <span className="cart-count">{cartItemCount}</span>
            )}
            {showCartDropdown && (
              <div className="cart-dropdown">
                {cart.length === 0 ? (
                  <div className="empty-cart">Your cart is empty</div>
                ) : (
                  <>
                    <div className="cart-items">
                      {cart.map(item => (
                        <div key={item.id} className="cart-item">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            width="50" 
                            height="50" 
                          />
                          <div className="cart-item-details">
                            <h4>{item.name}</h4>
                            <div className="cart-item-price">{item.price}</div>
                            <div className="cart-item-quantity">
                              <button 
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              >
                                -
                              </button>
                              <span>{item.quantity}</span>
                              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                +
                              </button>
                            </div>
                          </div>
                          <i 
                            className="fa-solid fa-trash" 
                            onClick={() => removeFromCart(item.id)}
                          ></i>
                        </div>
                      ))}
                    </div>
                    <div className="cart-total">
                      <span>Total:</span>
                      <span>${calculateTotal()}</span>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
          {/* <span>${calculateTotal()}</span> */}
          <i className="fa-regular fa-heart"></i>
          <i className="fa-solid fa-user"></i>
        </div>
      </div>
      <div className="nav-list">
        <div>
          <a href="#home" style={{borderLeft: 'none'}}>
            <i className="fa-solid fa-house"></i>
          <span>HOME</span></a>
        </div>
        <div>
          <a href="#products">
            <i className="fa-solid fa-couch"></i>
          <span>PRODUCTS</span>
          </a>
        </div>
        <div>
          <a href="#pricing">
            <i className="fa-solid fa-dollar-sign"></i>
          <span>PRICING</span>
          </a>
        </div>
        <div>
          <a href="#blog">
            <i className="fa-brands fa-blogger"></i>
          <span>BLOG</span>
          </a>
        </div>
        <div>
          <a href="#faqs">
            <i className="fa-solid fa-star"></i>
          <span>FAQ</span>
          </a>
        </div>
        <div>
          <a href="#contact">
            <i className="fa-solid fa-message"></i>
          <span>CONTACT</span>
          </a>
        </div>
      </div>
    </nav>
  );
}