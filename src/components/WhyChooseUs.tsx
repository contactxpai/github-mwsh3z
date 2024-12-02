import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { getContent } from '../data/translations';
import { DirectionalText } from './DirectionalText';

export default function WhyChooseUs() {
  const { language } = useLanguage();
  const content = getContent(language);
  const textAlign = language === 'he' ? 'text-right' : 'text-left';
  const numberPosition = language === 'he' ? 'right-4' : 'left-4';

  // Get stages and order them based on language
  const stages = [...content.whyChooseUs.stages.items];
  if (language === 'en') {
    stages.reverse();
  }

  return (
    <section className="py-24 bg-[#f9f8ed]" id="why-us">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#202f5f] mb-16">
          {content.whyChooseUs.title}
        </h2>

        {/* Experience Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <DirectionalText className={textAlign}>
              <div className="space-y-6">
                {content.whyChooseUs.experience.points.map((point, index) => (
                  <p key={index} className="text-xl text-[#202f5f]">
                    <strong>{point.title}</strong> {point.content}
                  </p>
                ))}
              </div>
            </DirectionalText>
          </div>
        </div>

        {/* Stages Section */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-[#202f5f] mb-12">
            {content.whyChooseUs.stages.title}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stages.map((stage, index) => (
              <div key={stage.number} className="relative">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`absolute -top-4 ${numberPosition} w-8 h-8 bg-[#202f5f] rounded-full flex items-center justify-center text-[#f9f8ed] font-bold`}>
                    {stage.number}
                  </div>
                  <DirectionalText className={textAlign}>
                    <h4 className="text-xl font-bold text-[#202f5f] mb-4 mt-2">
                      {stage.title}
                    </h4>
                    <div className="space-y-4">
                      {stage.points.map((point, pointIndex) => (
                        <p key={pointIndex} className="text-[#84849b] leading-relaxed">
                          {point.split(':').map((part, partIndex, array) => (
                            <React.Fragment key={partIndex}>
                              {partIndex === 0 && array.length > 1 ? (
                                <strong>{part}:</strong>
                              ) : (
                                part
                              )}
                            </React.Fragment>
                          ))}
                        </p>
                      ))}
                    </div>
                  </DirectionalText>
                </div>
              </div>
            ))}
          </div>

          {/* Success Stories */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            {content.whyChooseUs.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <DirectionalText className={textAlign}>
                  <blockquote className="text-lg text-[#84849b]">
                    {testimonial.quote}
                  </blockquote>
                  <cite className="block mt-4 text-[#202f5f] font-medium">
                    {testimonial.author}
                  </cite>
                </DirectionalText>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}