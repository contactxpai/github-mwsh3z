import { Routes, Route } from 'react-router-dom';
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
import PrivacyPolicyHebrew from './pages/PrivacyPolicyHebrew';

function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Imagine />
      <Quote />
      <WhyChooseUs />
      <HowToStart />
      <PersonalNote />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacy-policy-hebrew" element={<PrivacyPolicyHebrew />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;