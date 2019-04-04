import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApproveRoutingModule } from './approve-routing.module';
import { ApproveComponent } from './approve/approve.component';
import { ConfirmSmsComponent } from './confirm-sms/confirm-sms.component';
import { FinishComponent } from './finish/finish.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from '../_core/store/approve/approve.reducers';
import { ApproveEffects } from '../_core/store/approve/approve.effects';

@NgModule({
  declarations: [ApproveComponent, ConfirmSmsComponent, FinishComponent],
  imports: [
    CommonModule,
    ApproveRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('approve', reducer),
    EffectsModule.forFeature([ApproveEffects])
  ],
  exports: [
    ApproveComponent
  ]
})
export class ApproveModule { }
