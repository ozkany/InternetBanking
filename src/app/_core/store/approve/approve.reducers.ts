import * as ApproveActions from './approve.actions';

export interface State {
    tranApproveData: any;
    confirmSmsData: any;
    finishData: any;
}

const initialState: State = {
    tranApproveData: null,
    confirmSmsData: null,
    finishData: null
}

export function reducer(state = initialState, action: ApproveActions.ApproveActions): State {
    switch (action.type) {
        case ApproveActions.SET_TRAN_APPROVE_DATA:
            return {
                ...state,
                tranApproveData: action.payload
            }
        case ApproveActions.SET_CONFIRM_SMS_DATA:
            return {
                ...state,
                confirmSmsData: action.payload
            }
        case ApproveActions.SET_FINISH_DATA:
            return {
                ...state,
                finishData: action.payload
            }
        default:
            return state;
    }
    
}