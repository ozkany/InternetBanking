import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountFacade, AccountActions } from '@core/facades/account.facade';

@Component({
  selector: 'app-account-activities',
  templateUrl: './account-activities.component.html',
  styleUrls: ['./account-activities.component.css']
})
export class AccountActivitiesComponent implements OnInit, OnDestroy {

  constructor(public accountFacade: AccountFacade) { }

  ngOnInit() {
  }

  onReceiptButtonClick(accountId: string, receiptId: string) {
    this.accountFacade.dispatch(new AccountActions.CallReceipt({ accountId, receiptId }));
  }

  ngOnDestroy() {
  }

}
