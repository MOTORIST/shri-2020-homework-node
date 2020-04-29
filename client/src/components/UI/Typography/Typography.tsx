import React, { ReactNode } from 'react';
import cn from '../../../libs/classname';
import './Typography.post.css';
import './_align/Typography_align_center.post.css';
import './_color/Typography_color_error.post.css';
import './_color/Typography_color_secondary.post.css';
import './_color/Typography_color_success.post.css';
import './_color/Typography_color_warning.post.css';
import './_nowrap/Typography_nowrap.post.css';
import './_variant/Typography_variant_body.post.css';
import './_variant/Typography_variant_h1.post.css';
import './_variant/Typography_variant_h2.post.css';
import './_variant/Typography_variant_h3.post.css';
import './_variant/Typography_variant_h4.post.css';

const TypographyCn = cn('Typography');

interface TypographyProps {
  nowrap?: boolean;
  variant?: 'body' | 'h1' | 'h2' | 'h3' | 'h4';
  color?: 'error' | 'secondary' | 'success' | 'warning' | 'default';
  align?: 'center';
  className?: string;
  children: ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  nowrap,
  variant,
  color = 'default',
  align,
  children,
  className,
  ...other
}) => {
  return (
    <div className={TypographyCn({ nowrap, variant, color, align }, [className])} {...other}>
      {children}
    </div>
  );
};

export default Typography;
