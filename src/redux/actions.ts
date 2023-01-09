import { ChangeEvent } from 'react';

// eslint-disable-next-line import/prefer-default-export, no-shadow
export enum GetInfoActionTypes {
  TOGGLE = 'TOGGLE',
  ALL = 'ALL',
}

interface ChechboxAll {
  type: GetInfoActionTypes.ALL;
}

interface ChechboxToggle {
  type: GetInfoActionTypes.TOGGLE;
  name: ChangeEvent<HTMLInputElement>;
}

export const toggle = (event: ChangeEvent<HTMLInputElement>) => ({
  type: GetInfoActionTypes.TOGGLE,
  name: event.target.value,
});

export const toggleAll = () => ({
  type: GetInfoActionTypes.ALL,
});

export type GetCombinateTypes = ChechboxToggle | ChechboxAll;
