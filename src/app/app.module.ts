import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { InterceptorModule } from './_core/interceptors/interceptor.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CampaignsComponent } from './shared/campaigns/campaigns.component';
import { MenuComponent } from './shared/menu/menu.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { AlertComponent } from './shared/alert/alert.component';
import { TransformStr } from './_core/pipes/transform-str.pipe';
import { ShortenStr } from './_core/pipes/shorten-str.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CampaignsComponent,
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

