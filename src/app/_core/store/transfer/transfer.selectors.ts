import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './transfer.state';

export const getState = createFeatureSelector<State>('transfers');

export const TransferActivities = createSelector(
  getState,
  state => state.transferActivities
);
