'use client'

import React, { useEffect, useRef } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const carouselItems = [
  {
    id: 1,
    image: '/images/banner-img.jpg',
    heading: 'LUXURY FURNITURE',
    btn1Text: 'GO TO SHOP',
    btn2Text: 'EXPLORE'
  },
  {
    id: 2,
    image: '/images/banner-img-2.jpg',
    heading: 'MODERN DESIGNS',
    btn1Text: 'SHOP NOW',
    btn2Text: 'VIEW COLLECTION'
  },
  {
    id: 3,
    image: '/images/banner-img-3.jpg',
    heading: 'PREMIUM QUALITY',
    btn1Text: 'BROWSE ITEMS',
    btn2Text: 'LEARN MORE'
  },
  {
    id: 4,
    image: '/images/banner-img-4.jpg',
    heading: 'ELEGANT STYLES',
    btn1Text: 'DISCOVER',
    btn2Text: 'GET INSPIRED'
  }
];

export default function HeroHeader() {
  const sliderRef = useRef(null);
  const textRefs = useRef([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    fade: true,
    cssEase: 'linear',
    beforeChange: (current, next) => {
      // Start typewriter effect when slide changes
      startTypewriter(next);
    }
  };

  const startTypewriter = (slideIndex) => {
    const textEl = textRefs.current[slideIndex];
    if (!textEl) return;

    const originalText = carouselItems[slideIndex].heading;
    let idx = 1;
    const speed = 150; // Adjust typing speed here

    // Clear any existing timeout
    if (textEl.timeoutId) {
      clearTimeout(textEl.timeoutId);
    }

    const writeText = () => {
      textEl.innerText = originalText.slice(0, idx);
      idx++;

      if (idx <= originalText.length) {
        textEl.timeoutId = setTimeout(writeText, speed);
      }
    };

    // Reset text before starting
    textEl.innerText = '';
    writeText();
  };

  useEffect(() => {
    // Initialize typewriter effect for the first slide
    startTypewriter(0);

    return () => {
      // Clean up timeouts when component unmounts
      textRefs.current.forEach(el => {
        if (el && el.timeoutId) {
          clearTimeout(el.timeoutId);
        }
      });
    };
  }, []);

  return (
    <section className="landing" id='home'>
      <div className="landing-bg"></div>
      <Slider ref={sliderRef} {...settings} className="banner-slider">
        {carouselItems.map((item, index) => (
          <div key={item.id} className="banner-slide">
            <div className="banner">
              <img src={item.image} className="banner-img" alt="Luxury Furniture Banner" />
              <h1 
                ref={el => textRefs.current[index] = el}
                className="banner-heading"
              ></h1>
              <button className="banner-btn banner-btn-1">{item.btn1Text}</button>
              <button className="banner-btn banner-btn-2">{item.btn2Text}</button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}