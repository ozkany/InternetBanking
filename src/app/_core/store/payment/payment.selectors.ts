import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './payment.state';

export const getState = createFeatureSelector<State>('payments');

export const PaymentActivities = createSelector(
  getState,
  state => state.paymentActivities
);
