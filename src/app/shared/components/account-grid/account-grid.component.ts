import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { AccountFacade } from '@core/facades/account.facade';
import { CustomerAccount } from '@core/models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-account-grid',
  templateUrl: './account-grid.component.html',
  styleUrls: ['./account-grid.component.css']
})
export class AccountGridComponent implements OnInit, OnDestroy {

  @Input() accountListToView: CustomerAccount[];

  @Output() detailsButtonClicked = new EventEmitter<CustomerAccount>();
  @Output() activitiesButtonClicked = new EventEmitter<string>();

  subscription: Subscription = new Subscription();

  constructor(public accountFacade: AccountFacade) { }

  ngOnInit() {
   if (this.accountListToView == null) {
      this.subscription.add(this.accountFacade.accounts$.subscribe(res => this.accountListToView = res));
    }
  }

  onDetailsButtonClick(account) {
    this.detailsButtonClicked.emit(account);
  }

  onActivitiesButtonClick(accountId: string) {
    this.activitiesButtonClicked.emit(accountId);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
