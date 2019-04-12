import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './card.state';

export const getState = createFeatureSelector<State>('cards');

export const Cards = createSelector(
  getState,
  state => state.cards
);

export const IntermRecords = createSelector(
  getState,
  state => state.intermRecords
);
