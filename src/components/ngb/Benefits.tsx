import React from 'react';
import { Target, Clock, Eye, BarChart } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { DirectionalText } from '../DirectionalText';

const benefits = [
  {
    icon: Target,
    title: "פתרונות מותאמים אישית",
    description: "כל פתרון מותאם במדויק לצרכים הייחודיים של העסק שלך"
  },
  {
    icon: Clock,
    title: "התקדמות מדורגת בקצב שלך",
    description: "תהליך מובנה המאפשר התקדמות הדרגתית ובטוחה"
  },
  {
    icon: Eye,
    title: "שקיפות מלאה בכל שלב",
    description: "תקשורת ברורה ושקיפות מלאה לאורך כל הדרך"
  },
  {
    icon: BarChart,
    title: "מדידה ברורה של התוצאות",
    description: "הגדרת מדדי הצלחה ומעקב מתמיד אחר התוצאות"
  }
];

export default function Benefits() {
  const { language } = useLanguage();
  const textAlign = language === 'he' ? 'text-right' : 'text-left';
  const isRTL = language === 'he';

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <DirectionalText className={textAlign}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#202f5f] mb-12 text-center">
              יתרונות התהליך
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div 
                    key={index}
                    className="bg-[#f9f8ed] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className={`flex items-start ${isRTL ? 'flex-row-reverse' : 'flex-row'} gap-4`}>
                      <div className="bg-[#202f5f]/10 p-3 rounded-full shrink-0">
                        <Icon className="h-6 w-6 text-[#202f5f]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#202f5f] mb-2">
                          {benefit.title}
                        </h3>
                        <p className="text-[#84849b]">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </DirectionalText>
      </div>
    </section>
  );
} 