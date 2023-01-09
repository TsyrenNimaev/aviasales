import React from 'react';

import logo from '../../assets/img/S7.png';

import classes from './Tickets.module.scss';

const Tickets = () => {
  return (
    <React.Fragment>
      <div className={classes['tickets-item__price']}>
        <span>13 400 р</span>
        <span>
          <img src={logo} alt="avialogo" />
        </span>
      </div>
      <div className={classes['tickets-item__description']}>
        <ul>
          <li>
            <span>MOW – HKT</span>
            <span>10:45 – 08:00</span>
          </li>
          <li>
            <span>В пути</span>
            <span>21ч 15м</span>
          </li>
          <li>
            <span>2 пересадки</span>
            <span>HKG, JNB</span>
          </li>
        </ul>
        <ul>
          <li>
            <span>MOW – HKT</span>
            <span>11:20 – 00:50</span>
          </li>
          <li>
            <span>В пути</span>
            <span>13ч 30м</span>
          </li>
          <li>
            <span>1 пересадка</span>
            <span>HKG</span>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Tickets;
