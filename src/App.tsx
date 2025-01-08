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
import PrivacyPolicy from './pages/PrivacyPolicy';
import NextGenBusiness from './pages/NextGenBusiness';

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

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Routes>
        <Route path="/" element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        } />
        <Route path="/privacy-policy-hebrew" element={<PrivacyPolicyHebrew />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/next-gen-business" element={<NextGenBusiness />} />
      </Routes>
    </div>
  );
}

export default App;
