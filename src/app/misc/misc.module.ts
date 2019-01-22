import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MiscRoutingModule } from './misc-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AlertComponent } from './alert/alert.component';
import { MenuComponent } from './menu/menu.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AlertComponent,
    MenuComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MiscRoutingModule,
    SharedModule
  ]
})
export class MiscModule { }
