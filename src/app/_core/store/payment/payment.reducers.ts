import * as PaymentActions from './payment.actions';
import { State, initialState } from './payment.state';

export function reducer(state = initialState, action: PaymentActions.PaymentActions): State {
  switch (action.type) {
    case PaymentActions.ActionTypes.SET_PAYMENT_ACTIVITIES:
      return {
        ...state,
        paymentActivities: action.payload
      };
    default:
      return state;
  }
}
