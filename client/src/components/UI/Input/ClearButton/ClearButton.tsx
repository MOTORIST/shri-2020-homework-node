import React from 'react';
import cn from '../../../../libs/classname';
import Button from '../../Button';
import './Input-ClearButton.post.css';

const ClearButtonCn = cn('Input', 'ClearButton');

export interface ClearButtonProps {
  className?: string;
  size?: 's' | 'm';
  onClick?: () => void;
}

export const ClearButton: React.FC<ClearButtonProps> = ({ size = 'm', onClick, className }) => {
  return (
    <Button
      className={ClearButtonCn(null, [className])}
      type="button"
      icon="clear"
      iconVariant="clear"
      iconColor="secondary"
      size={size}
      onClick={onClick}
    />
  );
};
