import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PaymentActivitiesComponent } from './_shared/components/payment-activities/payment-activities.component';
import { AuthGuard } from './_core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},
  // { path: 'accounts/account-list', component: AccountListComponent },
  // { path: 'accounts/account-activities', component: AccountActivitiesComponent },
  // { path: 'accounts/recent-transfers', component: RecentTransfersComponent },
  { path: 'accounts', loadChildren: './accounts/accounts.module#AccountsModule', canActivate: [AuthGuard] },
  //{ path: 'cards/card-list', component: CardListComponent },
  { path: 'cards', loadChildren: './cards/cards.module#CardsModule', canActivate: [AuthGuard] },
  { path: 'misc/payment-activities', component: PaymentActivitiesComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
