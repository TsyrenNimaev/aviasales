import { GetInfoActionTypes } from './actions';

interface Action {
  type: string;
  name: string;
}

export interface Checkbox {
  name: string;
  checked: boolean;
}

export type ChechboxState = {
  checkbox: Checkbox[],
};

const initialState = {
  checkbox: [
    { name: 'Все', checked: true },
    { name: 'Без пересадок', checked: true },
    { name: '1 пересадка', checked: true },
    { name: '2 пересадки', checked: true },
    { name: '3 пересадки', checked: true },
  ],
};

const all = (el: Checkbox, i: number, array: Checkbox[]) => {
  return { ...el, checked: !array[0].checked };
};

const allInChecked = (array: Checkbox[]) => {
  return array.map((el, i) => {
    if (i === 0) return { ...el, checked: !el.checked };
    return el;
  });
};

const toggleAdd = (array: Checkbox[]) => {
  const countFilter = [...array].reduce((acc: number, item) => {
    return item.checked ? acc + 1 : acc;
  }, 0);

  if (countFilter === 4 && !array[0].checked) return array.map(all);
  if (countFilter === 4) return allInChecked(array);

  return array;
};

const transferReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case GetInfoActionTypes.TOGGLE: {
      const newCheckbox = state.checkbox.map((el): Checkbox => {
        if (el.name === action.name) return { ...el, checked: !el.checked };
        return el;
      });
      return { ...state, checkbox: toggleAdd(newCheckbox) };
    }
    case GetInfoActionTypes.ALL: {
      const newBox = state.checkbox.map((el) => {
        return { ...el, checked: !state.checkbox[0].checked };
      });
      return { ...state, checkbox: newBox };
    }
    default:
      return state;
  }
};

export default transferReducer;
