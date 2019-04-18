import { Component, OnInit } from '@angular/core';
import { PaymentFacade, PaymentActions } from '@core/facades/payment.facade';

@Component({
  selector: 'app-payment-activities',
  templateUrl: './payment-activities.component.html',
  styleUrls: ['./payment-activities.component.css']
})
export class PaymentActivitiesComponent implements OnInit {

  constructor(public paymentFacade: PaymentFacade) { }

  ngOnInit() {
    this.paymentFacade.dispatch(new PaymentActions.CallPaymentActivities());
  }
}
