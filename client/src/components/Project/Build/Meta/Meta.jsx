import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../../libs/classname';
import IconPlus, { IconPlusContent } from '../../../UI/IconPlus';
import Icon from '../../../UI/Icon';
import './Build-Meta.post.css';
import '../MetaRepo/Build-MetaRepo.post.css';
import '../MetaUser/Build-MetaUser.post.css';
import '../MetaHash/Build-MetaHash.post.css';

const BuildCn = cn('Build');

export const Meta = ({ user, repo, hash }) => {
  return (
    <div className={BuildCn('Meta')}>
      <IconPlus className={BuildCn('MetaRepo')} distance="xs">
        <Icon name="codeCommit" color="secondary" size="m" />
        <IconPlusContent>
          <span>{repo}</span>
          <span className={BuildCn('MetaHash')}>{hash}</span>
        </IconPlusContent>
      </IconPlus>
      <IconPlus className={BuildCn('MetaUser')} distance="xs">
        <Icon name="user" color="secondary" size="m" />
        <IconPlusContent>{user}</IconPlusContent>
      </IconPlus>
    </div>
  );
};

Meta.propTypes = {
  user: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
  hash: PropTypes.string.isRequired,
};
