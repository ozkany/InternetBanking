import { CardListRootResponse, CardIntermListRootObject } from '@core/models';

export interface State {
  cards: CardListRootResponse;
  intermRecords: CardIntermListRootObject;
}

export const initialState: State = {
  cards: null,
  intermRecords: null
};
