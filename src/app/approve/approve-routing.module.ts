import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApproveComponent } from './approve/approve.component';
import { ConfirmSmsComponent } from './confirm-sms/confirm-sms.component';
import { FinishComponent } from './finish/finish.component';

const routes: Routes = [
  { path: 'approve', component: ApproveComponent, data: { title: 'İşlem Onay' } },
  { path: 'confirm-sms', component: ConfirmSmsComponent, data: { title: 'Sms Şifre Girişi' } },
  { path: 'finish', component: FinishComponent, data: { title: 'İşlem Tamamlandı' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApproveRoutingModule { }
