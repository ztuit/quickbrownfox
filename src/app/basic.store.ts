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
      return checkScore({ currentBuffer: ''+actionWP.payload, words:lastState.words, score: lastState.score });
    case QbfActions.ACTION_WORD_ADDED:
      var actionWP = action as ActionWithPayload;
      var wordSet = lastState.words.slice(0)
      wordSet.push({label:''+actionWP.payload, value:1, speed:1});
      return {currentBuffer:lastState.currentBuffer, words:wordSet,score: lastState.score}
}

function checkScore(appState : IAppState) : IAppState {
      var fw = appState.words.find(function(w){
        return w.label===appState.currentBuffer;
      });

      if(fw){
          appState.score += fw.value;
          var index = appState.words.indexOf(fw);
          appState.words.splice(index,1);
      }
      return appState;
    }

  // We don't care about any other actions right now.
  return lastState;
}
