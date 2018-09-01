import { Component } from '@angular/core';

import { NgRedux } from '@angular-redux/store';
import { QbfActions } from './qbf.actions';
import {IAppState} from "./basic.store";
import {Word} from "./basic.store";



import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'action-demo',
  templateUrl: './action.component.html',
  styleUrls: ['./app.component.css']
})

export class ActionComponent  {
  title = 'app works!';
  readonly score$: Observable<number>;
  words$: Observable<Word[]>;
  buffer$: Observable<string>;


  constructor(
    private ngRedux: NgRedux<IAppState>,
    private actions: QbfActions) {
  		this.score$ = ngRedux.select<number>('score');
      this.words$ = ngRedux.select<Word[]>('words');
      this.buffer$ = ngRedux.select<string>('currentBuffer');
    }



  actionEventTick() {
    this.ngRedux.dispatch(this.actions.actionTimerTick());
  }

  sendAddWord() {
    this.ngRedux.dispatch(this.actions.actionTimerTick());
  }

  sendLetterTypedEvent(e : any) {

    this.ngRedux.dispatch(this.actions.actionCharacterAdded(e.target.value));
  }
}
