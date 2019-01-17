import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from 'src/app/_core/services/account.service';

@Component({
  selector: 'app-recent-transfers',
  templateUrl: './recent-transfers.component.html',
  styleUrls: ['./recent-transfers.component.css']
})
export class RecentTransfersComponent implements OnInit, OnDestroy {

  constructor(private accountService: AccountService) { }

  recentTransfersList: Object;

  subscription;

  ngOnInit() {

    this.subscription = this.accountService.getRecentTransfers().subscribe(
      (data) => {
        console.log(data);
        this.recentTransfersList = data;
      },
      (error) => {
        console.log("Data çekilemedi: " + error);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
