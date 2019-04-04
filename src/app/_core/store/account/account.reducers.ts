import * as AccountActions from './account.actions';
import { CustomerAccount } from '../../models/accounts/account.model';
import { Action, createFeatureSelector, createSelector } from '@ngrx/store'
import { GetAssetsRootResponse } from '../../models/accounts/assets.model';

export interface State {
    accounts: CustomerAccount[];
    isDirty: boolean;
    selectedAccountId: string;
    accountActivities: Object;
    receipt: Object;
    assets: GetAssetsRootResponse;
}

const initialState: State = {
    accounts: [],
    isDirty: true,
    selectedAccountId: '',
    accountActivities: null,
    receipt: null,
    assets: null
};

// selectors >
const getAccountsState = createFeatureSelector<State>('accounts');

export const getAccounts = createSelector(
    getAccountsState,
    state => state.accounts
);

export const getIsDirty = createSelector(
    getAccountsState,
    state => state.isDirty
);

export const getSelectedAccountId = createSelector(
    getAccountsState,
    state => state.selectedAccountId
);

export const getSelectedAccount = createSelector(
    getAccountsState,
    getSelectedAccountId,
    (state, selectedAccountId) => state.accounts.find(a => a.id === selectedAccountId)
);
// < selectors


export function reducer(state = initialState, action: AccountActions.AccountActions): State {

    switch (action.type) {
        case AccountActions.SET_ACCOUNTS:
            return {
                ...state,
                accounts: action.payload
            }
        case AccountActions.SET_ACCOUNT_ACTIVITIES:
            return {
                ...state,
                accountActivities: action.payload
            }
        case AccountActions.SET_RECEIPT:
            return {
                ...state,
                receipt: action.payload
            }
        case AccountActions.SET_ASSETS:
            return {
                ...state,
                assets: action.payload
            }
        default:
            return state;
    }
    
}
