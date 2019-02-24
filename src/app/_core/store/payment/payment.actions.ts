import { Action } from '@ngrx/store';
import { PaymentActivityRootObject } from '../../models/payment-activity.model';

export const CALL_PAYMENT_ACTIVITIES = 'CALL_PAYMENT_ACTIVITIES';
//
export const SET_PAYMENT_ACTIVITIES = 'SET_PAYMENT_ACTIVITIES';

export class CallPaymentActivities implements Action {
    readonly type = CALL_PAYMENT_ACTIVITIES;
}

export class SetPaymentActivities implements Action {
    readonly type = SET_PAYMENT_ACTIVITIES;

    constructor(public payload: PaymentActivityRootObject) {}
}

export type PaymentActions = CallPaymentActivities | SetPaymentActivities;