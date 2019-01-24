import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransfersRoutingModule } from './transfers-routing.module';
import { MoneyOrderComponent } from './money-order/money-order.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MoneyOrderComponent],
  imports: [
    CommonModule,
    TransfersRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class TransfersModule { }
