import * as CardActions from './card.actions';
import { CardListRootResponse } from '../../models/cards/card.model';
import { CardIntermListRootObject } from '../../models/cards/card-interm-list.model';

export interface State {
    cards: CardListRootResponse;
    intermRecords: CardIntermListRootObject;
}

const initialState: State = {
    cards: null,
    intermRecords: null
}

export function reducer(state = initialState, action: CardActions.CardActions): State {
    switch (action.type) {
        case CardActions.SET_CARDS:
            return {
                ...state,
                cards: action.payload
            }
        case CardActions.SET_INTERM_RECORDS:
            return {
                ...state,
                intermRecords: action.payload
            }
        default:
            return state;
    }
    
}