import { Effect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap, mergeMap, map, tap } from 'rxjs/operators';
import * as ApproveActions from './approve.actions';
import { CardService } from '../../services/card.service';

@Injectable()
export class CardEffects {

    @Effect()
    navtoApproval = this.actions$.pipe(
        ofType(ApproveActions.NAVTO_APPROVAL),
        switchMap(() => {
            return null;
        }),
        map((res) => {
            return (
                {
                    type: ApproveActions.SET_TRAN_APPROVE_DATA,
                    payload: res
                }
            );
        })
    );

    constructor(
        private actions$: Actions, 
        private cardService: CardService, 
        private router: Router,
        private route: ActivatedRoute) { }
}