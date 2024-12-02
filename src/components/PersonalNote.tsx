import React from 'react';
import { Clock, Star, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getContent } from '../data/translations';
import { DirectionalText } from './DirectionalText';

export default function PersonalNote() {
  const { language } = useLanguage();
  const content = getContent(language);
  const textAlign = language === 'he' ? 'text-right' : 'text-left';

  return (
    <section className="py-24 bg-[#f9f8ed] relative overflow-hidden" id="personal-note">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAzMGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptLTE4IDBjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6IiBzdHJva2U9IiMyMDJmNWYiIHN0cm9rZS1vcGFjaXR5PSIuNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#202f5f] mb-12">
            {content.personalNote.title}
          </h2>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl relative">
            {/* Decorative Icons */}
            <Clock className="absolute top-6 right-6 w-8 h-8 text-[#202f5f]/10" />
            <Star className="absolute top-6 left-6 w-8 h-8 text-[#202f5f]/10" />
            <Sparkles className="absolute bottom-6 left-1/2 -translate-x-1/2 w-8 h-8 text-[#202f5f]/10" />

            <DirectionalText className={textAlign}>
              <div className="space-y-6">
                {content.personalNote.content.map((paragraph, index) => (
                  <p key={index} className={`text-lg leading-relaxed ${
                    index === content.personalNote.content.length - 1 
                      ? 'font-medium text-[#202f5f]' 
                      : 'text-[#84849b]'
                  }`}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </DirectionalText>
          </div>
        </div>
      </div>
    </section>
  );
}