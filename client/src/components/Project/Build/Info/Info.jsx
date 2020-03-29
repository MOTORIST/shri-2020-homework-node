import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../../libs/classname';
import { Title } from '../Title/Title';
import { Meta } from '../Meta/Meta';
import './Build-Info.post.css';

const InfoCn = cn('Build', 'Info');

export const Info = ({ data }) => {
  const { commitMessage, status, buildNumber, authorName, branchName, commitHash } = data;

  return (
    <div className={InfoCn()}>
      <Title title={commitMessage} status={status} number={buildNumber} />
      <Meta user={authorName} repo={branchName} hash={commitHash} />
    </div>
  );
};

Info.propTypes = {
  data: PropTypes.shape({
    commitMessage: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['error', 'success', 'warning']),
    buildNumber: PropTypes.number.isRequired,
    authorName: PropTypes.string.isRequired,
    branchName: PropTypes.string.isRequired,
    commitHash: PropTypes.string.isRequired,
  }),
};
