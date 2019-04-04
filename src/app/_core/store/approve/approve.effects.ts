import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, mergeMap, map, tap, withLatestFrom, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import * as ApproveActions from './approve.actions';
import * as fromApprove from 'src/app/_core/store/approve/approve.reducers';
import { ApproveService } from '../../services/approve.service';

@Injectable()
export class ApproveEffects {

  @Effect()
  navtoApproval = this.actions$.pipe(
    ofType(ApproveActions.ActionTypes.NAVTO_APPROVAL),
    map((action: ApproveActions.NavtoApproval) => action.payload),
    map((data) => {
      return ({
        type: ApproveActions.ActionTypes.SET_TRAN_APPROVE_DATA,
        payload: data
      });
    }),
    tap(() => {
      this.router.navigate(['/approve']);
    })
  );

  @Effect()
  doApprove = this.actions$.pipe(
    ofType(ApproveActions.ActionTypes.DO_APPROVE),
    withLatestFrom(this.store$.select(fromApprove.selectApproveTranData)),
    switchMap(([action, tranData]) => {
      return this.approveService.doApprove(tranData);
    }),
    map((res) => {
      if (res['type'] === 'ConfirmSms') {
        return new ApproveActions.DoApproveSuccess(res);
      } else {
        return new ApproveActions.DoApproveFail(res['type']);
      }
    }),
    catchError(error => of(new ApproveActions.DoApproveFail(error))),
  );

  @Effect()
  doApproveSuccess = this.actions$.pipe(
    ofType(ApproveActions.ActionTypes.DO_APPROVE_SUCCESS),
    map((action: ApproveActions.DoApproveSuccess) => action.payload),
    mergeMap(data => {
      return [
        new ApproveActions.SetConfirmSmsData({ confirmSmsData: data }),
        new ApproveActions.NavToConfirmSms()
      ];
    })
  );

  @Effect()
  doApproveFail = this.actions$.pipe(
    ofType(ApproveActions.ActionTypes.DO_APPROVE_FAIL),
    map((action: ApproveActions.DoApproveSuccess) => action.payload),
    map((payload) => {
      return new ApproveActions.SetConfirmSmsData({ confirmSmsData: payload });
    })
  );

  @Effect({ dispatch: false })
  navToConfirmSms = this.actions$.pipe(
    ofType(ApproveActions.ActionTypes.NAVTO_CONFIRM_SMS),
    tap(() => {
      this.router.navigate(['/confirm-sms']);
    })
  );

  @Effect()
  doConfirmSms = this.actions$.pipe(
    ofType(ApproveActions.ActionTypes.DO_CONFIRM_SMS),
    map((action: ApproveActions.DoConfirmSms) => action.payload),
    withLatestFrom(this.store$.select(fromApprove.selectApproveTranData), this.store$.select(fromApprove.selectApproveConfirmSmsData)),
    switchMap(([data, tranData, confirmSmsData]) => {
      console.log('Effect doConfirmSms switchMap', data, tranData, confirmSmsData);
      return this.approveService.doConfirmSms(data.smsCode, confirmSmsData.token, tranData.approveApiPath, tranData.forceDuplicate);
    }),
    map((res) => {
      console.log('Effect doConfirmSms map', res);
      if (res['type'] === 'Completed') {
        return new ApproveActions.DoConfirmSmsSuccess(res);
      } else {
        return new ApproveActions.DoConfirmSmsFail(res);
      }
    }),
    catchError(error => of(new ApproveActions.DoConfirmSmsFail(error))),
  );

  @Effect()
  doConfirmSmsSuccess = this.actions$.pipe(
    ofType(ApproveActions.ActionTypes.DO_CONFIRM_SMS_SUCCESS),
    map((action: ApproveActions.DoConfirmSmsSuccess) => action.payload),
    tap((successData) => {
      this.router.navigate(['/finish']);
    })
  );

  @Effect({ dispatch: false })
  doConfirmSmsFail = this.actions$.pipe(
    ofType(ApproveActions.ActionTypes.DO_CONFIRM_SMS_FAIL),
    map((action: ApproveActions.DoConfirmSmsFail) => action.payload),
    tap((failData) => {
      console.log('doConfirmSmsFail', failData);
    })
  );

  constructor(
    private actions$: Actions,
    private store$: Store<fromApprove.State>,
    private approveService: ApproveService,
    private router: Router,
    private route: ActivatedRoute) { }
}
