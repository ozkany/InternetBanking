import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountActivitiesComponent } from './account-activities/account-activities.component';
import { RecentTransfersComponent } from './recent-transfers/recent-transfers.component';
import { AssetsComponent } from './assets/assets.component';
import { AuthGuard } from '../_core/guards/auth.guard';

const routes: Routes = [
  { path: 'account-list', component: AccountListComponent },
  { path: 'account-activities', component: AccountActivitiesComponent },
  { path: 'recent-transfers', component: RecentTransfersComponent },
  { path: 'assets', component: AssetsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountsRoutingModule { }
