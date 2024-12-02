import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getContent } from '../data/translations';
import { DirectionalText } from './DirectionalText';

export default function Hero() {
  const { language } = useLanguage();
  const content = getContent(language);

  const Arrow = language === 'he' ? ArrowLeft : ArrowRight;
  const arrowTransform = language === 'he' ? '-translate-x-1' : 'translate-x-1';
  const textAlign = language === 'he' ? 'text-right' : 'text-left';

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-bl from-[#202f5f] to-[#84849b] opacity-90" />
      
      {/* Background image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: 'cover'
        }}
      />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAzMGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptLTE4IDBjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6IiBzdHJva2U9IiNjZGNiYmIiIHN0cm9rZS1vcGFjaXR5PSIuNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]" />
      
      {/* Content */}
      <div className="container mx-auto px-6 py-24 relative z-10">
        <DirectionalText className={`max-w-4xl mx-auto ${textAlign}`}>
          <div className="text-center mb-12">
            <img 
              src="/images/square-logo.png"
              alt="Company Logo"
              className="w-32 h-32 mx-auto animate-float"
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-[#f9f8ed] mb-6 tracking-tight">
            {content.hero.title}
          </h1>
          <p className="text-xl md:text-2xl text-[#cdcbbb] mb-12">
            {content.hero.subtitle}
          </p>
          <div className={textAlign}>
            <a 
              href="https://calendly.com/contact-xponential-ai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#84849b] text-[#f9f8ed] px-6 py-2 rounded-lg font-semibold text-lg transition-all hover:bg-[#202f5f] inline-flex items-center gap-2"
            >
              {content.nav.consultationButton}
              <Arrow className={`w-5 h-5 transition-transform group-hover:${arrowTransform}`} />
            </a>
          </div>
        </DirectionalText>
      </div>
    </div>
  );
}