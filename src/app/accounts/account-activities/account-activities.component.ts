import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AccountService } from 'src/app/_core/services/account.service';
import { AccountStore } from 'src/app/_core/stores/account.store';

@Component({
  selector: 'app-account-activities',
  templateUrl: './account-activities.component.html',
  styleUrls: ['./account-activities.component.css']
})
export class AccountActivitiesComponent implements OnInit, OnDestroy {
  activityData: Object;
  dataSubscription;

  constructor(private accountService: AccountService, public accountStore: AccountStore) { }

  ngOnInit() {
    this.dataSubscription = this.accountStore.selectedAccountNumber.subscribe(selectedAccountNumber => {
      console.log("accountid=" + selectedAccountNumber);
      this.accountService.getAccountActivities(selectedAccountNumber).subscribe(
        (result) => {
          this.activityData = result;
          console.log("AccountActivities", result);
        },
        (error) => {
          console.log("Data çekilemedi: " + error);
        }
      );
    });
  }

  onReceiptButtonClick(receiptId: string) {
    console.log("onReceiptButtonClick: ", receiptId);
    this.accountStore.fetchReceipt(receiptId);
  }

  ngOnDestroy() {
    this.dataSubscription && this.dataSubscription.unsubscribe();
    console.log("dataSubscription is unsubscribed");
  }

}
