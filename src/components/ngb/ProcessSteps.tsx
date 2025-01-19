import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { DirectionalText } from '../DirectionalText';
import { getContent } from '../../data/translations';

interface ProcessStepProps {
  number: number;
  title: string;
  bullets: string[];
  notes?: string[];
}

const ProcessStep = ({ number, title, bullets, notes }: ProcessStepProps) => {
  const { language } = useLanguage();
  const textAlign = language === 'he' ? 'text-right' : 'text-left';
  const isRTL = language === 'he';

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
      <DirectionalText className={textAlign}>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-[#202f5f] mb-4">{title}</h3>
          <ul className="space-y-3 mb-4">
            {bullets.map((bullet, index) => (
              <li key={index} className="relative pr-4">
                <span className="absolute right-0 top-2 w-1.5 h-1.5 bg-[#202f5f] rounded-full" />
                <span className="text-[#84849b]">{bullet}</span>
              </li>
            ))}
          </ul>
          {notes && (
            <div className="text-sm text-[#84849b] space-y-1 mt-4 border-t border-[#84849b]/20 pt-4">
              {notes.map((note, index) => (
                <p key={index}>{note}</p>
              ))}
            </div>
          )}
        </div>
      </DirectionalText>
    </div>
  );
};

export default function ProcessSteps() {
  const { language } = useLanguage();
  const content = getContent(language);
  const items = content.whyChooseUs.stages.items;

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#202f5f] mb-16">
          <DirectionalText>{content.whyChooseUs.stages.title}</DirectionalText>
        </h2>
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 flex flex-col ${language === 'en' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
          {items.map((step, index) => (
            <ProcessStep
              key={index}
              number={index + 1}
              title={step.title}
              bullets={[...step.points]}
              notes={[]}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 