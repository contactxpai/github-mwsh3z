import React from 'react';
import { Mail, Phone, Linkedin, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#202f5f] text-[#f9f8ed] py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Xponential AI</h3>
            <p className="text-[#cdcbbb] leading-relaxed">
              מובילים את המהפכה הטכנולוגית הבאה בעולם העסקי
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">יצירת קשר</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#84849b]" />
                <span className="text-[#cdcbbb]">contact@xponential-ai.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#84849b]" />
                <span className="text-[#cdcbbb]">054-445-1186</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">קישורים מהירים</h3>
            <ul className="space-y-3">
              <li>
                <a href="#why-us" className="text-[#cdcbbb] hover:text-[#84849b] transition-colors">
                  למה אנחנו
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#cdcbbb] hover:text-[#84849b] transition-colors">
                  צור קשר
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">עקבו אחרינו</h3>
            <div className="flex gap-4">
              <a href="#" className="text-[#cdcbbb] hover:text-[#84849b] transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#cdcbbb] hover:text-[#84849b] transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-[#cdcbbb] hover:text-[#84849b] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-[#84849b]/20 text-center text-[#cdcbbb]">
          <p>© {new Date().getFullYear()} Xponential AI. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}