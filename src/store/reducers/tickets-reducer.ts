import { TicketState, GetInfoActionTypes, GetCombinateTypes } from '../actions';
import { TicketTypes } from '../types';

const initialState: TicketState = {
  aviaArr: [],
  error: null,
  stop: false,
  id: '',
  itemToShow: 5,
};

const ticketReducer = (state = initialState, action: GetCombinateTypes): TicketState => {
  switch (action.type) {
    case GetInfoActionTypes.ID:
      return { ...state, id: action.payload };
    case GetInfoActionTypes.GETINFO_LOAD:
      return { ...state, stop: action.stop };
    case GetInfoActionTypes.GETINFO_SUCCESS: {
      const load = [...state.aviaArr, ...action.payload].sort((a, b) => a.price - b.price);
      return { ...state, aviaArr: load, stop: action.stop, error: false };
    }
    case GetInfoActionTypes.GETINFO_ERROR:
      return { ...state, error: true };
    case GetInfoActionTypes.ADD_ITEM:
      return { ...state, itemToShow: state.itemToShow + 5 };
    case GetInfoActionTypes.TOGGLE_FILTER: {
      let sortedList: TicketTypes[] = [];
      const cheapestList = [...state.aviaArr].sort((a, b) => a.price - b.price);
      const fastestList = [...state.aviaArr].sort((a, b) => {
        return a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration);
      });
      if (action.name === 'самый дешевый') sortedList = cheapestList;
      if (action.name === 'самый быстрый') sortedList = fastestList;
      return { ...state, aviaArr: sortedList };
    }
    default:
      return state;
  }
};

export default ticketReducer;
