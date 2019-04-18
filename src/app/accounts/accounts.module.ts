import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AccountsRoutingModule } from './accounts-routing.module';
import { SharedModule } from '../shared/shared.module';
import { reducer } from '@core/store/account/account.reducers';
import { AccountEffects } from '@core/store/account/account.effects';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountActivitiesComponent } from './account-activities/account-activities.component';
import { ReceiptComponent } from './receipt/receipt.component';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { AssetsComponent } from './assets/assets.component';
import { GooglePieChartComponent } from 'src/app/misc/google-charts/google-pie-chart/google-pie-chart.component';

@NgModule({
  declarations: [
    AccountListComponent,
    AccountActivitiesComponent,
    ReceiptComponent,
    AccountDetailsComponent,
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
