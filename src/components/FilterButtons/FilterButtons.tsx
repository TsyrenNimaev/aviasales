import React from 'react';

import classes from './FilterButtons.module.scss';

const FilterButtons = () => {
  return (
    <div className={classes['button-container']}>
      <button className={classes['filter-btn']}>Самый дешевый</button>
      <button className={classes['filter-btn']}>Самый быстрый</button>
      <button className={classes['filter-btn']}>Оптимальный</button>
    </div>
  );
};

export default FilterButtons;
