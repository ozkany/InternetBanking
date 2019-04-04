import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransfersRoutingModule } from './transfers-routing.module';
import { MoneyOrderComponent } from './money-order/money-order.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { TransferActivitiesComponent } from './transfer-activities/transfer-activities.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../_core/store/transfer/transfer.reducers';
import { EffectsModule } from '@ngrx/effects';
import { TransferEffects } from '../_core/store/transfer/transfer.effects';

@NgModule({
  declarations: [
    MoneyOrderComponent,
    TransferActivitiesComponent
  ],
  imports: [
    CommonModule,
    TransfersRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    StoreModule.forFeature('transfers', reducer),
    EffectsModule.forFeature([TransferEffects])
  ]
})
export class TransfersModule { }
