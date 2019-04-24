import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap, map, catchError } from 'rxjs/operators';
import * as PaymentActions from './payment.actions';
import * as CommonActions from '../common/common.actions';
import { PaymentService } from '@core/services/payment.service';

@Injectable()
export class PaymentEffects {

  @Effect()
  callPaymentActivities = this.actions$.pipe(
    ofType(PaymentActions.ActionTypes.CALL_PAYMENT_ACTIVITIES),
    switchMap(() => {
      console.log('payment effects call avtivities');
      return this.paymentService.getPaymentActivities().pipe(
        map((res) => new PaymentActions.SetPaymentActivities(res)),
        catchError(error => of(new CommonActions.EffectError({
          detail: error,
          location: PaymentActions.ActionTypes.CALL_PAYMENT_ACTIVITIES
        })))
      );
    })
  );

  constructor(private actions$: Actions, private paymentService: PaymentService) { }
}
