import React from 'react';
import { ArrowLeft } from 'lucide-react';
// import SplineViewer from './SplineViewer';

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-bl from-[#202f5f] to-[#84849b] opacity-90" />
      
      {/* Background image */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
          backgroundSize: 'cover'
        }}
      />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptMCAzMGMzLjMxNCAwIDYtMi42ODYgNi02cy0yLjY4Ni02LTYtNi02IDIuNjg2LTYgNiAyLjY4NiA2IDYgNnptLTE4IDBjMy4zMTQgMCA2LTIuNjg2IDYtNnMtMi42ODYtNi02LTYtNiAyLjY4Ni02IDYgMi42ODYgNiA2IDZ6IiBzdHJva2U9IiNjZGNiYmIiIHN0cm9rZS1vcGFjaXR5PSIuNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')]" />
      
      {/* Content */}
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Spline viewer temporarily disabled */}
          {/* <SplineViewer /> */}
          
          {/* Logo */}
          <img 
            src="/images/square-logo.png"
            alt="Company Logo"
            className="w-32 h-32 mx-auto mb-12 animate-float"
          />
          
          <h1 className="text-5xl md:text-7xl font-bold text-[#f9f8ed] mb-6 tracking-tight">
            הזמן שלך יקר מדי כדי לבזבז אותו על שגרה
          </h1>
          <p className="text-xl md:text-2xl text-[#cdcbbb] mb-12">
            מוכנים לצייד את העסק שלכם ב"Super Powers" של בינה מלאכותית?
          </p>
          <a 
            href="https://calendly.com/contact-xponential-ai/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#84849b] text-[#f9f8ed] px-6 py-2 rounded-lg font-semibold text-lg transition-all hover:bg-[#202f5f] inline-flex items-center gap-2 mx-auto"
          >
            לפגישת ייעוץ ללא עלות
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
          </a>
        </div>
      </div>
    </div>
  );
}