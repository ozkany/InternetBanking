import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApproveRoutingModule } from './approve-routing.module';
import { ApproveComponent } from './approve/approve.component';
import { ConfirmSmsComponent } from './confirm-sms/confirm-sms.component';
import { FinishComponent } from './finish/finish.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ApproveComponent, ConfirmSmsComponent, FinishComponent],
  imports: [
    CommonModule,
    ApproveRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    ApproveComponent
  ]
})
export class ApproveModule { }
