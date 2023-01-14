import { ChangeEvent } from 'react';

import { TicketTypes } from './types';

export interface TicketState {
  aviaArr: TicketTypes[];
  id: string;
  error: null | boolean;
  stop: boolean;
  itemToShow: number;
}

// eslint-disable-next-line import/prefer-default-export, no-shadow
export enum GetInfoActionTypes {
  TOGGLE = 'TOGGLE',
  ALL = 'ALL',
  ID = 'ID',
  GETINFO_SUCCESS = 'GETINFO_SUCCESS',
  GETINFO_ERROR = 'GETINFO_ERROR',
  ADD_ITEM = 'ADD_ITEM',
  GETINFO_LOAD = 'GETINFO_LOAD',
  TOGGLE_FILTER = 'TOGGLE_FILTER',
}

interface ALL {
  type: GetInfoActionTypes.ALL;
}

interface TOGGLE {
  type: GetInfoActionTypes.TOGGLE;
  name: ChangeEvent<HTMLInputElement>;
}

interface ID {
  type: GetInfoActionTypes.ID;
  payload: string;
}

interface GETINFO_SUCCESS {
  type: GetInfoActionTypes.GETINFO_SUCCESS;
  payload: TicketTypes[];
  stop: boolean;
}

interface GETINFO_ERROR {
  type: GetInfoActionTypes.GETINFO_ERROR;
  payload: unknown;
}

interface ADD_ITEM {
  type: GetInfoActionTypes.ADD_ITEM;
  payload: number;
}

interface GETINFO_LOAD {
  type: GetInfoActionTypes.GETINFO_LOAD;
  stop: boolean;
}

interface TOGGLE_FILTER {
  type: GetInfoActionTypes.TOGGLE_FILTER;
  payload: ChangeEvent<HTMLInputElement>;
  name: string;
  aviaArr?: TicketTypes[];
}

export const toggle = (event: ChangeEvent<HTMLInputElement>) => ({
  type: GetInfoActionTypes.TOGGLE,
  name: event.target.value,
});

export const toggleAll = () => ({
  type: GetInfoActionTypes.ALL,
});

export const showMoreTickets = () => ({
  type: GetInfoActionTypes.ADD_ITEM,
});

export const cheapestTicket = (event: ChangeEvent<HTMLInputElement>) => ({
  type: GetInfoActionTypes.TOGGLE_FILTER,
  name: event.target.value,
});

export type GetCombinateTypes =
  | TOGGLE
  | ALL
  | ID
  | GETINFO_SUCCESS
  | GETINFO_ERROR
  | ADD_ITEM
  | GETINFO_LOAD
  | TOGGLE_FILTER;
