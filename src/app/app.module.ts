import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


import { AppComponent }  from './app.component';
import { ActionComponent } from './action.component';
import { DashboardComponent } from './dashboard.component';
import { EntitySearchComponent } from './entity-search.component';

import { AppRoutingModule }     from './app.routing';


import { NgReduxModule, NgRedux } from '@angular-redux/store';
import { rootReducer, IAppState, INITIAL_STATE } from './basic.store';
import { BasicActions } from './basic.actions';
import { EntityService }         from './entity.service';


@NgModule({
  imports:	[
  				BrowserModule,
  				FormsModule,
  				AppRoutingModule,
  				HttpModule,
          InMemoryWebApiModule.forRoot(InMemoryDataService),
    			AppRoutingModule,
          BrowserModule,
          NgReduxModule
			],
  declarations: [ AppComponent, ActionComponent, DashboardComponent, EntitySearchComponent],
  bootstrap:    [ AppComponent ],
  providers:	[BasicActions,EntityService]
})

export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
      // Tell @angular-redux/store about our rootReducer and our initial state.
      // It will use this to create a redux store for us and wire up all the
      // events.
      ngRedux.configureStore(
        rootReducer,
        INITIAL_STATE);
    }
}
