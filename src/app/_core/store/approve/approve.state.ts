import { ApproveTranData, ApproveCompletedResponse } from '../../models';

export interface State {
  tranData: ApproveTranData;
  confirmSmsData: any;
  completedResponse: ApproveCompletedResponse;
  info: string;
}

export const initialState: State = {
  tranData: null,
  confirmSmsData: null,
  completedResponse: null,
  info: ''
};
