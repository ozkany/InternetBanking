import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer } from '@core/store/transfer/transfer.reducers';
import { EffectsModule } from '@ngrx/effects';
import { TransferEffects } from '@core/store/transfer/transfer.effects';
import { TransfersRoutingModule } from './transfers-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MoneyOrderComponent } from './money-order/money-order.component';
import { TransferActivitiesComponent } from './transfer-activities/transfer-activities.component';

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
