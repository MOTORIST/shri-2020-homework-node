import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../../libs/classname';
import { Title } from '../Title/Title';
import { Meta } from '../Meta/Meta';
import './Build-Info.post.css';

const InfoCn = cn('Build', 'Info');

export const Info = ({ data, color }) => {
  const { commitMessage, buildNumber, authorName, branchName, commitHash } = data;

  return (
    <div className={InfoCn()}>
      <Title title={commitMessage} color={color} number={buildNumber} />
      <Meta user={authorName} repo={branchName} hash={commitHash} />
    </div>
  );
};

Info.propTypes = {
  color: PropTypes.string.isRequired,
  data: PropTypes.shape({
    commitMessage: PropTypes.string.isRequired,
    buildNumber: PropTypes.number.isRequired,
    authorName: PropTypes.string.isRequired,
    branchName: PropTypes.string.isRequired,
    commitHash: PropTypes.string.isRequired,
  }),
};
