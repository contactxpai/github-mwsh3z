import React from 'react';
import { Quote as QuoteIcon } from 'lucide-react';

export default function Quote() {
  return (
    <section className="py-24 bg-[#202f5f] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-32 h-32 text-[#84849b]/10">
        <QuoteIcon className="w-full h-full" />
      </div>
      <div className="absolute bottom-0 right-0 w-32 h-32 text-[#84849b]/10 transform rotate-180">
        <QuoteIcon className="w-full h-full" />
      </div>
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center" dir="ltr">
          <blockquote className="text-3xl md:text-4xl font-bold text-[#f9f8ed] leading-relaxed mb-6">
            "AI won't replace humans, but humans using AI will"
          </blockquote>
          <cite className="text-xl text-[#84849b] font-medium">
            — Fei Fei Li
          </cite>
        </div>
      </div>
    </section>
  );
}