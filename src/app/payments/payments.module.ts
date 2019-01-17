import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentActivitiesComponent } from './payment-activities/payment-activities.component';

@NgModule({
  declarations: [PaymentActivitiesComponent],
  imports: [
    CommonModule,
    PaymentsRoutingModule
  ]
})
export class PaymentsModule { }
