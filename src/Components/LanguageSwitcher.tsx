import { useState } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const handleLanguageChange = (event: any) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    router.push(router.pathname, router.asPath, { locale: newLanguage });
  };
  return (
    <select value={selectedLanguage} onChange={handleLanguageChange}>
      <option value="en">English</option>
      <option value="vie">Vietnamese</option>
    </select>
  );
}

export default LanguageSwitcher;