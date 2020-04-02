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
    waiting: 'clock',
  };

  return iconNames[status] ? iconNames[status] : 'done';
};

const getColor = status => {
  const colors = {
    success: 'success',
    error: 'error',
    warning: 'warning',
    waiting: 'warning',
  };

  return colors[status] ? colors[status] : 'default';
};

export const Build = ({ data, variant, onClick, className }) => {
  const clickable = onClick ? true : false;

  const dataInfo = pick(data, [
    'commitMessage',
    'status',
    'buildNumber',
    'authorName',
    'branchName',
    'commitHash',
  ]);

  const { id, start, duration, status } = data;

  const iconName = getIconName(status);
  const color = getColor(status);

  const handleOnClick = () => {
    onClick && onClick(id);
  };

  return (
    <Card
      className={BuildCn({ variant }, [className])}
      onClick={handleOnClick}
      clickable={clickable}
    >
      <Info data={dataInfo} color={color} />
      <TimeInfo dateTime={start} duration={duration} />
      <Icon className={BuildCn('StatusIcon')} name={iconName} size="m" color={color} />
    </Card>
  );
};

Build.propTypes = {
  data: PropTypes.shape({
    commitMessage: PropTypes.string.isRequired,
    status: PropTypes.oneOf(['success', 'error', 'warning', 'waiting']),
    buildNumber: PropTypes.number.isRequired,
    authorName: PropTypes.string.isRequired,
    branchName: PropTypes.string.isRequired,
    commitHash: PropTypes.string.isRequired,
    start: PropTypes.string,
    duration: PropTypes.number,
  }).isRequired,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['detail']),
  className: PropTypes.string,
};
