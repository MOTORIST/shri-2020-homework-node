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

export const Button = ({ color, disabled, full, icon, iconVariant, size, children, className }) => {
  const buttonIcon = (
    <div className={ButtonCn('Icon')}>
      <Icon name={icon} size={size}></Icon>
    </div>
  );

  let body = <div className={ButtonCn('Text')}>{children}</div>;

  if (icon && (iconVariant === 'clear' || iconVariant === 'only')) {
    body = buttonIcon;
  } else if (icon && iconVariant === 'left') {
    body = (
      <>
        {buttonIcon}
        <div className={ButtonCn('Text')}>{children}</div>
      </>
    );
  }

  return (
    <button
      className={ButtonCn({ color, disabled, full, icon, 'icon-variant': iconVariant, size }, [
        className,
      ])}
    >
      {body}
    </button>
  );
};

Button.propTypes = {
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
  size: PropTypes.oneOf(['s', 'm']),
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  color: 'default',
  size: 'm',
};
