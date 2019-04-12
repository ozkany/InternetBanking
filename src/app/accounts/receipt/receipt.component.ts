import { Component, OnInit, Input } from '@angular/core';
import { AccountFacade } from '@core/facades/account.facade';

@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.css']
})
export class ReceiptComponent implements OnInit {

  constructor(private accountFacade: AccountFacade) { }

  ngOnInit() {

  }

}
