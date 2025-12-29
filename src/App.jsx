import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AOS from 'aos';
import 'aos/dist/aos.css'; 

import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';

import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import NotFound from './pages/NotFound';
import ScrollProgress from './components/ScrollProgress';

function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <Router basename="/site-led-informatica">
      
      <ScrollProgress />
      <ScrollToTop />
      
      <div className="flex flex-col min-h-screen relative overflow-x-hidden"> 
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servico/:id" element={<ServiceDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <WhatsAppButton />
        <BackToTop />
        <Footer />
      </div>
    </Router>
  )
}

export default App;