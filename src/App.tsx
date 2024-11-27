import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Imagine from './components/Imagine';
import Quote from './components/Quote';
import WhyChooseUs from './components/WhyChooseUs';
import HowToStart from './components/HowToStart';
import PersonalNote from './components/PersonalNote';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Intro />
      <Imagine />
      <Quote />
      <WhyChooseUs />
      <HowToStart />
      <PersonalNote />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;