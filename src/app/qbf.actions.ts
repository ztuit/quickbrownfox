import { Injectable } from '@angular/core';
import { Action } from 'redux';


export interface ActionWithPayload extends Action {
  payload: String;
}

@Injectable()
export class QbfActions {
  static ACTION_TIMER_TICK = 'ACTION_TIMER_TICK';
  static ACTION_CHARACTER_ADDED = 'ACTION_CHARACTER_ADDED';
  static ACTION_WORD_ADDED = 'ACTION_KEY_TYPED';

  actionTimerTick(): Action {
    return { type: QbfActions.ACTION_TIMER_TICK };
  }

  actionCharacterAdded(value : String): ActionWithPayload {
    
    return { type: QbfActions.ACTION_CHARACTER_ADDED, payload: value };
  }

  actionWordAdded(): Action {
    return { type: QbfActions.ACTION_WORD_ADDED };
  }
}
