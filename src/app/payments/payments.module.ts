import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PaymentsRoutingModule } from './payments-routing.module';
import { SharedModule } from '../shared/shared.module';
import { reducer } from '@core/store/payment/payment.reducers';
import { PaymentEffects } from '@core/store/payment/payment.effects';
import { PaymentActivitiesComponent } from './payment-activities/payment-activities.component';

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
