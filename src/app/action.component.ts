import { Component } from '@angular/core';

import { NgRedux } from '@angular-redux/store';
import { BasicActions } from './basic.actions';
import {IAppState} from "./basic.store";



import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'action-demo',
  templateUrl: './action.component.html',
  styleUrls: ['./app.component.css']
})

export class ActionComponent  {
  title = 'app works!';
  readonly count$: Observable<number>;


  constructor(
    private ngRedux: NgRedux<IAppState>, 
    private actions: BasicActions) {
  		this.count$ = ngRedux.select<number>('value');
    }



  actionOne() {
    this.ngRedux.dispatch(this.actions.actionOne());
  }

  actionTwo() {
    this.ngRedux.dispatch(this.actions.actionTwo());
  }
}
