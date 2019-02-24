import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from '../../_core/store/app.state';
import * as PaymentActions from 'src/app/_core/store/payment/payment.actions';
import * as fromPayment from 'src/app/_core/store/payment/payment.reducers';

@Component({
  selector: 'app-payment-activities',
  templateUrl: './payment-activities.component.html',
  styleUrls: ['./payment-activities.component.css']
})
export class PaymentActivitiesComponent implements OnInit {

  paymentState$: Observable<fromPayment.State>;

  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {

    this.paymentState$ = this.store.select('payments');
    this.store.dispatch(new PaymentActions.CallPaymentActivities());

  }

}
