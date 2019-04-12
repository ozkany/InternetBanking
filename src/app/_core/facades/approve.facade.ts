import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';
import { AppState, ApproveState, ApproveSelectors } from '@core/store';
export { ApproveActions } from '@core/store';

@Injectable({
  providedIn: 'root'
})
export class ApproveFacade {

  public approveState$: Observable<ApproveState.State> = this.store.select(ApproveSelectors.getState);
  public approveTranData$: Observable<any> = this.store.select(ApproveSelectors.TranData);
  public approveTranSummaryForView$: Observable<any> = this.store.select(ApproveSelectors.TranSummaryForView);
  public approveConfirmSmsData$: Observable<any> = this.store.select(ApproveSelectors.ConfirmSmsData);
  public approveCompletedData$: Observable<any> = this.store.select(ApproveSelectors.CompletedData);

  constructor(private store: Store<AppState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
