import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApproveComponent } from './approve/approve.component';
import { ConfirmSmsComponent } from './confirm-sms/confirm-sms.component';
import { FinishComponent } from './finish/finish.component';

const routes: Routes = [
  { path: 'approve', component: ApproveComponent, data: { title: 'Transaction Approve' } },
  { path: 'confirm-sms', component: ConfirmSmsComponent, data: { title: 'Sms Code Validation' } },
  { path: 'finish', component: FinishComponent, data: { title: 'Transaction Completed' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApproveRoutingModule { }
