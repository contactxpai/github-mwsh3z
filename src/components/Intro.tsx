import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getContent } from '../data/translations';
import { DirectionalText } from './DirectionalText';

export default function Intro() {
  const { language } = useLanguage();
  const content = getContent(language);
  const textAlign = language === 'he' ? 'text-right' : 'text-left';

  return (
    <section className="py-20 bg-[#f9f8ed]">
      <div className="container mx-auto px-6">
        <DirectionalText className={`max-w-4xl mx-auto ${textAlign}`}>
          <p className="text-2xl md:text-3xl text-[#202f5f] leading-relaxed font-medium">
            {content.intro.content.split('\n\n').map((paragraph, index) => (
              <React.Fragment key={index}>
                {paragraph}
                <br /><br />
              </React.Fragment>
            ))}
          </p>
        </DirectionalText>
      </div>
    </section>
  );
}