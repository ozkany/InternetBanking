import { Action } from '@ngrx/store';

export const enum ActionTypes {
  EFFECT_ERROR = 'EFFECT_ERROR',
  GLOBAL_ERROR = 'GLOBAL_ERROR'
}

export class EffectError implements Action {
  readonly type = ActionTypes.EFFECT_ERROR;
  constructor(public payload: { detail: any, location: string }) { }
}

export class GlobalError implements Action {
  readonly type = ActionTypes.GLOBAL_ERROR;
  constructor(public payload: any) { }
}

export type CommonActions = EffectError | GlobalError;
