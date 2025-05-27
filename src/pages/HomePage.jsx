import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedProducts from '../components/home/FeaturedProducts';
import AboutSection from '../components/AboutSection';

function HomePage() {
  return (
    <div>
      <Hero />
      <FeaturedProducts />
      <AboutSection/>
    </div>
  );
}

export default HomePage;