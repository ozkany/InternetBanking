import { Component, OnInit } from '@angular/core';
import { MiscService } from 'src/app/_core/services/misc.service';

@Component({
  selector: 'app-payment-activities',
  templateUrl: './payment-activities.component.html',
  styleUrls: ['./payment-activities.component.css']
})
export class PaymentActivitiesComponent implements OnInit {

  constructor(private miscService: MiscService) { }

  paymentActivityList: Object;

  ngOnInit() {

    this.miscService.makeGetPaymentActivitiesCall().subscribe(
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

}
