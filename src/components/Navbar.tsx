import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { getContent } from '../data/translations';
import { DirectionalText } from './DirectionalText';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { language, setLanguage } = useLanguage();
  const content = getContent(language);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo(0, 0);
    navigate('/');
  };

  const handleNavClick = (href: string) => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      const sectionId = href.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: content.nav.whyUs, href: '#why-us' },
    { label: content.nav.howToStart, href: '#how-to-start' },
    { label: content.nav.personalNote, href: '#personal-note' },
    { label: content.nav.contact, href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#202f5f]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="/"
            onClick={handleLogoClick}
            className="relative z-10"
          >
            <img 
              src="/images/purple-banner-logo.png"
              alt="Company Logo"
              className="h-16 w-auto"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <DirectionalText>
              <div className="flex items-center">
                {navItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <a
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className="text-[#cdcbbb] hover:text-[#84849b] transition-colors text-lg px-4"
                    >
                      {item.label}
                    </a>
                    {index < navItems.length - 1 && (
                      <span className="text-[#cdcbbb]/20">|</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </DirectionalText>

            {/* Consultation Button and Language Switcher */}
            <div className="flex items-center gap-4">
              <a
                href="https://calendly.com/contact-xponential-ai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#84849b] text-[#f9f8ed] px-6 py-2 rounded-lg font-semibold hover:bg-[#202f5f] transition-colors"
              >
                {content.nav.consultationButton}
              </a>
              <button
                onClick={() => setLanguage(language === 'en' ? 'he' : 'en')}
                className="px-3 py-1 rounded border border-[#84849b] text-[#cdcbbb] hover:bg-[#84849b] hover:text-[#f9f8ed] transition-colors"
              >
                {language === 'en' ? 'עברית' : 'English'}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#f9f8ed]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <DirectionalText>
            <div className="md:hidden absolute top-20 right-0 left-0 bg-[#202f5f] border-t border-[#84849b]/20 p-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-[#cdcbbb] hover:text-[#84849b] transition-colors text-lg"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="https://calendly.com/contact-xponential-ai/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#84849b] text-[#f9f8ed] px-6 py-3 rounded-lg font-semibold hover:bg-[#202f5f] transition-colors text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {content.nav.consultationButton}
                </a>
                <button
                  onClick={() => {
                    setLanguage(language === 'en' ? 'he' : 'en');
                    setIsMenuOpen(false);
                  }}
                  className="px-3 py-1 rounded border border-[#84849b] text-[#cdcbbb] hover:bg-[#84849b] hover:text-[#f9f8ed] transition-colors text-center"
                >
                  {language === 'en' ? 'עברית' : 'English'}
                </button>
              </div>
            </div>
          </DirectionalText>
        )}
      </div>
    </nav>
  );
}