import React, { ReactNode } from 'react';
import cn from '../../../../libs/classname';
import Container from '../../../UI/Container';
import './Page-Content.post.css';

const ContentCn = cn('Page', 'Content');
export interface ContentProps {
  arrange?: 'row' | 'col';
  contentPosition?: 'center';
  className?: string;
  children: ReactNode;
}

export const Content: React.FC<ContentProps> = ({
  contentPosition,
  arrange,
  className,
  children,
}) => {
  return (
    <Container
      className={ContentCn(null, [className])}
      verticalAlign={contentPosition && 'center'}
      distribute={contentPosition && 'center'}
      arrange={arrange}
    >
      {children}
    </Container>
  );
};
