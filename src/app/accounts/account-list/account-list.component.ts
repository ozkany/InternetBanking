import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AccountFacade, AccountActions } from '@core/facades/account.facade';
declare var $: any;

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  @ViewChild('accountDetailsComponent', { read: ElementRef })
  accountDetailsComponentDOM: ElementRef<HTMLDivElement>;

  selectedAccountForDetails;

  constructor(public accountFacade: AccountFacade) { }

  ngOnInit() {
    this.accountFacade.dispatch(new AccountActions.CallGetAccounts());
  }

  accountGridDetailsButtonClicked(account) {
    this.selectedAccountForDetails = account;
    $(this.accountDetailsComponentDOM.nativeElement.children.namedItem('accountDetailsModalCenter')).modal('show');
  }

  accountGridActivitiesButtonClicked(accountId: string) {
    this.accountFacade.dispatch(new AccountActions.NavtoAccountActivities({ accountId: accountId }));
  }

  refreshButtonClicked() {
    this.accountFacade.dispatch(new AccountActions.CallGetAccounts());
  }

}
