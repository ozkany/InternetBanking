import { Component, OnInit } from '@angular/core';
import { AccountStore } from 'src/app/_core/stores/account.store';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CustomerAccount } from 'src/app/_core/models/accounts/account.model';
import { BehaviorSubject } from 'rxjs';
import { TransferService } from 'src/app/_core/services/transfer.service';

@Component({
  selector: 'app-money-order',
  templateUrl: './money-order.component.html',
  styleUrls: ['./money-order.component.css']
})
export class MoneyOrderComponent implements OnInit {

  sourceAccount: CustomerAccount;
  formMoneyOrder: FormGroup;
  sourceAccountCurrencyCode: string;

  constructor(
    public accountStore: AccountStore, 
    private fb: FormBuilder,
    private transferService: TransferService) { }

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
    console.log("submit clicked", this.formMoneyOrder.value);
    const f = this.formMoneyOrder.value;
    this.transferService.makeMoneyOrder(f.sourceAccount.accountId, f.destinationAccount.accountId, f.amount, f.explanation, f.transactionDate);
  }

  sourceAccountChanged(account: CustomerAccount) {
    console.log("parent event received", account);
    this.sourceAccount = account;
    this.sourceAccountCurrencyCode = account.currencyCode;
  }

  formReady(name: string, form: FormGroup) {
    this.formMoneyOrder.setControl(name, form);
  }

}
