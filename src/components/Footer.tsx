import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Facebook, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getContent } from '../data/translations';
import { DirectionalText } from './DirectionalText';

export default function Footer() {
  const { language } = useLanguage();
  const content = getContent(language);
  const textAlign = language === 'he' ? 'text-right' : 'text-left';

  const renderLink = (link: { text: string; href: string }) => {
    // If it's a hash link, use anchor tag
    if (link.href.startsWith('#')) {
      return (
        <a
          href={link.href}
          className="text-[#cdcbbb] hover:text-white transition-colors"
        >
          {link.text}
        </a>
      );
    }
    // Otherwise use Link for route navigation
    return (
      <Link
        to={link.href}
        className="text-[#cdcbbb] hover:text-white transition-colors"
      >
        {link.text}
      </Link>
    );
  };

  return (
    <footer className="bg-[#202f5f] text-[#f9f8ed] py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <DirectionalText>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {/* Company Info */}
              <div className={textAlign}>
                <h3 className="text-xl font-bold mb-4">
                  {content.footer.companyInfo.title}
                </h3>
                <p className="text-[#cdcbbb] leading-relaxed">
                  {content.footer.companyInfo.description}
                </p>
              </div>

              {/* Contact Info */}
              <div className={textAlign}>
                <h3 className="text-xl font-bold mb-4">
                  {content.footer.contactTitle}
                </h3>
                <div className="space-y-3 text-[#cdcbbb]">
                  <a 
                    href={`mailto:${content.contact.info.email}`}
                    className="block hover:text-white transition-colors"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      {content.contact.info.email}
                    </span>
                  </a>
                  <a 
                    href="https://wa.me/972544451186"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:text-white transition-colors"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      {content.contact.info.phone}
                    </span>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div className={textAlign}>
                <h3 className="text-xl font-bold mb-4">
                  {content.footer.quickLinks.title}
                </h3>
                <ul className="space-y-2">
                  {content.footer.quickLinks.links.map((link, index) => (
                    <li key={index}>
                      {renderLink(link)}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div className={textAlign}>
                <h3 className="text-xl font-bold mb-4">
                  {content.footer.socialTitle}
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/profile.php?id=61568440656453"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#cdcbbb] hover:text-white transition-colors"
                  >
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/xponential-ai-il/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#cdcbbb] hover:text-white transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className={`mt-16 pt-8 border-t border-[#84849b]/20 ${textAlign}`}>
              <p className="text-[#cdcbbb]">
                {content.footer.copyright}
              </p>
            </div>
          </DirectionalText>
        </div>
      </div>
    </footer>
  );
}