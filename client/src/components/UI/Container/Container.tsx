import React, { ReactNode } from 'react';
import cn from '../../../libs/classname';
import './Container.post.css';
import './_arrange/Container_arrange_col.post.css';
import './_arrange/Container_arrange_row.post.css';
import './_distribute/Container_distribute_between.post.css';
import './_distribute/Container_distribute_center.post.css';
import './_height/Container_height-full.post.css';
import './_space-h/Container_space-h_s.post.css';
import './_vertical-align/Container_vertical-align_center.post.css';

export const ContainerCn = cn('Container');

export interface ContainerProps {
  distribute?: 'between' | 'center';
  arrange?: 'col' | 'row';
  height?: 'full';
  spaceH?: 's';
  verticalAlign?: 'center';
  className?: string;
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({
  distribute,
  arrange,
  height,
  spaceH,
  verticalAlign,
  className,
  children,
}) => {
  const modifications = {
    distribute,
    arrange,
    height,
    'space-h': spaceH,
    'vertical-align': verticalAlign,
  };

  return <div className={ContainerCn(modifications, [className])}>{children}</div>;
};
