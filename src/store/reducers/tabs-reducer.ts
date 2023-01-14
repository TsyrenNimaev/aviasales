import { GetInfoActionTypes } from '../actions';

export interface TabsAction {
  type: string;
  name: string;
}

export interface Tabs {
  name: string;
  checked: boolean;
}

export type TabsState = {
  tabs: Tabs[],
};

const initialState = {
  tabs: [
    { name: 'самый дешевый', checked: true },
    { name: 'самый быстрый', checked: false },
  ],
};

const tabsReducer = (state = initialState, action: TabsAction) => {
  switch (action.type) {
    case GetInfoActionTypes.TOGGLE_FILTER: {
      const newFilter = state.tabs.map((el): Tabs => {
        return { ...el, checked: !el.checked };
      });
      return { ...state, tabs: newFilter };
    }
    default:
      return state;
  }
};

export default tabsReducer;
