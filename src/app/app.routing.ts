import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActionComponent }  from './action.component';
import { LeaderBoardComponent }  from './leaderboard.component';



const routes: Routes = [
  { path: '', redirectTo: '/leaderboard', pathMatch: 'full' },
  { path: 'play',     component: ActionComponent },
  { path: 'leaderboard',     component: LeaderBoardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes,{useHash: true}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
