import React from 'react';

import TransferFilters from '../TransferFilters';
import OfferContainer from '../OfferContainer';
import logo from '../../assets/img/Logo.png';

import classes from './App.module.scss';

function App() {
  return (
    <section className={classes.section}>
      <img src={logo} alt="logo-title" className={classes['logo-img']} />
      <div className={classes.container}>
        <TransferFilters />
        <OfferContainer />
      </div>
    </section>
  );
}

export default App;
