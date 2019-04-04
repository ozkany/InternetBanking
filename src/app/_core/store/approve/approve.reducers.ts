import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as ApproveActions from './approve.actions';
import { ApproveTranData } from '../../models/approve/approve-tran-data.model';

export interface State {
  approveTranData: ApproveTranData;
  confirmSmsData: any;
  completedResponse: ApproveCompletedResponse;
  info: string;
}

const initialState: State = {
  approveTranData: null,
  confirmSmsData: null,
  completedResponse: null,
  info: ''
};

export function reducer(state = initialState, action: ApproveActions.ApproveActions): State {
  switch (action.type) {
    case ApproveActions.ActionTypes.SET_TRAN_APPROVE_DATA:
      return {
        ...state,
        approveTranData: action.payload
      };
    case ApproveActions.ActionTypes.SET_CONFIRM_SMS_DATA:
      return {
        ...state,
        confirmSmsData: action.payload.confirmSmsData
      };
    case ApproveActions.ActionTypes.DO_CONFIRM_SMS_SUCCESS:
    case ApproveActions.ActionTypes.DO_CONFIRM_SMS_FAIL:
      return {
        ...state,
        completedResponse: action.payload
      };
    case ApproveActions.ActionTypes.DO_APPROVE_SUCCESS:
      return {
        ...state,
        info: action.payload
      };
    case ApproveActions.ActionTypes.DO_APPROVE_FAIL:
      return {
        ...state,
        info: action.payload
      };
    default:
      return state;
  }

}


// selectors >
const selectApproveState = createFeatureSelector<State>('approve');

export const selectApproveTranData = createSelector(
  selectApproveState,
  state => state.approveTranData
);

export const selectApproveConfirmSmsData = createSelector(
  selectApproveState,
  state => state.confirmSmsData
);

export const selectApproveCompletedData = createSelector(
  selectApproveState,
  state => state.completedResponse
);

export const selectApproveTranDataForView = createSelector(
  selectApproveState,
  state => {
    console.log('selectApproveTranDataForView', state.approveTranData);

    return state.approveTranData.tranData['summaries'].reduce((r, a) => {
      if (r != null && r.find(x => x.groupName === a.groupName)) {
        r.find(x => x.groupName === a.groupName).summaries.push(a);
      } else {
        r.push({ 'groupName': a.groupName, 'summaries': [a] });
      }

      return r;
    }, Object.create([]));
  }
);
// < selectors
