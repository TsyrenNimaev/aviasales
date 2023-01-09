import React from 'react';

import classes from './Tabs.module.scss';

const Tabs = () => {
  return (
    <form className={classes['tabs-form']}>
      <label htmlFor="cheap" className={classes['tabs-label']}>
        <span className={classes.active}>самый дешевый</span>
        <input id="cheap" className={classes['tabs-input']} name="radio" type="radio" />
      </label>
      <label htmlFor="fast" className={classes['tabs-label']}>
        <span>самый быстрый</span>
        <input id="fast" className={classes['tabs-input']} name="radio" type="radio" />
      </label>
      <label className={classes['tabs-label']}>
        <span>оптимальный</span>
        <input className={classes['tabs-input']} name="radio" type="radio" />
      </label>
    </form>
  );
};

export default Tabs;
