import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActionComponent }  from './action.component';
import { DashboardComponent }  from './dashboard.component';



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'action',     component: ActionComponent },
  { path: 'dashboard',     component: DashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
