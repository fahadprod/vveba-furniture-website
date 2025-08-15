'use client'

import Blog from "@/components/blog";
import Contact from "@/components/contact";
import FAQs from "@/components/faq";
import Footer from "@/components/footer";
import HeroHeader from "@/components/hero-header";
import Navbar from "@/components/navbar";
import Products from "@/components/products";
import { useEffect, useState } from "react";


export default function Home() {

  const [cart, setCart] = useState([]);

  // Load cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  return (
    <div className="container">
      <Navbar cart={cart} setCart={setCart}/>
      <HeroHeader/>
      <Products cart={cart} setCart={setCart}/>
      <Blog/>
      <FAQs/>
      <Contact/>
      <Footer/>
    </div>
  );
}
