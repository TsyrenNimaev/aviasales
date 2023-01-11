import React from 'react';

import TransferFilters from '../TransferFilters';
import OfferContainer from '../OfferContainer';
import useTypedSelector from '../hooks/useSelector';
import logo from '../../assets/img/Logo.png';

import classes from './App.module.scss';

function App() {
  const stop = useTypedSelector((state) => state.ticketReducer.stop);
  const load = [classes.logo__img];
  if (stop === false) load.push(classes.active);
  return (
    <section className={classes.section}>
      <img src={logo} alt="logo-title" className={load.join(' ')} />
      <div className={classes.container}>
        <TransferFilters />
        <OfferContainer />
      </div>
    </section>
  );
}

export default App;
