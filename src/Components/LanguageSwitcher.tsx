import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { Select } from 'antd';

function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const router = useRouter();

  const handleLanguageChange = (event: any) => {
    const newLanguage = event;
    i18n.changeLanguage(newLanguage);
    router.push(router.pathname, router.asPath, { locale: newLanguage });
  };
  return (
    <Select
      style={{ width: 120 }}
      defaultValue={'vie'}
      onChange={handleLanguageChange}
      options={[
        { value: 'en', label: 'English' },
        { value: 'vie', label: 'Vietnamese' },
      ]}
    />
  );
}

export default LanguageSwitcher;