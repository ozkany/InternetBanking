import { Component, OnInit, Input } from '@angular/core';
import { AccountStore } from 'src/app/_core/stores/account.store';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  constructor(public accountStore: AccountStore) { }

  ngOnInit() {

  }

}
