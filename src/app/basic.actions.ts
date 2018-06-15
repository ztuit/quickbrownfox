import { Injectable } from '@angular/core';
import { Action } from 'redux';

@Injectable()
export class BasicActions {
  static ACTION_ONE = 'ACTION_ONE';
  static ACTION_TWO = 'ACTION_TWO';

  actionOne(): Action {
    return { type: BasicActions.ACTION_ONE };
  }

  actionTwo(): Action {
    return { type: BasicActions.ACTION_TWO };
  }
}
