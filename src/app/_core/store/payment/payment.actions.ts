import { Action } from '@ngrx/store';
import { PaymentActivityRootObject } from '../../models/payments/payment-activity.model';

export const enum ActionTypes {
  CALL_PAYMENT_ACTIVITIES = 'CALL_PAYMENT_ACTIVITIES',
  SET_PAYMENT_ACTIVITIES = 'SET_PAYMENT_ACTIVITIES'
}
export class CallPaymentActivities implements Action {
  readonly type = ActionTypes.CALL_PAYMENT_ACTIVITIES;
}

export class SetPaymentActivities implements Action {
  readonly type = ActionTypes.SET_PAYMENT_ACTIVITIES;
  constructor(public payload: PaymentActivityRootObject) { }
}

export type PaymentActions = CallPaymentActivities | SetPaymentActivities;
