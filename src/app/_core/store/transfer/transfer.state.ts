import { TransferActivities } from '@core/models';

export interface State {
  transferActivities: TransferActivities;
  message: any;
}

export const initialState: State = {
  transferActivities: null,
  message: null
};
