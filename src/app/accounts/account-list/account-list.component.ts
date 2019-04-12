import { Component, OnInit } from '@angular/core';
import { AccountFacade, AccountActions } from '@core/facades/account.facade';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  selectedAccountForDetails;

  constructor(private accountFacade: AccountFacade) { }

  ngOnInit() {
    this.accountFacade.dispatch(new AccountActions.CallGetAccounts());
  }

  onActivitiesButtonClick(id: string) {
    this.accountFacade.dispatch(new AccountActions.NavtoAccountActivities(id));
  }

  onDetailsButtonClick(account) {
    this.selectedAccountForDetails = account;
  }

  refreshButtonClicked() {
    this.accountFacade.dispatch(new AccountActions.CallGetAccounts());
  }

}
