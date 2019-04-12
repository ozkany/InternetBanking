import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountActivitiesComponent } from './account-activities/account-activities.component';
import { AssetsComponent } from './assets/assets.component';

const routes: Routes = [
  { path: 'account-list', component: AccountListComponent, data: { title: 'Account List' } },
  { path: 'account-activities', component: AccountActivitiesComponent, data: { title: 'Account Activities' } },
  { path: 'assets', component: AssetsComponent, data: { title: 'Assets / Debts' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
