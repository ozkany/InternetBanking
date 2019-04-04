import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoneyOrderComponent } from './money-order/money-order.component';
import { TransferActivitiesComponent } from './transfer-activities/transfer-activities.component';

const routes: Routes = [
  { path: 'money-order', component: MoneyOrderComponent, data: { title: 'Money Order' } },
  { path: 'transfer-activities', component: TransferActivitiesComponent, data: { title: 'Transfer Activities' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransfersRoutingModule { }
