import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';

import * as fromApp from '../../_core/store/app.state';
import * as fromApprove from 'src/app/_core/store/approve/approve.reducers';
import * as fromAccounts from 'src/app/_core/store/account/account.reducers';
import * as ApproveActions from 'src/app/_core/store/approve/approve.actions';

@Injectable({
  providedIn: 'root'
})
export class ApproveFacade {
  public approveActions = ApproveActions;
  public approveState$: Observable<fromApprove.State>;
  public approveTranData$: Observable<any>;
  public approveTranDataForView$: Observable<any>;
  public confirmSmsData$: Observable<any>;
  public approveCompletedData$: Observable<any>;

  constructor(private store: Store<fromApp.AppState>) {
    this.approveState$ = this.store.select('approve');
    this.approveTranData$ = this.store.select(fromApprove.selectApproveTranData);
    this.approveTranDataForView$ = this.store.select(fromApprove.selectApproveTranDataForView);
    this.confirmSmsData$ = this.store.select(fromApprove.selectApproveConfirmSmsData);
    this.approveCompletedData$ = this.store.select(fromApprove.selectApproveCompletedData);
  }

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
