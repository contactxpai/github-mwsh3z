import React from 'react';
import { Clock, Star, Sparkles } from 'lucide-react';

export default function PersonalNote() {
  return (
    <section className="py-24 bg-[#f9f8ed] relative overflow-hidden" id="personal-note">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAzMGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptLTE4IDBjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6IiBzdHJva2U9IiMyMDJmNWYiIHN0cm9rZS1vcGFjaXR5PSIuNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-[#202f5f] mb-12">
            הערה אישית
          </h2>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl relative">
            {/* Decorative Icons */}
            <Clock className="absolute top-6 right-6 w-8 h-8 text-[#202f5f]/10" />
            <Star className="absolute top-6 left-6 w-8 h-8 text-[#202f5f]/10" />
            <Sparkles className="absolute bottom-6 right-6 w-8 h-8 text-[#202f5f]/10" />
            
            <div className="space-y-6 text-lg text-[#84849b] leading-relaxed">
              <p>
                הזמן שלך יקר, והעסק שלך ראוי לטוב ביותר. עם הניסיון העסקי והטכני העשיר שלנו, אנחנו כאן כדי להוביל אתכם לעבר הצלחה אמיתית.
              </p>
              
              <p>
                העתיד מתחיל עכשיו, ואנחנו כאן כדי לוודא שאתם חלק ממנו.
              </p>
              
              <p className="font-medium text-[#202f5f]">
                זכרו: הבינה המלאכותית היא לא העתיד – היא ההווה. וההווה הזה מלא באפשרויות מדהימות שמחכות רק לכם.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}