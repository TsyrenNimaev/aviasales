import { Dispatch } from 'redux';
import axios from 'axios';

import { GetInfoActionTypes, GetCombinateTypes } from '../store/actions';

export const getId = () => {
  return async (dispatch: Dispatch<GetCombinateTypes>) => {
    await axios
      .get('https://aviasales-test-api.kata.academy/search')
      .then((id) => dispatch({ type: GetInfoActionTypes.ID, payload: id.data.searchId }));
  };
};

export const getAviaInfo = (id: string) => {
  return async (dispatch: Dispatch<GetCombinateTypes>) => {
    try {
      const response = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`);
      dispatch({ type: GetInfoActionTypes.GETINFO_SUCCESS, payload: response.data.tickets, stop: response.data.stop });
    } catch (err) {
      dispatch({ type: GetInfoActionTypes.GETINFO_ERROR, payload: err });
    }
  };
};
