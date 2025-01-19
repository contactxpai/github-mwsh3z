import React from 'react';
import { Calendar, Lightbulb, Rocket } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getContent } from '../data/translations';
import { DirectionalText } from './DirectionalText';

const icons = [Calendar, Lightbulb, Rocket];

export default function HowToStart() {
  const { language } = useLanguage();
  const content = getContent(language);
  const textAlign = language === 'he' ? 'text-right' : 'text-left';
  const numberPosition = language === 'he' ? 'right-8' : 'left-8';

  const steps = content.howToStart.steps;

  return (
    <section className="py-24 bg-white" id="how-to-start">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#202f5f] mb-16">
          {content.howToStart.title}
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 ${language === 'en' ? 'md:flex md:flex-row-reverse' : ''}`}>
            {steps.map((step, index) => {
              const Icon = icons[index];
              
              return (
                <div 
                  key={index}
                  className="relative group bg-[#f9f8ed] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {/* Number indicator */}
                  <div className={`absolute -top-4 ${numberPosition} w-8 h-8 bg-[#202f5f] rounded-full flex items-center justify-center text-[#f9f8ed] font-bold`}>
                    {index + 1}
                  </div>
                  
                  <DirectionalText className={textAlign}>
                    {/* Header with Icon and Title */}
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-[#202f5f]">
                        {step.title}
                      </h3>
                      <Icon className="w-12 h-12 text-[#202f5f] group-hover:scale-110 transition-transform ml-4" />
                    </div>
                    
                    {/* Description */}
                    <p className="text-[#84849b] leading-relaxed">
                      {step.description}
                    </p>
                  </DirectionalText>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}