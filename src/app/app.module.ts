import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { InterceptorModule } from './_core/interceptors/interceptor.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CampaignsComponent } from './_shared/components/campaigns/campaigns.component';
import { PaymentActivitiesComponent } from './_shared/components/payment-activities/payment-activities.component';
import { MenuComponent } from './_shared/components/menu/menu.component';
import { SpinnerComponent } from './_shared/components/spinner/spinner.component';
import { TransformStr } from './_shared/pipes/transform-str.pipe';
import { AlertComponent } from './_shared/components/alert/alert.component';
import { ShortenStr } from './_shared/pipes/shorten-str.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CampaignsComponent,
    PaymentActivitiesComponent,
    MenuComponent,
    SpinnerComponent,
    TransformStr,
    ShortenStr,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    InterceptorModule,
  ],
  //providers: [AccountService, MiscService],
  bootstrap: [AppComponent]
})
export class AppModule { }

