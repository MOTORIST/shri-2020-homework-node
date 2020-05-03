import React from 'react';
import cn from '../../../../libs/classname';
import { Title } from '../Title/Title';
import { Meta } from '../Meta/Meta';
import { Build } from '../../../../../../types/Build';
import { Color } from '../Build';
import './Build-Info.post.css';

const InfoCn = cn('Build', 'Info');

export interface InfoProps {
  data: Build;
  color: Color;
}

export const Info: React.FC<InfoProps> = ({ data, color }) => {
  const { commitMessage, buildNumber, authorName, branchName, commitHash } = data;

  return (
    <div className={InfoCn()}>
      <Title title={commitMessage} color={color} number={buildNumber} />
      <Meta authorName={authorName} branchName={branchName} commitHash={commitHash} />
    </div>
  );
};
