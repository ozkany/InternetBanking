import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentActivitiesComponent } from './payment-activities/payment-activities.component';

const routes: Routes = [
  { path: 'payment-activities', component: PaymentActivitiesComponent, data: { title: 'Payment Activities' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
