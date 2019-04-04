import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentsRoutingModule } from './payments-routing.module';
import { PaymentActivitiesComponent } from './payment-activities/payment-activities.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/_core/store/payment/payment.reducers';
import { EffectsModule } from '@ngrx/effects';
import { PaymentEffects } from '../_core/store/payment/payment.effects';

@NgModule({
  declarations: [PaymentActivitiesComponent],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    SharedModule,
    StoreModule.forFeature('payments', reducer),
    EffectsModule.forFeature([PaymentEffects]),
  ]
})
export class PaymentsModule { }
