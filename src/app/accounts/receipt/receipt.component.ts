import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromApp from 'src/app/_core/store/app.state';
import * as fromAccounts from '../../_core/store/account/account.reducers';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  accountState$: Observable<fromAccounts.State>;

  constructor(public store: Store<fromApp.AppState>) { }

  ngOnInit() {
    this.accountState$ = this.store.select('accounts');
  }

}
