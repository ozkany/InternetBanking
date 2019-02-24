import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, mergeMap, map, tap } from 'rxjs/operators';
import * as CardActions from './card.actions';
import { CardService } from '../../services/card.service';

@Injectable()
export class CardEffects {

    @Effect()
    callGetAccounts = this.actions$.pipe(
        ofType(CardActions.CALL_GET_CARDS),
        switchMap(() => {
            return this.cardService.getCards();
        }),
        map((res) => {
            return (
                {
                    type: CardActions.SET_CARDS,
                    payload: res
                }
            );
        })
    );

    @Effect()
    navtoIntermRecords = this.actions$.pipe(
        ofType(CardActions.NAVTO_INTERM_RECORDS),
        map((action: CardActions.NavtoIntermRecords) => {
            return action.payload;
        }),
        switchMap((data) => {
            return this.cardService.getIntermRecords(data.cardId);
        }),
        map((res) => {
            return (
                {
                    type: CardActions.SET_INTERM_RECORDS,
                    payload: res
                }
            );
        }),
        tap(() => {
            this.router.navigate(['/cards/interm-records'])
        })
    );

    constructor(
        private actions$: Actions, 
        private cardService: CardService, 
        private router: Router,
        private route: ActivatedRoute) { }
}