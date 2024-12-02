import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import Imagine from '../components/Imagine';
import Quote from '../components/Quote';
import WhyChooseUs from '../components/WhyChooseUs';
import HowToStart from '../components/HowToStart';
import PersonalNote from '../components/PersonalNote';
import Contact from '../components/Contact';

export default function HomePage() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
          // Clear the state after scrolling
          navigate('/', { replace: true });
        }, 100);
      }
    }
  }, [location, navigate]);

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