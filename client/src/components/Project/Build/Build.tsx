import React from 'react';
import cn from '../../../libs/classname';
import Card from '../../UI/Card';
import Icon from '../../UI/Icon';
import { Info } from './Info/Info';
import { TimeInfo } from './TimeInfo/TimeInfo';
import { Build as IBuild, BuildStatus } from '../../../../../types/Build';
import './Build.post.css';
import './_variant/Build_variant_detail.post.css';
import './StatusIcon/Build-StatusIcon.post.css';

const BuildCn = cn('Build');
export interface BuildProps {
  data: Omit<IBuild, 'configurationId'>;
  onClick?: (id: string) => void;
  variant?: 'detail';
  className?: string;
  status?: BuildStatus;
}

export type Color = 'warning' | 'success' | 'error' | 'default';
type IconName = 'clock' | 'done' | 'fail';

const getIconName = (status: BuildStatus): IconName => {
  const iconNames: Record<BuildStatus, IconName> = {
    Waiting: 'clock',
    InProgress: 'clock',
    Success: 'done',
    Fail: 'fail',
    Canceled: 'fail',
  };

  return iconNames[status] ? iconNames[status] : 'done';
};

const getColor = (status: BuildStatus): Color => {
  const colors: Record<BuildStatus, Color> = {
    Waiting: 'warning',
    InProgress: 'warning',
    Success: 'success',
    Fail: 'error',
    Canceled: 'error',
  };

  return colors[status] ? colors[status] : 'default';
};

export const Build: React.FC<BuildProps> = ({ data, variant, onClick, className }) => {
  const clickable = onClick ? true : false;

  const { id, start, duration, status } = data;

  const iconName = getIconName(status);
  const color = getColor(status);

  const handleOnClick = (): void => {
    onClick && onClick(id);
  };

  return (
    <Card
      className={BuildCn({ variant }, [className])}
      onClick={handleOnClick}
      clickable={clickable}
    >
      <Info data={data} color={color} />
      <TimeInfo dateTime={start} duration={duration} />
      <Icon className={BuildCn('StatusIcon')} name={iconName} size="m" color={color} />
    </Card>
  );
};
