import * as CardActions from './card.actions';
import { State, initialState } from './card.state';

export function reducer(state = initialState, action: CardActions.CardActions): State {
  switch (action.type) {
    case CardActions.ActionTypes.SET_CARDS:
      return {
        ...state,
        cards: action.payload
      };
    case CardActions.ActionTypes.SET_INTERM_RECORDS:
      return {
        ...state,
        intermRecords: action.payload
      };
    default:
      return state;
  }
}
