import React from 'react';
import cn from '../../../libs/classname';
import Build from '../Build';
import Typography from '../../UI/Typography';
import Button from '../../UI/Button';
import { Build as IBuild } from '../../../../../types/Build';
import './BuildList.post.css';
import './Item/BuildList-Item.post.css';
import './MoreButton/BuildList-MoreButton.post.css';

const BuildListCn = cn('BuildList');

export interface BuildListProps {
  buildsData: IBuild[];
  onLoadMore: () => void;
  isMore: boolean;
  onClickBuild: () => void;
  className: string;
}

export const BuildList: React.FC<BuildListProps> = ({
  buildsData,
  onLoadMore,
  isMore,
  onClickBuild,
  className,
}) => {
  if (!buildsData) {
    return <Typography variant="body">No builds</Typography>;
  }

  return (
    <div className={BuildListCn(null, [className])}>
      {buildsData.map((buildData) => (
        <Build
          className={BuildListCn('Item')}
          key={buildData.id}
          data={buildData}
          onClick={onClickBuild}
        />
      ))}

      <Button className={BuildListCn('MoreButton')} onClick={onLoadMore} disabled={!isMore} full>
        Show more
      </Button>
    </div>
  );
};
