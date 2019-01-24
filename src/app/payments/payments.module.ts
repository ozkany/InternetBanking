import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentActivitiesComponent } from './payment-activities/payment-activities.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PaymentActivitiesComponent],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    SharedModule
  ]
})
export class PaymentsModule { }
