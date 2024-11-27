import React from 'react';
import { Target, Building2, Rocket } from 'lucide-react';

export default function Imagine() {
  const points = [
    {
      text: 'אתם מתמקדים במה שחשוב באמת, בזמן שהמשימות השגרתיות מטופלות אוטומטית',
      icon: Target
    },
    {
      text: 'העסק שלכם מתנהל כמו ארגון גדול, בלי להגדיל את הצוות או התקציב',
      icon: Building2
    },
    {
      text: 'אתם מקדימים את המתחרים, בעזרת טכנולוגיה חדשנית שמביאה אתכם לחזית',
      icon: Rocket
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#202f5f] mb-12 text-center">
            דמיינו את זה:
          </h2>
          <div className="space-y-8">
            {points.map((point, index) => (
              <div 
                key={index}
                className="flex items-start gap-6 p-6 rounded-lg bg-[#f9f8ed] shadow-sm hover:shadow-md transition-shadow"
              >
                <point.icon className="w-8 h-8 text-[#202f5f] shrink-0" />
                <span className="text-xl text-[#202f5f] leading-relaxed">{point.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}