import React, { ReactNode } from 'react';
import cn from '../../../libs/classname';
import Icon from '../Icon';

import './Button.post.css';
import './_color/Button_color_default.post.css';
import './_color/Button_color_primary.post.css';
import './_full/Button_full.post.css';
import './_icon-variant/Button_icon-variant_left.post.css';
import './_icon-variant/Button_icon-variant_only.post.css';
import './_icon-variant/Button_icon-variant_clear.post.css';
import './_size/Button_size_s.post.css';
import './_size/Button_size_m.post.css';

import './Text/Button-Text.post.css';
import './Icon/Button-Icon.post.css';
import { IconValue } from '../Icon/Icon';

export const ButtonCn = cn('Button');

interface ButtonProp {
  type?: 'button' | 'submit' | 'reset';
  color?: 'default' | 'primary';
  disabled?: boolean;
  full?: boolean;
  iconVariant?: 'clear' | 'left' | 'only';
  icon?: IconValue;
  iconColor?: 'default' | 'error' | 'secondary' | 'success' | 'warning';
  size?: 's' | 'm';
  onClick?: () => void;
  className?: string;
  children?: ReactNode;
}

export const Button: React.FC<ButtonProp> = ({
  type = 'submit',
  color = 'default',
  size = 'm',
  iconColor = 'default',
  disabled,
  full,
  icon,
  iconVariant,
  onClick,
  children,
  className,
  ...other
}) => {
  let body: ReactNode;
  const text = <div className={ButtonCn('Text')}>{children}</div>;

  const buttonIcon = icon && (
    <div className={ButtonCn('Icon')}>
      <Icon name={icon} size={size} color={iconColor} />
    </div>
  );

  if (icon && (iconVariant === 'clear' || iconVariant === 'only')) {
    body = buttonIcon;
  } else if (icon && iconVariant === 'left') {
    body = (
      <>
        {buttonIcon}
        {text}
      </>
    );
  } else {
    body = text;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={ButtonCn({ color, full, icon, 'icon-variant': iconVariant, size }, [className])}
      disabled={disabled}
      {...other}
    >
      {body}
    </button>
  );
};
