import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

import { AppComponent }  from './app.component';


import { AppRoutingModule }     from './app.routing';


import { NgReduxModule, NgRedux } from '@angular-redux/store';




@NgModule({
  imports:	[
  				BrowserModule,
  				FormsModule,
  				AppRoutingModule,
  				HttpModule,
    			AppRoutingModule,
          BrowserModule,
          NgReduxModule
			],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ],
  providers:	[],
})

export class AppModule {

}
