import React from 'react';

import Tickets from '../Tickets';

import classes from './TicketList.module.scss';

const TicketList = () => {
  return (
    <React.Fragment>
      <ul className={classes['ticket-list']}>
        <Tickets />
        <Tickets />
        <Tickets />
        <Tickets />
        <Tickets />
      </ul>
      <button className={classes['ticket-list__btn']}>
        Показать еще 5 билетов!
      </button>
    </React.Fragment>
  );
};

export default TicketList;
