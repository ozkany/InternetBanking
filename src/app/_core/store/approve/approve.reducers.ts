import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as ApproveActions from './approve.actions';
import { State, initialState } from './approve.state';


export function reducer(state = initialState, action: ApproveActions.ApproveActions): State {
  switch (action.type) {
    case ApproveActions.ActionTypes.SET_TRAN_APPROVE_DATA:
      return {
        ...state,
        tranData: action.payload
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
