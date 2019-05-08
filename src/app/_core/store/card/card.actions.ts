import { Action } from '@ngrx/store';
import { CardListRootResponse, CardIntermListRootObject } from '@core/models';

export const enum ActionTypes {
  CALL_GET_CARDS = 'CALL_GET_CARDS',
  NAVTO_INTERM_RECORDS = 'NAVTO_INTERM_RECORDS',
  SET_CARDS = 'SET_CARDS',
  SET_INTERM_RECORDS = 'SET_INTERM_RECORDS'
}

export class CallGetCards implements Action {
  readonly type = ActionTypes.CALL_GET_CARDS;
}

export class SetCards implements Action {
  readonly type = ActionTypes.SET_CARDS;
  constructor(public payload: CardListRootResponse) { }
}

export class NavtoIntermRecords implements Action {
  readonly type = ActionTypes.NAVTO_INTERM_RECORDS;
  constructor(public payload: { cardId: string }) { }
}

export class SetIntermRecords implements Action {
  readonly type = ActionTypes.SET_INTERM_RECORDS;
  constructor(public payload: CardIntermListRootObject) { }
}

export type CardActions = CallGetCards | SetCards | NavtoIntermRecords | SetIntermRecords;
