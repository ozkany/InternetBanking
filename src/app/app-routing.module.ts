import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_core/guards/auth.guard';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  //{ path: 'login', component: LoginComponent, data: { title: 'İnternet Şube Login' } },
  { path: 'login', loadChildren: './login/login.module#LoginModule', data: { title: 'İnternet Şube Login' } },
  // { path: 'accounts/account-list', component: AccountListComponent },
  // { path: 'accounts/account-activities', component: AccountActivitiesComponent },
  // { path: 'accounts/recent-transfers', component: RecentTransfersComponent },
  { path: 'accounts', loadChildren: './accounts/accounts.module#AccountsModule', canActivate: [AuthGuard] },
  //{ path: 'cards/card-list', component: CardListComponent },
  { path: 'cards', loadChildren: './cards/cards.module#CardsModule', canActivate: [AuthGuard] },
  { path: 'payments', loadChildren: './payments/payments.module#PaymentsModule', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
