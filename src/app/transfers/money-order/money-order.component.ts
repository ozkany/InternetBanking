import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MoneyOrderRequest, CustomerAccount } from '@core/models';
import { TransferFacade, TransferActions } from '@core/facades/transfer.facade';

@Component({
  selector: 'app-money-order',
  templateUrl: './money-order.component.html',
  styleUrls: ['./money-order.component.css']
})
export class MoneyOrderComponent implements OnInit {

  sourceAccount: CustomerAccount;
  formMoneyOrder: FormGroup;
  sourceAccountCurrencyCode: string;

  constructor(private fb: FormBuilder, public transferFacade: TransferFacade) { }

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

    this.transferFacade.dispatch(new TransferActions.CallMakeMoneyOrder(request));
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
