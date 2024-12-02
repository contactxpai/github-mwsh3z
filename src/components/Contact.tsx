import React, { useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { Loader2, Mail, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { getContent } from '../data/translations';
import { DirectionalText } from './DirectionalText';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { language } = useLanguage();
  const content = getContent(language);
  const textAlign = language === 'he' ? 'text-right' : 'text-left';
  
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.firstName) newErrors.firstName = content.contact.form.required;
    if (!formData.lastName) newErrors.lastName = content.contact.form.required;
    if (!formData.email) {
      newErrors.email = content.contact.form.required;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = content.contact.form.invalidEmail;
    }
    if (!formData.message) {
      newErrors.message = content.contact.form.required;
    } else if (formData.message.length < 10) {
      newErrors.message = content.contact.form.shortMessage;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const formPayload = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      message: formData.message,
      timestamp: new Date().toISOString(),
    };

    try {
      // Create a new form data object
      const formDataObj = new FormData();
      formDataObj.append('payload', JSON.stringify(formPayload));

      // Send as form data instead of JSON
      const response = await fetch('https://hooks.zapier.com/hooks/catch/20833354/2iundv1/', {
        method: 'POST',
        mode: 'no-cors', // This is important for production
        body: formDataObj,
      });

      toast.success(content.contact.form.success);
      setFormData({ firstName: '', lastName: '', email: '', message: '' });
    } catch (error) {
      toast.error(content.contact.form.error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#202f5f] mb-16">
          {content.contact.title}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#f9f8ed] rounded-2xl p-8 md:p-12 shadow-xl">
            <DirectionalText className={textAlign}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#202f5f] font-medium mb-2">
                      {content.contact.form.firstName}
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={e => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                      className="w-full px-4 py-2 rounded-lg border border-[#84849b]/20 focus:outline-none focus:border-[#202f5f]"
                      dir={language === 'he' ? 'rtl' : 'ltr'}
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-red-500 text-sm">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-[#202f5f] font-medium mb-2">
                      {content.contact.form.lastName}
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={e => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                      className="w-full px-4 py-2 rounded-lg border border-[#84849b]/20 focus:outline-none focus:border-[#202f5f]"
                      dir={language === 'he' ? 'rtl' : 'ltr'}
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-red-500 text-sm">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-[#202f5f] font-medium mb-2">
                    {content.contact.form.email}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg border border-[#84849b]/20 focus:outline-none focus:border-[#202f5f]"
                    dir="ltr"
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-500 text-sm">{errors.email}</p>
                  )}
                </div>

                {/* Message Field */}
                <div>
                  <label className="block text-[#202f5f] font-medium mb-2">
                    {content.contact.form.message}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-[#84849b]/20 focus:outline-none focus:border-[#202f5f]"
                    dir={language === 'he' ? 'rtl' : 'ltr'}
                  />
                  {errors.message && (
                    <p className="mt-1 text-red-500 text-sm">{errors.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <div className={textAlign}>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#202f5f] text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 hover:bg-[#84849b] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        {content.contact.form.sending}
                      </>
                    ) : (
                      content.contact.form.submit
                    )}
                  </button>
                </div>
              </form>

              {/* Contact Info */}
              <div className="mt-12 pt-8 border-t border-[#84849b]/20">
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-[#84849b]">
                  <a 
                    href={`mailto:${content.contact.info.email}`}
                    className="inline-flex items-center gap-2 hover:text-[#202f5f] transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    {content.contact.info.email}
                  </a>
                  <a 
                    href="https://wa.me/972544451186"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-[#202f5f] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    {content.contact.info.phone}
                  </a>
                </div>
              </div>
            </DirectionalText>
          </div>
        </div>
      </div>
      <Toaster position="bottom-center" />
    </section>
  );
}