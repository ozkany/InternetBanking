import { Component, OnInit } from '@angular/core';
import { PaymentStore } from 'src/app/_core/stores/payment.store';

@Component({
  selector: 'app-payment-activities',
  templateUrl: './payment-activities.component.html',
  styleUrls: ['./payment-activities.component.css']
})
export class PaymentActivitiesComponent implements OnInit {

  constructor(public paymentStore: PaymentStore) { }

  ngOnInit() {

    this.paymentStore.fetchPaymentActivities();

  }

}
