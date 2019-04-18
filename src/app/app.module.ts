import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppRoutingModule } from './app-routing.module';
import { InterceptorModule } from './_core/interceptors/interceptor.module';
import { AppComponent } from './app.component';
import { ApproveModule } from './approve/approve.module';
import { MiscModule } from './misc/misc.module';
import { environment } from 'src/environments/environment';
import { reducers } from './_core/store/app.state';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    InterceptorModule,
    ApproveModule,
    MiscModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([]),
    !environment.production ? StoreRouterConnectingModule : [],
    StoreDevtoolsModule.instrument({
      name: 'Internet Banking',
      maxAge: 50,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
