import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../_core/store/app.state';
import * as fromAccounts from '../../_core/store/account/account.reducers';
import * as AccountActions from 'src/app/_core/store/account/account.actions';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  selectedAccountForDetails;
  accountState$: Observable<fromAccounts.State>;

  constructor(private router: Router, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.accountState$ = this.store.select('accounts');
    this.store.dispatch(new AccountActions.CallGetAccounts());
  }

  onActivitiesButtonClick(id: string) {
    this.store.dispatch(new AccountActions.NavtoAccountActivities(id));
  }

  onDetailsButtonClick(account) {
    this.selectedAccountForDetails = account;
    console.log("selectedAccountForDetails", account);
  }

  refreshButtonClicked() {
    this.store.dispatch(new AccountActions.CallGetAccounts());
  }


}
