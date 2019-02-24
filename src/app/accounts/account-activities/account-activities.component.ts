import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from 'src/app/_core/store/app.state';
import * as fromAccounts from '../../_core/store/account/account.reducers';
import * as AccountActions from 'src/app/_core/store/account/account.actions';

@Component({
  selector: 'app-account-activities',
  templateUrl: './account-activities.component.html',
  styleUrls: ['./account-activities.component.css']
})
export class AccountActivitiesComponent implements OnInit, OnDestroy {

  accountState$: Observable<fromAccounts.State>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.accountState$ = this.store.select('accounts');
  }

  onReceiptButtonClick(accountId: string, receiptId: string) {
    this.store.dispatch(new AccountActions.CallReceipt({ accountId, receiptId }));
  }

  ngOnDestroy() {
  }

}
