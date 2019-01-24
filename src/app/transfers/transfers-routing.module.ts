import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoneyOrderComponent } from './money-order/money-order.component';

const routes: Routes = [
  { path: 'money-order', component: MoneyOrderComponent, data: { title: 'Para Gönderme' } },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransfersRoutingModule { }
