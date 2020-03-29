import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../../libs/classname';
import Typography from '../../../UI/Typography';
import '../Title/Build-Title.post.css';
import '../Number/Build-Number.post.css';
import '../TitleText/Build-TitleText.post.css';

const BuildCn = cn('Build');

export const Title = ({ status, number, title }) => {
  return (
    <div className={BuildCn('Title')}>
      <Typography className={BuildCn('Number')} color={status}>
        #{number}
      </Typography>
      <div className={BuildCn('TitleText')}>{title}</div>
    </div>
  );
};

Title.propTypes = {
  status: PropTypes.oneOf(['error', 'success', 'warning']).isRequired,
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
