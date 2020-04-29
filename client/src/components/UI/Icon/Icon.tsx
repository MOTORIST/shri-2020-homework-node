import React from 'react';
import cn from '../../../libs/classname';
import { icons } from './icons.data';
import './Icon.post.css';
import './_color/Icon_color_default.post.css';
import './_color/Icon_color_error.post.css';
import './_color/Icon_color_secondary.post.css';
import './_color/Icon_color_success.post.css';
import './_color/Icon_color_warning.post.css';
import './_size/Icon_size_s.post.css';
import './_size/Icon_size_m.post.css';
import './_size/Icon_size_l.post.css';
import './_size/Icon_size_xl.post.css';
import './_size/Icon_size_7xl.post.css';

const IconCn = cn('Icon');

export type IconValue =
  | 'calendar'
  | 'clear'
  | 'clock'
  | 'codeCommit'
  | 'done'
  | 'fail'
  | 'logo'
  | 'play'
  | 'rebuild'
  | 'settings'
  | 'stopwatch'
  | 'user';

interface IconProp {
  name: IconValue;
  color?: 'default' | 'error' | 'secondary' | 'success' | 'warning';
  size?: 's' | 'm' | 'l' | 'xl' | '7xl';
  className?: string;
}

export const Icon: React.FC<IconProp> = ({ color = 'default', size = 'm', name, className }) => {
  return (
    <svg className={IconCn({ color, size }, [className])} viewBox="0 0 124 124">
      <path d={icons[name]} />
    </svg>
  );
};
