import React from 'react';

import Tabs from '../Tabs';
import TicketList from '../TicketList';

import classes from './OfferContainer.module.scss';

const OfferContainer = () => {
  return (
    <div className={classes['offer-container']}>
      <Tabs />
      <TicketList />
    </div>
  );
};

export default OfferContainer;
