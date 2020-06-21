import React from 'react';
import cn from '../../../libs/classname';
import Build from '../Build';
import Typography from '../../UI/Typography';
import Button from '../../UI/Button';
import { Build as IBuild } from '../../../../../types/Build';
import { useTranslation } from 'react-i18next';

import './BuildList.post.css';
import './Item/BuildList-Item.post.css';
import './MoreButton/BuildList-MoreButton.post.css';

const BuildListCn = cn('BuildList');

export interface BuildListProps {
  buildsData?: Omit<IBuild, 'configurationId'>[] | null;
  onLoadMore?: () => void;
  isMore?: boolean;
  onClickBuild?: (id: string) => void;
  className?: string;
}

export const BuildList: React.FC<BuildListProps> = ({
  buildsData,
  onLoadMore,
  isMore,
  onClickBuild,
  className,
}) => {
  const { t } = useTranslation(['BuildList']);

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
        {t('showMoreButton')}
      </Button>
    </div>
  );
};
