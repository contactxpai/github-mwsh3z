import React from 'react';
import { Calendar, Lightbulb, Rocket } from 'lucide-react';

const steps = [
  {
    title: 'קבעו פגישה אישית',
    description: 'נשמח להיפגש ולשמוע על האתגרים והשאיפות שלכם. ללא התחייבות, רק שיחה פתוחה וכנה.',
    icon: Calendar
  },
  {
    title: 'מקבלים תוכנית פעולה',
    description: 'לאחר הבנת הצרכים שלכם, נבנה יחד תוכנית מותאמת אישית שתביא אתכם לשלב הבא.',
    icon: Lightbulb
  },
  {
    title: 'יוצאים לדרך וממריאים',
    description: 'אנחנו מלווים אתכם בכל שלב, עד שתראו את התוצאות בשטח. ההצלחה שלכם היא ההצלחה שלנו.',
    icon: Rocket
  }
];

export default function HowToStart() {
  return (
    <section className="py-24 bg-white" id="how-to-start">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#202f5f] mb-16">
          איך מתחילים?
        </h2>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative group bg-[#f9f8ed] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Number indicator */}
                <div className="absolute -top-4 right-8 w-8 h-8 bg-[#202f5f] rounded-full flex items-center justify-center text-[#f9f8ed] font-bold">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="mb-6">
                  <step.icon className="w-12 h-12 text-[#202f5f] group-hover:scale-110 transition-transform" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-[#202f5f] mb-4">
                  {step.title}
                </h3>
                <p className="text-[#84849b] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}