import React from 'react';

import classes from './TransferFilters.module.scss';

const TransferFilters = () => {
  return (
    <form className={classes['transfer-filters-form']}>
      <h4 className={classes['transfer-filters-title']}>
        количество пересадок
      </h4>
      <label className={classes['transfer-filter-label']}>
        <input type="checkbox" className={classes['transfer-filters-input']} />
        Все
      </label>
      <label className={classes['transfer-filter-label']}>
        <input type="checkbox" className={classes['transfer-filters-input']} />
        Без пересадок
      </label>
      <label className={classes['transfer-filter-label']}>
        <input
          type="checkbox"
          className={classes['transfer-filters-input']}
          checked
        />
        1 пересадка
      </label>
      <label className={classes['transfer-filter-label']}>
        <input
          type="checkbox"
          className={classes['transfer-filters-input']}
          checked
        />
        2 пересадки
      </label>
      <label className={classes['transfer-filter-label']}>
        <input type="checkbox" className={classes['transfer-filters-input']} />3
        пересадки
      </label>
    </form>
  );
};

export default TransferFilters;
