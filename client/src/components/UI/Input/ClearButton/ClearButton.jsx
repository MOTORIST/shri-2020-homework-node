import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../../libs/classname';
import Button from '../../Button';
import './Input-ClearButton.post.css';

const ClearButtonCn = cn('Input', 'ClearButton');

export const ClearButton = ({ size, className }) => {
  return (
    <Button
      className={ClearButtonCn(null, [className])}
      icon="clear"
      iconVariant="clear"
      iconColor="secondary"
      size={size}
    />
  );
};

ClearButton.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['s', 'm']),
};
