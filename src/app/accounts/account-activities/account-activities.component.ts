import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AccountStore } from 'src/app/_core/stores/account.store';

@Component({
  selector: 'app-account-activities',
  templateUrl: './account-activities.component.html',
  styleUrls: ['./account-activities.component.css']
})
export class AccountActivitiesComponent implements OnInit, OnDestroy {

  constructor(public accountStore: AccountStore) { }

  ngOnInit() {
    this.accountStore.fetchAccountActivity();
  }

  onReceiptButtonClick(receiptId: string) {
    console.log("onReceiptButtonClick: ", receiptId);
    this.accountStore.fetchReceipt(receiptId);
  }

  ngOnDestroy() {
  }

}
