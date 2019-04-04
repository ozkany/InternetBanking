import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CustomerAccount } from 'src/app/_core/models/accounts/account.model';
import { TransferService } from 'src/app/_core/services/transfer.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../../_core/store/app.state';
import * as TransferActions from 'src/app/_core/store/transfer/transfer.actions';

@Component({
  selector: 'app-money-order',
  templateUrl: './money-order.component.html',
  styleUrls: ['./money-order.component.css']
})
export class MoneyOrderComponent implements OnInit {

  sourceAccount: CustomerAccount;
  formMoneyOrder: FormGroup;
  sourceAccountCurrencyCode: string;

  constructor(private fb: FormBuilder, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formMoneyOrder = this.fb.group({
      amount: null,
      explanation: '',
      transactionDate: new Date().toISOString().split('T')[0]
    });
  }

  onSubmit() {
    console.log('submit clicked', this.formMoneyOrder.value);
    const f = this.formMoneyOrder.value;

    const request: MoneyOrderRequest = {
      sourceAccountId: f.sourceAccount.accountId,
      destinationAccountId: f.destinationAccount.accountId,
      amount: f.amount,
      explanation: f.explanation,
      transactionDate: f.transactionDate
    };

    this.store.dispatch(new TransferActions.CallMakeMoneyOrder(request));
  }

  sourceAccountChanged(account: CustomerAccount) {
    console.log('parent event received', account);
    this.sourceAccount = account;
    this.sourceAccountCurrencyCode = account.currencyCode;
  }

  formReady(name: string, form: FormGroup) {
    this.formMoneyOrder.setControl(name, form);
  }

}
