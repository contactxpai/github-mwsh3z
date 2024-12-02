import React, { useEffect, useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { DirectionalText } from '../components/DirectionalText';

export default function PrivacyPolicy() {
  const { language } = useLanguage();
  const [content, setContent] = useState('');

  useEffect(() => {
    // Load the appropriate markdown file based on language
    const filePath = language === 'he' 
      ? '/privacy-policy-hebrew.md'
      : '/privacy-policy-english.md';

    fetch(filePath)
      .then(response => response.text())
      .then(text => {
        // Convert markdown headers to HTML
        const formattedText = text
          .replace(/^# (.*$)/gm, '<h1>$1</h1>')
          .replace(/^## (.*$)/gm, '<h2>$1</h2>')
          .replace(/^### (.*$)/gm, '<h3>$1</h3>')
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        setContent(formattedText);
      });

    // Scroll to top when component mounts or language changes
    window.scrollTo(0, 0);
  }, [language]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9f8ed] to-white font-sans">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
        <DirectionalText>
          <div className="space-y-8">
            {content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('<h1>')) {
                return (
                  <h1 key={index} className="text-4xl font-bold text-[#202f5f] mb-12">
                    {paragraph.replace(/<\/?h1>/g, '')}
                  </h1>
                );
              }
              if (paragraph.startsWith('<h2>')) {
                return (
                  <h2 key={index} className="text-2xl font-bold text-[#202f5f] mt-12 mb-4">
                    {paragraph.replace(/<\/?h2>/g, '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('<h3>')) {
                return (
                  <h3 key={index} className="text-xl font-bold text-[#202f5f] mt-8 mb-3">
                    {paragraph.replace(/<\/?h3>/g, '')}
                  </h3>
                );
              }
              return (
                <p 
                  key={index} 
                  className="text-lg text-[#84849b] leading-relaxed"
                  dangerouslySetInnerHTML={{ 
                    __html: paragraph.replace(
                      /<strong>(.*?)<\/strong>/g, 
                      '<span class="font-bold text-[#202f5f]">$1</span>'
                    )
                  }}
                />
              );
            })}
          </div>
        </DirectionalText>
      </div>
    </div>
  );
} 