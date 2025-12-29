import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import About from '../components/About';
import Downloads from '../components/Downloads';
import Clients from '../components/Clients';
import Partners from '../components/Partners';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';


const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Downloads />
      <Clients />
      <Partners />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;