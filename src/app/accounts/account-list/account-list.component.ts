import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/_core/services/account.service';
import { AccountStore } from 'src/app/_core/stores/account.store';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent implements OnInit {

  selectedAccountForDetails;

  constructor(private accountService: AccountService, public accountStore: AccountStore, private router: Router) { }

  ngOnInit() {
  }

  onActivitiesButtonClick(id: string) {
    this.accountStore.selectedAccountNumber.next(id);
    this.router.navigate(['/accounts/account-activities']);
  }

  onDetailsButtonClick(account) {
    this.selectedAccountForDetails = account;
    console.log("selectedAccountForDetails", account);
  }

}
