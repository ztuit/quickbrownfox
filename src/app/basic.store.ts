import { Action } from 'redux';
import { QbfActions } from './qbf.actions';
import { ActionWithPayload } from './qbf.actions';

export class Word{
  label: string;
  value: number;
  speed: number;
}

export interface IAppState {
  currentBuffer: string;
  words: Word[];
  score: number;
}

export const INITIAL_STATE: IAppState = {
  currentBuffer: '', words:[], score:0
};

export function rootReducer(lastState: IAppState, action: Action): IAppState {
  switch(action.type) {
    case QbfActions.ACTION_TIMER_TICK: return lastState;
    case QbfActions.ACTION_CHARACTER_ADDED:
      var actionWP = action as ActionWithPayload;
    
      return { currentBuffer: ''+actionWP.payload, words:lastState.words, score: lastState.score };


}

  // We don't care about any other actions right now.
  return lastState;
}
