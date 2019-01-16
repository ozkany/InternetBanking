import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/_core/services/account.service';

@Component({
  selector: 'app-recent-transfers',
  templateUrl: './recent-transfers.component.html',
  styleUrls: ['./recent-transfers.component.css']
})
export class RecentTransfersComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  recentTransfersList: Object;

  ngOnInit() {

    this.accountService.makeRecentTransfersCall().subscribe(
      (data) => {
        console.log(data);
        this.recentTransfersList = data;
      },
      (error) => {
        console.log("Data çekilemedi: " + error);
      }
    );

  }

}
