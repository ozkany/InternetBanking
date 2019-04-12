import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './approve.state';

export const getState = createFeatureSelector<State>('approve');

export const TranData = createSelector(
  getState,
  state => state.tranData
);

export const ConfirmSmsData = createSelector(
  getState,
  state => state.confirmSmsData
);

export const CompletedData = createSelector(
  getState,
  state => state.completedResponse
);

export const TranSummaryForView = createSelector(
  getState,
  state => {
    console.log('selectApproveTranDataForView', state.tranData);

    return state.tranData.tranData['summaries'].reduce((r, a) => {
      if (r != null && r.find(x => x.groupName === a.groupName)) {
        r.find(x => x.groupName === a.groupName).summaries.push(a);
      } else {
        r.push({ 'groupName': a.groupName, 'summaries': [a] });
      }

      return r;
    }, Object.create([]));
  }
);
