import React from 'react';
import { Search, PenTool, Laptop, BarChart } from 'lucide-react';

const steps = [
  {
    title: 'גילוי וניתוח',
    description: 'הבנת הצרכים וההזדמנויות שלך',
    icon: Search
  },
  {
    title: 'תכנון אסטרטגי',
    description: 'פיתוח מפת דרכים ל-AI',
    icon: PenTool
  },
  {
    title: 'יישום',
    description: 'הפיכת פתרונות למציאות',
    icon: Laptop
  },
  {
    title: 'אופטימיזציה',
    description: 'שיפור מתמיד',
    icon: BarChart
  }
];

export default function Timeline() {
  return (
    <section className="py-24 bg-[#cdcbbb]/30" id="approach">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#202f5f] mb-16">הגישה שלנו</h2>
        <div className="relative">
          <div className="absolute top-1/2 right-0 left-0 h-0.5 bg-[#84849b]/20" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute -top-6 right-1/2 translate-x-1/2 w-12 h-12 bg-[#202f5f] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <step.icon className="w-6 h-6 text-[#f9f8ed]" />
                  </div>
                  <div className="pt-8 text-center">
                    <h3 className="text-xl font-semibold text-[#202f5f] mb-2">{step.title}</h3>
                    <p className="text-[#84849b]">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}