import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './auth/auth.module#AuthModule', data: { title: 'Login' } },
  { path: 'accounts', loadChildren: './accounts/accounts.module#AccountsModule', canActivate: [AuthGuard] },
  { path: 'cards', loadChildren: './cards/cards.module#CardsModule', canActivate: [AuthGuard] },
  { path: 'payments', loadChildren: './payments/payments.module#PaymentsModule', canActivate: [AuthGuard] },
  { path: 'transfers', loadChildren: './transfers/transfers.module#TransfersModule', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
