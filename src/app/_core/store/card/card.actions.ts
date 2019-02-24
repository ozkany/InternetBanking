import { Action } from '@ngrx/store';
import { CardListRootResponse } from '../../models/cards/card.model';
import { CardIntermListRootObject } from '../../models/cards/card-interm-list.model';

export const CALL_GET_CARDS = 'CALL_GET_CARDS';
export const NAVTO_INTERM_RECORDS = 'NAVTO_INTERM_RECORDS';
///
export const SET_CARDS = 'SET_CARDS';
export const SET_INTERM_RECORDS = 'SET_INTERM_RECORDS';


export class CallGetCard implements Action {
    readonly type = CALL_GET_CARDS;
}

export class SetCards implements Action {
    readonly type = SET_CARDS;
    
    constructor(public payload: CardListRootResponse) {}
}

export class NavtoIntermRecords implements Action {
    readonly type = NAVTO_INTERM_RECORDS;
    
    constructor(public payload: { cardId: string }) {}
}

export class SetIntermRecords implements Action {
    readonly type = SET_INTERM_RECORDS;
    
    constructor(public payload: CardIntermListRootObject) {}
}

export type CardActions = CallGetCard | SetCards | NavtoIntermRecords | SetIntermRecords;