import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../libs/classname';
import Icon from '../Icon';

import './Button.post.css';
import './_color/Button_color_default.post.css';
import './_color/Button_color_primary.post.css';
import './_disabled/Button_disabled.post.css';
import './_full/Button_full.post.css';
import './_icon-variant/Button_icon-variant_left.post.css';
import './_icon-variant/Button_icon-variant_only.post.css';
import './_icon-variant/Button_icon-variant_clear.post.css';
import './_size/Button_size_s.post.css';
import './_size/Button_size_m.post.css';

import './Text/Button-Text.post.css';
import './Icon/Button-Icon.post.css';

export const ButtonCn = cn('Button');

export const Button = ({
  type,
  color,
  disabled,
  full,
  icon,
  iconVariant,
  iconColor,
  size,
  onClick,
  children,
  className,
}) => {
  const text = <div className={ButtonCn('Text')}>{children}</div>;
  let body = text;

  const buttonIcon = icon && (
    <div className={ButtonCn('Icon')}>
      <Icon name={icon} size={size} color={iconColor} />
    </div>
  );

  if (iconVariant === 'clear' || iconVariant === 'only') {
    body = buttonIcon;
  } else if (icon && iconVariant === 'left') {
    body = (
      <>
        {buttonIcon}
        {text}
      </>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={ButtonCn({ color, disabled, full, icon, 'icon-variant': iconVariant, size }, [
        className,
      ])}
    >
      {body}
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  color: PropTypes.oneOf(['default', 'primary']),
  disabled: PropTypes.bool,
  full: PropTypes.bool,
  iconVariant: PropTypes.oneOf(['clear', 'left', 'only']),
  icon: PropTypes.oneOf([
    'calendar',
    'clear',
    'clock',
    'codeCommit',
    'done',
    'fail',
    'logo',
    'play',
    'rebuild',
    'settings',
    'stopwatch',
    'user',
  ]),
  iconColor: PropTypes.oneOf(['default', 'error', 'secondary', 'success', 'warning']),
  size: PropTypes.oneOf(['s', 'm']),
  onClick: PropTypes.func,
  children: PropTypes.node,
};

Button.defaultProps = {
  type: 'submit',
  color: 'default',
  size: 'm',
  iconColor: 'default',
};
