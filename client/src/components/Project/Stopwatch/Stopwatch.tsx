import React from 'react';
import cn from '../../../libs/classname';
import ms, { Lang } from '../../../helpers/ms';
import IconPlus, { IconPlusContent } from '../../UI/IconPlus';
import Icon from '../../UI/Icon';

import './Stopwatch.post.css';
import { useTranslation } from 'react-i18next';

const StopwatchCn = cn('Stopwatch');

export interface StopwatchProps {
  duration: number;
  className?: string;
}

export const Stopwatch: React.FC<StopwatchProps> = ({ duration, className }) => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language as Lang;
  const formattedDuration = duration ? ms(duration, currentLang) : 0;

  return (
    <IconPlus className={StopwatchCn(null, [className])} distance="xs">
      <Icon name="stopwatch" size="m" color="secondary" />
      <IconPlusContent>{formattedDuration}</IconPlusContent>
    </IconPlus>
  );
};
