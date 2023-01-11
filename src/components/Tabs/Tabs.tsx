import React, { FC, ChangeEventHandler } from 'react';
import { connect } from 'react-redux';

import { State } from '../../redux/types';
import { cheapestTicket as cheapest } from '../../redux/actions';

import classes from './Tabs.module.scss';

type Properties = {
  state: State,
  cheapestTicket: ChangeEventHandler<HTMLElement>,
};

const Tabs: FC<Properties> = ({ state, cheapestTicket }) => {
  const { tabs } = state.tabsReducer;
  const tab = tabs.map((filter) => {
    const labelClasses = [classes.tabs__label];
    if (filter.checked) labelClasses.push(classes.active);

    return (
      <label className={labelClasses.join(' ')} key={Math.random()}>
        {filter.name}
        <input
          type="radio"
          value={filter.name}
          className={classes['tabs-input']}
          checked={filter.checked}
          onChange={cheapestTicket}
        />
      </label>
    );
  });
  return <form className={classes['tabs-form']}>{tab}</form>;
};

const mapStateToProps = (state: State) => {
  return { state };
};

const mapDispatchToProperties = {
  cheapestTicket: cheapest,
};

export default connect(mapStateToProps, mapDispatchToProperties)(Tabs);
