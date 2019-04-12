import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './account.state';
import { CustomerAccount } from '../../models/accounts/account.model';

export const getState = createFeatureSelector<State>('accounts');

export const Accounts = createSelector(
  getState,
  state => state.accounts
);

export const AccountActivities = createSelector(
  getState,
  state => state.accountActivities
);

export const Assets = createSelector(
  getState,
  state => state.assets
);

export const AssetsForView = createSelector(
  Assets,
  assets => {
    if (!!assets) {
      let data = assets.assetTypes.map(a => [a.title, a.totalAmount]);
      data = [['Asset Type', 'Amount'], ...data];
      return data;
    }
  }
);

export const Receipt = createSelector(
  getState,
  state => state.receipt
);

export const IsDirty = createSelector(
  getState,
  state => state.isDirty
);

export const SelectedAccountId = createSelector(
  getState,
  state => state.selectedAccountId
);

export const SelectedAccount = createSelector(
  getState,
  SelectedAccountId,
  (state, selectedAccountId) => {
    return state.accounts.find(a => a.id === selectedAccountId);
  }
);
