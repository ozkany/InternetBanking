import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), data: { title: 'Login' } },
  { path: 'accounts', loadChildren: () => import('./accounts/accounts.module').then(m => m.AccountsModule), canActivate: [AuthGuard] },
  { path: 'cards', loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule), canActivate: [AuthGuard] },
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule), canActivate: [AuthGuard] },
  { path: 'transfers', loadChildren: () => import('./transfers/transfers.module').then(m => m.TransfersModule), canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
