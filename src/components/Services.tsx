import React from 'react';
import { Brain, Cog, Lightbulb, Settings } from 'lucide-react';

const services = [
  {
    title: 'ייעוץ אסטרטגי והדרכה',
    description: 'הדרכה מקצועית לשילוב בינה מלאכותית באסטרטגיה העסקית שלך',
    icon: Brain
  },
  {
    title: 'פיתוח פתרונות AI',
    description: 'מודלים ואפליקציות AI מותאמים אישית לצרכים העסקיים שלך',
    icon: Cog
  },
  {
    title: 'אוטומציה חכמה',
    description: 'ייעול תהליכים עם אוטומציה חכמה מבוססת למידת מכונה',
    icon: Settings
  },
  {
    title: 'פתרונות AI מותאמים',
    description: 'פתרונות AI מותאמים אישית לאתגרים העסקיים הייחודיים שלך',
    icon: Lightbulb
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-[#f9f8ed]" id="services">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#202f5f] mb-16">השירותים שלנו</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-white border border-[#cdcbbb] shadow-lg shadow-[#cdcbbb]/20 hover:shadow-xl hover:shadow-[#84849b]/10 transition-all duration-300"
            >
              <service.icon className="w-12 h-12 text-[#202f5f] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-[#202f5f] mb-4">{service.title}</h3>
              <p className="text-[#84849b]">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}