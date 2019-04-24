import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import * as TransferActions from './transfer.actions';
import * as ApproveActions from '../approve/approve.actions';
import * as CommonActions from '../common/common.actions';
import { TransferService } from '@core/services/transfer.service';
import { ApproveTranData } from '@core/models';

@Injectable()
export class TransferEffects {

  @Effect()
  callGetTransferActivities = this.actions$.pipe(
    ofType(TransferActions.ActionTypes.CALL_GET_TRANSFER_ACTIVITIES),
    switchMap(() => {
      return this.transferService.getRecentTransfers().pipe(
        map((res) => new TransferActions.SetTransferActivities(res)),
        catchError(error => of(new CommonActions.EffectError({
          detail: error,
          location: TransferActions.ActionTypes.CALL_GET_TRANSFER_ACTIVITIES
        })))
      );
    })
  );

  @Effect()
  callMakeMoneyOrder = this.actions$.pipe(
    ofType(TransferActions.ActionTypes.CALL_MONEY_ORDER),
    map((action: TransferActions.CallMakeMoneyOrder) => {
      return action.payload;
    }),
    switchMap((request) => {
      return this.transferService.makeMoneyOrder(request).pipe(
        map(res => {
          if (res.type === 'Confirm') {
            return new TransferActions.MakeMoneyOrderSuccess(res);
          } else {
            console.error('callMakeMoneyOrder response [type] is not Confirm!');
            return of(new TransferActions.MakeMoneyOrderFail('response [type] is not Confirm!'));
          }
        }),
        catchError(error => of(new CommonActions.EffectError({ detail: error, location: TransferActions.ActionTypes.CALL_MONEY_ORDER })))
      );
    })
  );

  @Effect()
  navToApprove = this.actions$.pipe(
    ofType(TransferActions.ActionTypes.MONEY_ORDER_SUCCESS),
    map((action: TransferActions.MakeMoneyOrderSuccess) => action.payload),
    map(data => {
      const approveData: ApproveTranData = {
        tranData: data,
        approveApiPath: '/transfer/transferapprovev2',
        forceDuplicate: false
      };

      return new ApproveActions.NavtoApproval(approveData);
    })
  );

  constructor(
    private actions$: Actions,
    private router: Router,
    private route: ActivatedRoute,
    private transferService: TransferService) { }

}
