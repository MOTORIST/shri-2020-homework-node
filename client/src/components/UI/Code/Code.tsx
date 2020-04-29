import React from 'react';
import cn from '../../../libs/classname';
import Convert from 'ansi-to-html';
import './Code.post.css';

const CodeCn = cn('Code');

export interface CodeProps {
  children: string;
  className?: string;
}

export const Code: React.FC<CodeProps> = ({ children, className }) => {
  const convert = new Convert({ fg: '#000' });

  return (
    <pre
      className={CodeCn(null, [className])}
      dangerouslySetInnerHTML={{ __html: convert.toHtml(children) }}
    />
  );
};
