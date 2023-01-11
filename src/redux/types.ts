import { ChechboxState } from './reducers/transfer-reducer';
import { TicketState } from './actions';
import { TabsState } from './reducers/tabs-reducer';

export type State = {
  transferReducer: ChechboxState,
  ticketReducer: TicketState,
  tabsReducer: TabsState,
};

export type TicketTypes = {
  price: number,
  carrier: string,
  segments: [
    {
      origin: string,
      destination: string,
      date: string,
      stops: string[],
      duration: number,
    },
    {
      origin: string,
      destination: string,
      date: string | number | Date,
      stops: string[],
      duration: number,
    }
  ],
};
