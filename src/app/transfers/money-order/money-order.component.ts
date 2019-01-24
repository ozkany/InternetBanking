import { Component, OnInit } from '@angular/core';
import { AccountStore } from 'src/app/_core/stores/account.store';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { CustomerAccount } from 'src/app/_core/models/accounts/account.model';
import { BehaviorSubject } from 'rxjs';

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
    private accountStore: AccountStore, 
    private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formMoneyOrder = this.fb.group({
      amount: null,
      explanation: '',
      transactionDate: null
    });
  }

  onSubmit() {
    console.log("submit clicked", this.formMoneyOrder.value);
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
