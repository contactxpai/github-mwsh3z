import React from 'react';
import { Sparkles, FlaskConical, Microscope, Rocket } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { DirectionalText } from '../DirectionalText';

const steps = [
  {
    icon: Sparkles,
    title: "ניצוץ ראשוני (פגישת היכרות)",
    bullets: [
      "היכרות ראשונית עם העסק ואתגריו המרכזיים",
      "הצגת תהליך העבודה ותוצריו",
      "דיון, שאלות, ויציאה לדרך"
    ],
    notes: ["משך: 45-60 דקות, ללא עלות וללא התחייבות"]
  },
  {
    icon: FlaskConical,
    title: "תהליך זיקוק",
    bullets: [
      "זיהוי אתגרים וצרכים בעסק",
      "מיפוי תהליכי עבודה קיימים",
      "זיהוי הזדמנויות לחיסכון וייעול",
      "בחינת פתרונות טכנולוגיים אפשריים",
      "תוצר: הצעת מחיר מודולרית ראשונית לכלל הפתרונות"
    ],
    notes: [
      "משך: שעה עד שלוש שעות",
      "עלות: 2,500 ₪ + מע״מ"
    ]
  },
  {
    icon: Microscope,
    title: "אפיון טכנולוגי מעמיק",
    bullets: [
      "ניתוח מעמיק של תהליכי העסק",
      "מיפוי טכני של כל המערכות הקיימות",
      "אפיון מפורט של הפתרונות הנדרשים",
      "הגדרת מדדי הצלחה לכל רכיב",
      "תכנית עבודה מפורטת עם סדרי עדיפויות",
      "תוצר: הצעת מחיר סופית ומפורטת לכל מודול"
    ],
    notes: ["עלות: 8,000 ₪ + מע״מ (יקוזז במקרה של התקדמות לשלב ההמראה)"]
  },
  {
    icon: Rocket,
    title: "המראה",
    bullets: [
      "יישום הדרגתי של הפתרונות",
      "הדרכה והטמעה מקיפה",
      "מעקב ומדידת תוצאות"
    ]
  }
];

interface ProcessStepProps {
  icon: React.ElementType;
  title: string;
  bullets: string[];
  notes?: string[];
}

const ProcessStep = ({ icon: Icon, title, bullets, notes }: ProcessStepProps) => {
  const { language } = useLanguage();
  const textAlign = language === 'he' ? 'text-right' : 'text-left';
  const isRTL = language === 'he';

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
      <DirectionalText className={textAlign}>
        <div className={`flex items-start ${isRTL ? 'flex-row-reverse' : 'flex-row'} gap-6`}>
          <div className="bg-[#202f5f]/10 p-3 rounded-full shrink-0">
            <Icon className="h-8 w-8 text-[#202f5f]" />
          </div>
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
        </div>
      </DirectionalText>
    </div>
  );
};

export default function ProcessSteps() {
  const { language } = useLanguage();
  const textAlign = language === 'he' ? 'text-right' : 'text-left';

  return (
    <section className="py-24 bg-[#f9f8ed]">
      <div className="container mx-auto px-6">
        <DirectionalText className={textAlign}>
          <div className="max-w-4xl mx-auto space-y-6">
            {steps.map((step, index) => (
              <ProcessStep key={index} {...step} />
            ))}
          </div>
        </DirectionalText>
      </div>
    </section>
  );
} 