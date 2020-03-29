import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../libs/classname';
import { pick } from '../../../helpers';
import Card from '../../UI/Card';
import Icon from '../../UI/Icon';
import { Info } from './Info/Info';
import { TimeInfo } from './TimeInfo/TimeInfo';
import './Build.post.css';
import './_variant/Build_variant_detail.post.css';
import './StatusIcon/Build-StatusIcon.post.css';

const BuildCn = cn('Build');

const getIconName = status => {
  const iconNames = {
    success: 'done',
    error: 'fail',
    warning: 'clock',
  };

  return iconNames[status] ? iconNames[status] : 'done';
};

export const Build = ({ data, variant, clickable, className }) => {
  const dataInfo = pick(data, [
    'commitMessage',
    'status',
    'buildNumber',
    'authorName',
    'branchName',
    'commitHash',
  ]);

  const { start, duration, status } = data;

  const iconName = getIconName(status);

  return (
    <Card className={BuildCn({ variant }, [className])} clickable={clickable}>
      <Info data={dataInfo} />
      <TimeInfo dateTime={start} duration={duration} />
      <Icon className={BuildCn('StatusIcon')} name={iconName} size="m" color={status} />
    </Card>
  );
};

Build.propTypes = {
  data: PropTypes.shape({
    commitMessage: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['success', 'error', 'warning']),
    buildNumber: PropTypes.number.isRequired,
    authorName: PropTypes.string.isRequired,
    branchName: PropTypes.string.isRequired,
    commitHash: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    duration: PropTypes.number,
  }).isRequired,
  clickable: PropTypes.bool,
  variant: PropTypes.oneOf(['detail']),
  className: PropTypes.string,
};
