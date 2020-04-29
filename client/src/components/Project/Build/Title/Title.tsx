import React from 'react';
import cn from '../../../../libs/classname';
import Typography from '../../../UI/Typography';
import '../Title/Build-Title.post.css';
import '../Number/Build-Number.post.css';
import '../TitleText/Build-TitleText.post.css';
import { Color } from '../Build';

const BuildCn = cn('Build');

export interface TitleProps {
  color: Color;
  number: number;
  title: string;
}

export const Title: React.FC<TitleProps> = ({ color, number, title }) => {
  return (
    <div className={BuildCn('Title')}>
      <Typography className={BuildCn('Number')} color={color}>
        #{number}
      </Typography>
      <div className={BuildCn('TitleText')}>{title}</div>
    </div>
  );
};
