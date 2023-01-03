import React from 'react';

import FilterButtons from '../FilterButtons';
import TicketList from '../TicketList';

import classes from './OfferContainer.module.scss';

const OfferContainer = () => {
  return (
    <div className={classes['offer-container']}>
      <FilterButtons />
      <TicketList />
    </div>
  );
};

export default OfferContainer;
