import React, { MouseEvent } from 'react';
import { useTranslation } from 'react-i18next';
import cn from '../../../libs/classname';

import Link from '../Link';

const LangSwitchCn = cn('LangSwitch');

interface LangSwitchProps {
  className?: string;
}

type Lang = 'ru' | 'en';

const languages: Record<Lang, string> = {
  ru: 'Русская версия',
  en: 'English version',
};

export const LangSwitch: React.FC<LangSwitchProps> = ({ className }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as Lang;
  const nextLang: Lang = currentLang === 'ru' ? 'en' : 'ru';

  const handleOnClick = async (e: MouseEvent<HTMLElement>): Promise<void> => {
    e.preventDefault();
    await i18n.changeLanguage(nextLang);
  };

  return (
    <Link className={LangSwitchCn(null, [className])} onClick={handleOnClick}>
      {languages[nextLang]}
    </Link>
  );
};
