import React, { FC, ChangeEventHandler } from 'react';
import { connect } from 'react-redux';

import { Checkbox } from '../../store/reducers/transfer-reducer';
import { State } from '../../store/types';
import * as actions from '../../store/actions';

import classes from './TransferFilters.module.scss';

type Properties = {
  state: State,
  toggle: ChangeEventHandler<HTMLElement>,
  toggleAll: ChangeEventHandler<HTMLElement>,
};

const TransferFilters: FC<Properties> = ({ state, toggle, toggleAll }) => {
  const { checkbox } = state.transferReducer;
  const checkboxes = checkbox.map((el: Checkbox, i: number) => {
    return (
      <label key={Math.random()} className={classes['transfer-filter-label']}>
        <input
          type="checkbox"
          checked={el.checked}
          value={el.name}
          className={classes['transfer-filters-input']}
          onChange={i === 0 ? toggleAll : toggle}
        />
        {el.name}
      </label>
    );
  });

  return (
    <form className={classes['transfer-filter-form']}>
      <h4 className={classes['transfer-filters-title']}>Колличество пересадок</h4>
      {checkboxes}
    </form>
  );
};

const mapStateToProps = (state: State) => {
  return { state };
};

export default connect(mapStateToProps, actions)(TransferFilters);
