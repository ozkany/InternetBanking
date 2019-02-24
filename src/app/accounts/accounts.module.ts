import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';

import { AccountListComponent } from './account-list/account-list.component';
import { AccountActivitiesComponent } from './account-activities/account-activities.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { RecentTransfersComponent } from './recent-transfers/recent-transfers.component';
import { AssetsComponent } from './assets/assets.component';
import { GooglePieChartComponent } from 'src/app/misc/google-charts/google-pie-chart/google-pie-chart.component';
import { SharedModule } from '../shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../_core/store/account/account.reducers';

@NgModule({
  declarations: [
    AccountListComponent,
    AccountActivitiesComponent,
    ReceiptComponent,
    AccountDetailComponent,
    RecentTransfersComponent,
    AssetsComponent,
    GooglePieChartComponent
  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    SharedModule,
    StoreModule.forFeature('accounts', reducer)
  ],
  providers: []
})
export class AccountsModule { }
