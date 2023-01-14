import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';

import Tickets from '../Tickets';
import { RootState } from '../../store/reducers/root-reducer';
import { TicketTypes } from '../../store/types';
import { Checkbox } from '../../store/reducers/transfer-reducer';
import { getId as getID, getAviaInfo as getAvia } from '../../services/service-api';
import { showMoreTickets as moreTickets } from '../../store/actions';
import EmptySearch from '../EmptySearch';

import classes from './TicketList.module.scss';

type AviaListType = {
  state: RootState,
  getId: () => void,
  getAviaInfo: (id: string) => void,
  showMoreTickets: () => void,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any, consistent-return
const TicketList: FC<AviaListType> = ({ state, getId, getAviaInfo, showMoreTickets }): any => {
  useEffect(() => {
    getId();
  }, []);

  useEffect(() => {
    if (!state.ticketReducer.stop && state.ticketReducer.id) {
      getAviaInfo(state.ticketReducer.id);
    }
  });

  const transferCountChecked = state.transferReducer.checkbox.filter((box: Checkbox) => box.checked);
  let checkboxSign: number | number[];
  if (transferCountChecked.length === 5) checkboxSign = -1;
  else if (transferCountChecked.length && transferCountChecked[0].name === 'Без пересадок') checkboxSign = 0;
  else checkboxSign = transferCountChecked.map((box) => (Number.isInteger(+box.name[0]) ? +box.name[0] : 2000));

  let ticketList;
  if (state.ticketReducer.aviaArr.length > 1) {
    const listCounted = state.ticketReducer.aviaArr.filter((ticket: TicketTypes) => {
      return ticket.segments.slice(0, -1).every((flight) => {
        if (!checkboxSign && !flight.stops.length) return true;
        if (checkboxSign === -1) return true;
        if (Array.isArray(checkboxSign) && checkboxSign.some((el) => el === flight.stops.length)) return true;
        return false;
      });
    });

    ticketList = listCounted.slice(0, state.ticketReducer.itemToShow).map((el) => {
      return (
        <li key={Math.random()} className={classes['tickets-item']}>
          <Tickets price={el.price} segments={el.segments} carrier={el.carrier} />
        </li>
      );
    });

    const buttonShowMore =
      // eslint-disable-next-line multiline-ternary
      !ticketList.length && !state.ticketReducer.error ? null : (
        <button className={classes['ticket-list__btn']} onClick={showMoreTickets}>
          Показать еще 5 билетов!
        </button>
      );

    const notFound = !ticketList.length && !state.ticketReducer.error ? <EmptySearch /> : null;

    return (
      <React.Fragment>
        <ul className={classes['ticket-list']}>
          {notFound}
          {ticketList}
          {buttonShowMore}
        </ul>
      </React.Fragment>
    );
  }
};

const mapStateToProps = (state: RootState) => {
  return { state };
};

const mapDispatchToProps = {
  getId: getID,
  getAviaInfo: getAvia,
  showMoreTickets: moreTickets,
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);
