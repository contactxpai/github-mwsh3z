import React from 'react';
import { Calendar } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { DirectionalText } from '../DirectionalText';

export default function CTASection() {
  const { language } = useLanguage();
  const textAlign = language === 'he' ? 'text-right' : 'text-left';

  return (
    <section className="py-24 bg-[#202f5f]">
      <div className="container mx-auto px-6">
        <DirectionalText className={textAlign}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f9f8ed] mb-6">
              מוכנים להתחיל את המסע?
            </h2>
            <p className="text-xl text-[#cdcbbb] mb-12 max-w-2xl mx-auto">
              בואו נפגש לשיחת היכרות קצרה, נבין את האתגרים שלכם ונראה איך אנחנו יכולים לעזור
            </p>
            
            <a 
              href="https://calendly.com/contact-xponential-ai/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#84849b] text-[#f9f8ed] px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-[#f9f8ed] hover:text-[#202f5f] group"
            >
              <Calendar className="w-6 h-6 transition-transform group-hover:scale-110" />
              קביעת פגישת היכרות
            </a>
            
            <p className="mt-6 text-[#cdcbbb] text-sm">
              * פגישת ההיכרות היא ללא עלות וללא התחייבות
            </p>
          </div>
        </DirectionalText>
      </div>
    </section>
  );
} 