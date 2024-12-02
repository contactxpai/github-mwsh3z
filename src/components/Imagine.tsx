import React from 'react';
import { Target, Building2, Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getContent } from '../data/translations';
import { DirectionalText } from './DirectionalText';

const icons = [
  {
    text: 0,
    icon: Target
  },
  {
    text: 1,
    icon: Building2
  },
  {
    text: 2,
    icon: Rocket
  }
] as const;

export default function Imagine() {
  const { language } = useLanguage();
  const content = getContent(language);
  const textAlign = language === 'he' ? 'text-right' : 'text-left';

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <DirectionalText className={textAlign}>
            <h2 className="text-4xl font-bold text-[#202f5f] mb-12 text-center">
              {content.imagine.title}
            </h2>
            <div className="space-y-8">
              {icons.map((point, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-6 p-6 rounded-lg bg-[#f9f8ed] shadow-sm hover:shadow-md transition-shadow"
                  dir={language === 'he' ? 'rtl' : 'ltr'}
                >
                  <point.icon className="w-8 h-8 text-[#202f5f] shrink-0" />
                  <span className="text-xl text-[#202f5f] leading-relaxed">
                    {content.imagine.points[point.text]}
                  </span>
                </div>
              ))}
            </div>
          </DirectionalText>
        </div>
      </div>
    </section>
  );
}