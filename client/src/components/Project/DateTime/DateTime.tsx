import React from 'react';
import { format, isThisYear } from 'date-fns';
import { enUS, ru } from 'date-fns/locale';
import cn from '../../../libs/classname';
import Icon from '../../UI/Icon';
import IconPlus, { IconPlusContent } from '../../UI/IconPlus';
import { useTranslation } from 'react-i18next';

import './DateTime.post.css';

const DateTimeCn = cn('DateTime');

export interface DateTimeProps {
  dateTime: string;
  className?: string;
  icon?: 'calendar' | 'clock' | 'stopwatch';
}

type Lang = 'ru' | 'en';

const languages = {
  ru: ru,
  en: enUS,
};

export const DateTime: React.FC<DateTimeProps> = ({ dateTime, icon = 'calendar', className }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as Lang;
  const date = new Date(dateTime);
  const isCurrentYear = isThisYear(date);
  const formatString = isCurrentYear ? 'dd MMM, H:mm' : 'dd MMM yyyy, H:mm';
  const formattedDate = format(date, formatString, { locale: languages[currentLang] });

  return (
    <IconPlus className={DateTimeCn(null, [className])} distance="xs">
      <Icon name={icon} size="m" color="secondary" />
      <IconPlusContent>{formattedDate}</IconPlusContent>
    </IconPlus>
  );
};
