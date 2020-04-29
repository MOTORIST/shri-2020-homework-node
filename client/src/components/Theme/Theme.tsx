import React, { ReactNode } from 'react';
import cn from '../../libs/classname';
import './Theme.post.css';
import './_color/Theme_color_default.post.css';
import './_control/Theme_control_default.post.css';
import './_font/Theme_font_default.post.css';
import './_size/Theme_size_default.post.css';
import './_space/Theme_space_default.post.css';

const ThemeCn = cn('Theme');

export interface ThemeProps {
  color: 'default';
  control: 'default';
  font: 'default';
  size: 'default';
  space: 'default';
  children: ReactNode;
}

export const Theme: React.FC<ThemeProps> = ({
  color = 'default',
  control = 'default',
  font = 'default',
  size = 'default',
  space = 'default',
  children,
}) => {
  return <div className={ThemeCn({ color, control, font, size, space })}>{children}</div>;
};
