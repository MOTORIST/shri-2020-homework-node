import React from 'react';
import PropTypes from 'prop-types';
import cn from '../../../../libs/classname';
import Typography from '../../../UI/Typography';
import '../Title/Build-Title.post.css';
import '../Number/Build-Number.post.css';
import '../TitleText/Build-TitleText.post.css';

const BuildCn = cn('Build');

export const Title = ({ color, number, title }) => {
  return (
    <div className={BuildCn('Title')}>
      <Typography className={BuildCn('Number')} color={color}>
        #{number}
      </Typography>
      <div className={BuildCn('TitleText')}>{title}</div>
    </div>
  );
};

Title.propTypes = {
  color: PropTypes.oneOf(['error', 'success', 'warning']).isRequired,
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
