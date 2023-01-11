import React from 'react';

import classes from './EmptySearch.module.scss';

const EmptySearch = () => {
  return (
    <div className={classes['empty-contaoner']}>
      <div>
        <span className={classes.eyes} />
        <span className={classes.mouth} />
      </div>
      <p className={classes['empty-description']}>По Вашему запросу ничего не найдено</p>
    </div>
  );
};

export default EmptySearch;
