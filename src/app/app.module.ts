import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { InterceptorModule } from './_core/interceptors/interceptor.module';
import { AppComponent } from './app.component';
import { ApproveModule } from './approve/approve.module';
import { MiscModule } from './misc/misc.module';
import { environment } from 'src/environments/environment';
import { reducers } from './_core/store/app.state'
import { EffectsModule } from '@ngrx/effects'
import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { AuthEffects } from './_core/store/auth/auth.effects';
import { AccountEffects } from './_core/store/account/account.effects';
import { CardEffects } from './_core/store/card/card.effects';
import { PaymentEffects } from './_core/store/payment/payment.effects';

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
    EffectsModule.forRoot([AuthEffects, AccountEffects, CardEffects, PaymentEffects]),
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

