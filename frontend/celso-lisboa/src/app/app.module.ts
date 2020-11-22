import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './pages/login/login.module';
import {Store, StoreModule} from '@ngrx/store';
import {HOME_STATE_NAME} from './pages/home/+state/home.states';
import {HomeReducer} from './pages/home/+state/reducers/home.reducers';
import {EffectsModule} from '@ngrx/effects';
import {HomeEffects} from './pages/home/+state/effects/hom.effects';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}),
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
