import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';

import { AccountListComponent } from './account-list/account-list.component';
import { AccountActivitiesComponent } from './account-activities/account-activities.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { AssetsComponent } from './assets/assets.component';
import { GooglePieChartComponent } from 'src/app/misc/google-charts/google-pie-chart/google-pie-chart.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../_core/store/account/account.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AccountEffects } from '../_core/store/account/account.effects';

@NgModule({
  declarations: [
    AccountListComponent,
    AccountActivitiesComponent,
    ReceiptComponent,
    AccountDetailComponent,
    AssetsComponent,
    GooglePieChartComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    SharedModule,
    StoreModule.forFeature('accounts', reducer),
    EffectsModule.forFeature([AccountEffects])
  ],
  providers: []
})
export class AccountsModule { }
