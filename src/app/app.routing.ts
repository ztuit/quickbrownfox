import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActionComponent }  from './action.component';
import { LeaderBoardComponent }  from './leaderboard.component';



const routes: Routes = [
  { path: 'play',     component: ActionComponent },
  { path: 'leaderboard',     component: LeaderBoardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
