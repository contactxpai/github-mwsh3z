import { useEffect, useState } from 'react';

export default function PrivacyPolicyHebrew() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch('/privacy-policy-hebrew.md')
      .then(response => response.text())
      .then(text => {
        const cleanText = text
          .replace(/^# (.*$)/gm, '<h1>$1</h1>')
          .replace(/^## (.*$)/gm, '<h2>$1</h2>')
          .replace(/^### (.*$)/gm, '<h3>$1</h3>')
          .replace(/^\- (.*$)/gm, '• $1')
          .replace(/\*\*(.*?)\*\*/g, '<b>$1</b>')
          .replace(/\n\n+/g, '\n\n');
        setContent(cleanText);
      })
      .catch(error => console.error('Error loading privacy policy:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9f8ed] to-white font-sans">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24" dir="rtl">
        <div className="space-y-8">
          {content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('<h1>')) {
              const text = paragraph.replace(/<\/?h1>/g, '');
              return (
                <h1 key={index} className="text-4xl md:text-5xl font-bold text-[#202f5f] mb-12">
                  {text}
                </h1>
              );
            }
            
            if (paragraph.startsWith('<h2>')) {
              const text = paragraph.replace(/<\/?h2>/g, '');
              return (
                <h2 key={index} className="text-2xl md:text-3xl font-bold text-[#202f5f] mt-12 mb-6">
                  {text}
                </h2>
              );
            }

            if (paragraph.startsWith('<h3>')) {
              const text = paragraph.replace(/<\/?h3>/g, '');
              return (
                <h3 key={index} className="text-xl md:text-2xl font-bold text-[#202f5f] mt-8 mb-4">
                  {text}
                </h3>
              );
            }
            
            if (paragraph.startsWith('•')) {
              return (
                <p key={index} className="mr-6 text-lg text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              );
            }

            return (
              <p 
                key={index} 
                className="text-lg text-gray-600 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: paragraph }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
} 