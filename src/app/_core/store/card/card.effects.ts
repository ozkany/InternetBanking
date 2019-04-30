import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import * as CardActions from './card.actions';
import * as CommonActions from '../common/common.actions';
import { CardService } from '@core/services/card.service';

@Injectable()
export class CardEffects {

  @Effect()
  callGetAccounts = this.actions$.pipe(
    ofType(CardActions.ActionTypes.CALL_GET_CARDS),
    switchMap(() => {
      return this.cardService.getCards().pipe(
        map((res) =>  new CardActions.SetCards(res)),
        catchError(error => of(new CommonActions.EffectError({ detail: error, location: CardActions.ActionTypes.CALL_GET_CARDS })))
      );
    })
  );

  @Effect()
  navtoIntermRecords = this.actions$.pipe(
    ofType(CardActions.ActionTypes.NAVTO_INTERM_RECORDS),
    map((action: CardActions.NavtoIntermRecords) => action.payload),
    switchMap((data) => {
      return this.cardService.getIntermRecords(data.cardId).pipe(
        map((res) => new CardActions.SetIntermRecords(res)),
        tap(() => {
          this.router.navigate(['/cards/interm-records']);
        }),
        catchError(error => of(new CommonActions.EffectError({ detail: error, location: CardActions.ActionTypes.NAVTO_INTERM_RECORDS })))
      );
    })
  );

  constructor(
    private actions$: Actions,
    private cardService: CardService,
    private router: Router,
    private route: ActivatedRoute) { }
}
