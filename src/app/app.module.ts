import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { InterceptorModule } from './_core/interceptors/interceptor.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './misc/menu/menu.component';
import { SpinnerComponent } from './misc/spinner/spinner.component';
import { ApproveModule } from './approve/approve.module';
import { MiscModule } from './misc/misc.module';


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
    MiscModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

