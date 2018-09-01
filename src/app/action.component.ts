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
  addword = '';

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

  sendAddWord(e : any) {
    if(e.keyCode===13){
      this.ngRedux.dispatch(this.actions.actionWordAdded(e.target.value));
      this.addword='';
    }
  }

  sendLetterTypedEvent(e : any) {

    this.ngRedux.dispatch(this.actions.actionCharacterAdded(e.target.value));
  }
}
