import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { CustomerAccount } from 'src/app/_core/models/accounts/account.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromAccounts from 'src/app/_core/store/account/account.reducers';
import * as fromApp from 'src/app/_core/store/app.state';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-accounts-combo-control',
  templateUrl: './accounts-combo.control.html'
})
export class AccountsComboControl implements OnInit, OnChanges {

  @Output() accountSelectionChangeEvent = new EventEmitter<CustomerAccount>();
  @Output() formReady = new EventEmitter<FormGroup>()
  @Input() set accountListData(value: CustomerAccount[]) { 
    this.accountList = this.accountListToView = value;
  }
  @Input() set currencyFilter(value: string) { 
    this.currencyFilter$.next(value); 
  }
  
  accountList: CustomerAccount[]; 
  accountListToView: CustomerAccount[];
  accountsComboForm: FormGroup;
  currencyFilter$ = new BehaviorSubject<string>('');
  
  accountState$: Observable<fromAccounts.State>;

  constructor(private fb: FormBuilder, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.accountsDataInit();
    this.createForm();
    this.setFilters();
  }

  accountsDataInit() {
    this.accountState$ = this.store.select('accounts');
    this.accountState$.pipe(take(1)).subscribe((res) => {
      if(!this.accountList) {
        this.accountListData = res.accounts;
      }
    });
  }

  createForm() {
    this.accountsComboForm = this.fb.group({
      accountId: null
    });

    this.formReady.emit(this.accountsComboForm);
  }

  setFilters() {
    this.currencyFilter$.subscribe(filter => {
      if (!!filter && !!this.accountList) {
        this.accountListToView = this.accountList.filter(a => a.currencyCode == filter);
      }
    });
  }

  onChange(accountId: string) {
    this.accountSelectionChangeEvent.emit(this.accountList.find(a => a.id == accountId));
  }

  ngOnChanges(changes: SimpleChanges) {
    // if (changes.accountList  && !changes.accountList.firstChange) {
    //   this.accountListFiltered = this.accountList;
    // }
    return;
  }

}
