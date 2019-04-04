import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, mergeMap, map, tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { TransferService } from '../../services/transfer.service';
import * as TransferActions from './transfer.actions';
import * as ApproveActions from 'src/app/_core/store/approve/approve.actions';
import { ApproveTranData } from 'src/app/_core/models/approve/approve-tran-data.model';

@Injectable()
export class TransferEffects {

  @Effect()
  callGetTransferActivities = this.actions$.pipe(
    ofType(TransferActions.CALL_GET_TRANSFER_ACTIVITIES),
    switchMap(() => {
      return this.transferService.getRecentTransfers();
    }),
    map((res) => {
      return ({
          type: TransferActions.SET_TRANSFER_ACTIVITIES,
          payload: res
        });
    })
  );

  @Effect()
  callMakeMoneyOrder = this.actions$.pipe(
    ofType(TransferActions.CALL_MONEY_ORDER),
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
        catchError(error => of(new TransferActions.MakeMoneyOrderFail(error)))
      );
    })
  );

  @Effect()
  navToApprove = this.actions$.pipe(
    ofType(TransferActions.MONEY_ORDER_SUCCESS),
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
