import * as PaymentActions from './payment.actions';
import { PaymentActivityRootObject } from '../../models/payment-activity.model';

export interface State {
    paymentActivities: PaymentActivityRootObject;
}

const initialState: State = {
    paymentActivities: null
};

export function reducer(state = initialState, action: PaymentActions.PaymentActions): State {
    switch (action.type) {
        case PaymentActions.SET_PAYMENT_ACTIVITIES:
            return {
                ...state,
                paymentActivities: action.payload
            };
        default:
            return state;
    }
}