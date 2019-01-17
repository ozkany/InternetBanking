import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountStore } from 'src/app/_core/stores/account.store';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  selectedAccountForDetails;

  constructor(public accountStore: AccountStore, private router: Router) { }

  ngOnInit() {
  }

  onActivitiesButtonClick(id: string) {
    this.accountStore.setSelectedAccountNumber(id);
    this.router.navigate(['/accounts/account-activities']);
  }

  onDetailsButtonClick(account) {
    this.selectedAccountForDetails = account;
    console.log("selectedAccountForDetails", account);
  }

}
