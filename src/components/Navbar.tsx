import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'למה אנחנו', href: '#why-us' },
  { label: 'איך מתחילים', href: '#how-to-start' },
  { label: 'הערה אישית', href: '#personal-note' },
  { label: 'צור קשר', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#202f5f]/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="relative z-10">
            <img 
              src="/images/logo.png" 
              alt="Xponential AI" 
              className="h-12 w-auto"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center">
            {navItems.map((item, index) => (
              <React.Fragment key={index}>
                <a
                  href={item.href}
                  className="text-[#cdcbbb] hover:text-[#84849b] transition-colors text-lg px-4"
                >
                  {item.label}
                </a>
                {index < navItems.length - 1 && (
                  <span className="text-[#cdcbbb]/20">|</span>
                )}
              </React.Fragment>
            ))}
            <a
              href="#contact"
              className="bg-[#84849b] text-[#f9f8ed] px-6 py-2 rounded-lg font-semibold hover:bg-[#202f5f] transition-colors mr-4"
            >
              לפגישת ייעוץ ללא עלות
            </a>
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
          <div className="md:hidden absolute top-20 right-0 left-0 bg-[#202f5f] border-t border-[#84849b]/20 p-6">
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-[#cdcbbb] hover:text-[#84849b] transition-colors text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-[#84849b] text-[#f9f8ed] px-6 py-3 rounded-lg font-semibold hover:bg-[#202f5f] transition-colors text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                לפגישת ייעוץ ללא עלות
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}