import { Action } from 'redux';
import { BasicActions } from './basic.actions';

export interface IAppState {
  value: number;
}

export const INITIAL_STATE: IAppState = {
  value: 0,
};

export function rootReducer(lastState: IAppState, action: Action): IAppState {
  switch(action.type) {
    case BasicActions.ACTION_ONE: return { value: lastState.value + 1 };
    case BasicActions.ACTION_TWO: return { value: lastState.value - 1 };
  }

  // We don't care about any other actions right now.
  return lastState;
}
