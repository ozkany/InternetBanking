import { Component, OnInit, OnDestroy } from '@angular/core';
import { MiscService } from 'src/app/_core/services/misc.service';

@Component({
  selector: 'app-payment-activities',
  templateUrl: './payment-activities.component.html',
  styleUrls: ['./payment-activities.component.css']
})
export class PaymentActivitiesComponent implements OnInit, OnDestroy {

  constructor(private miscService: MiscService) { }

  paymentActivityList: Object;

  subscription;

  ngOnInit() {

    this.subscription = this.miscService.getPaymentActivities().subscribe(
      (data) => 
      {
        console.log(data);
        this.paymentActivityList = data;
      },
      (error) => {
        console.log("Data çekilemedi: " + error);
      }
    );

  }

  ngOnDestroy(): void {
    this.subscription.ubsubscribe();
  }

}
