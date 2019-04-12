import { PaymentActivityRootObject } from '@core/models';

export interface State {
  paymentActivities: PaymentActivityRootObject;
}

export const initialState: State = {
  paymentActivities: null
};
