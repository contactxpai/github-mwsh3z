import React from 'react';

const stages = [
  {
    number: '1',
    title: 'זחילה',
    points: [
      <span key="1"><strong>הרצאות טעימה וסדנאות מעשיות:</strong> הכרות מרתקת עם עולם הבינה המלאכותית, שתפתח לכם את העיניים לאפשרויות אינסופיות</span>,
      <span key="2"><strong>שיעורים פרטיים למנהלים ולעובדים:</strong> למידה מותאמת אישית שתאפשר לכם להבין לעומק איך AI יכול לשרת את העסק שלכם</span>
    ]
  },
  {
    number: '2',
    title: 'הליכה',
    points: [
      <span key="1"><strong>פיתוח ובנייה של סוכנים חכמים:</strong> אוטומציה של משימות שגרתיות, כך שתוכלו להתמקד בצמיחה ובחדשנות</span>
    ]
  },
  {
    number: '3',
    title: 'ריצה',
    points: [
      <span key="1"><strong>הטמעת פתרונות AI מתקדמים:</strong> שדרוג המערכות הקיימות שלכם לטכנולוגיות המובילות בעולם, להגברת היעילות והביצועים</span>
    ]
  },
  {
    number: '4',
    title: 'תעופה',
    points: [
      <span key="1"><strong>ייעוץ אסטרטגי מקיף:</strong> בניית תוכנית AI מותאמת אישית שתיקח את העסק שלכם לשחקים חדשים</span>
    ]
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#f9f8ed]" id="why-us">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#202f5f] mb-16">
          למה לבחור ב-Xponential AI?
        </h2>

        {/* Experience Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="space-y-6">
              <p className="text-xl text-[#202f5f]">
                <strong>ניסיון עסקי עשיר וארוך שנים:</strong> אנחנו לא רק מומחים בטכנולוגיה, אלא גם מבינים לעומק את העולם העסקי ואת האתגרים שאתם מתמודדים איתם ביום-יום
              </p>
              <p className="text-xl text-[#202f5f]">
                <strong>ידע טכני משמעותי:</strong> עם ניסיון רב בניהול פרויקטים גדולים וקטנים, בניית אוטומציות ובינה מלאכותית, אנחנו מביאים לכם את הפתרונות המתקדמים ביותר שמותאמים במיוחד עבורכם
              </p>
            </div>
          </div>
        </div>

        {/* Stages Section */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-[#202f5f] mb-12">
            מודל הזחילה, ההליכה, הריצה והתעופה שלנו
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stages.map((stage, index) => (
              <div key={index} className="relative">
                {/* Stage Card */}
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="absolute -top-4 right-4 w-8 h-8 bg-[#202f5f] rounded-full flex items-center justify-center text-[#f9f8ed] font-bold">
                    {stage.number}
                  </div>
                  <h4 className="text-xl font-bold text-[#202f5f] mb-4 mt-2">
                    {stage.title}
                  </h4>
                  <div className="space-y-4">
                    {stage.points.map((point, pointIndex) => (
                      <p key={pointIndex} className="text-[#84849b] leading-relaxed">
                        {point}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Success Stories */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <blockquote className="text-lg text-[#84849b]">
                "בזכות Xponential AI הצלחנו לחסוך 30% מהזמן על משימות שגרתיות ולהגדיל את ההכנסות ב-20%!"
              </blockquote>
              <cite className="block mt-4 text-[#202f5f] font-medium">
                – דני, בעלים של חברת ייעוץ
              </cite>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <blockquote className="text-lg text-[#84849b]">
                "הצוות שלנו הפך ליעיל יותר, והלקוחות מרוצים מתמיד. זה בדיוק מה שהיינו צריכים."
              </blockquote>
              <cite className="block mt-4 text-[#202f5f] font-medium">
                – שרית, מנהלת תפעול בחברת סטארט-אפ
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}