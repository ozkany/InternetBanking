import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map } from 'rxjs/operators';
import * as PaymentActions from './payment.actions';
import { PaymentService } from '../../services/payment.service';

@Injectable()
export class PaymentEffects {

  @Effect()
  callPaymentActivities = this.actions$.pipe(
    ofType(PaymentActions.ActionTypes.CALL_PAYMENT_ACTIVITIES),
    switchMap(() => {
      console.log('payment effects call avtivities');
      return this.paymentService.getPaymentActivities();
    }),
    map((res) => {
      return new PaymentActions.SetPaymentActivities(res);
    })
  );

  constructor(private actions$: Actions, private paymentService: PaymentService) { }
}