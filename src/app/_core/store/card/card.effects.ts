import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, map, tap } from 'rxjs/operators';
import * as CardActions from './card.actions';
import { CardService } from '@core/services/card.service';

@Injectable()
export class CardEffects {

  @Effect()
  callGetAccounts = this.actions$.pipe(
    ofType(CardActions.ActionTypes.CALL_GET_CARDS),
    switchMap(() => {
      return this.cardService.getCards();
    }),
    map((res) => {
      return new CardActions.SetCards(res);
    })
  );

  @Effect()
  navtoIntermRecords = this.actions$.pipe(
    ofType(CardActions.ActionTypes.NAVTO_INTERM_RECORDS),
    map((action: CardActions.NavtoIntermRecords) => {
      return action.payload;
    }),
    switchMap((data) => {
      return this.cardService.getIntermRecords(data.cardId);
    }),
    map((res) => {
      return new CardActions.SetIntermRecords(res);
    }),
    tap(() => {
      this.router.navigate(['/cards/interm-records']);
    })
  );

  constructor(
    private actions$: Actions,
    private cardService: CardService,
    private router: Router,
    private route: ActivatedRoute) { }
}
