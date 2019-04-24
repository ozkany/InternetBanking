import { Action } from '@ngrx/store';

export const enum ActionTypes {
  EFFECT_ERROR = 'EFFECT_ERROR'
}

export class EffectError implements Action {
  readonly type = ActionTypes.EFFECT_ERROR;
  constructor(public payload: { detail: any, location: string }) { }
}

export type CommonActions = EffectError;
