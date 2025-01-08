import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { DirectionalText } from '../components/DirectionalText';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProcessSteps from '../components/ngb/ProcessSteps';
import Benefits from '../components/ngb/Benefits';
import CTASection from '../components/ngb/CTASection';

export default function NextGenBusiness() {
  const { language } = useLanguage();
  const textAlign = language === 'he' ? 'text-right' : 'text-left';
  const dir = language === 'he' ? 'rtl' : 'ltr';

  return (
    <div className="min-h-screen" dir={dir}>
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-b from-[#202f5f] to-[#84849b]">
          <div className="container mx-auto px-6">
            <DirectionalText className={textAlign}>
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-[#f9f8ed] mb-6 tracking-tight">
                  Next Gen Business
                </h1>
                <p className="text-xl md:text-2xl text-[#cdcbbb] mb-12">
                  העסק שלך, בקצב של המחר
                </p>
                <a 
                  href="https://calendly.com/contact-xponential-ai/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#f9f8ed] text-[#202f5f] px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:bg-[#cdcbbb] group"
                >
                  התחל עכשיו
                </a>
              </div>
            </DirectionalText>
          </div>
        </section>

        {/* Process Steps */}
        <ProcessSteps />

        {/* Benefits */}
        <Benefits />

        {/* CTA Section */}
        <CTASection />
      </main>

      <Footer />
    </div>
  );
} 