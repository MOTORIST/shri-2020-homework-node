import React from 'react';
import cn from '../../../../libs/classname';
import IconPlus, { IconPlusContent } from '../../../UI/IconPlus';
import Icon from '../../../UI/Icon';
import { Build } from '../../../../../../types/Build';
import './Build-Meta.post.css';
import '../MetaRepo/Build-MetaRepo.post.css';
import '../MetaUser/Build-MetaUser.post.css';
import '../MetaHash/Build-MetaHash.post.css';

const BuildCn = cn('Build');

export type MetaProps = Pick<Build, 'authorName' | 'commitHash' | 'branchName'>;

export const Meta: React.FC<MetaProps> = ({ branchName, authorName, commitHash }) => {
  return (
    <div className={BuildCn('Meta')}>
      <IconPlus className={BuildCn('MetaRepo')} distance="xs">
        <Icon name="codeCommit" color="secondary" size="m" />
        <IconPlusContent>
          <span>{branchName}</span>
          <span className={BuildCn('MetaHash')}>{commitHash}</span>
        </IconPlusContent>
      </IconPlus>
      <IconPlus className={BuildCn('MetaUser')} distance="xs">
        <Icon name="user" color="secondary" size="m" />
        <IconPlusContent>{authorName}</IconPlusContent>
      </IconPlus>
    </div>
  );
};
