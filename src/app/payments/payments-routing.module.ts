import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentActivitiesComponent } from './payment-activities/payment-activities.component';

const routes: Routes = [
  { path: 'payment-activities', component: PaymentActivitiesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
