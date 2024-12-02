import { useLanguage } from '../contexts/LanguageContext';

export function useDirection() {
  const { language } = useLanguage();
  
  return {
    dir: language === 'he' ? 'rtl' : 'ltr',
    dirClassName: language === 'he' ? 'text-right' : 'text-left'
  };
}
