import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';
import { AppState, CardState, CardSelectors } from '@core/store';
import { CardListRootResponse, CardIntermListRootObject } from '@core/models';
export { CardActions } from '@core/store';

@Injectable({
  providedIn: 'root'
})
export class CardFacade {

  public cardState$: Observable<CardState.State> = this.store.select(CardSelectors.getState);
  public cardList$: Observable<CardListRootResponse> = this.store.select(CardSelectors.Cards);
  public cardIntermRecords$: Observable<CardIntermListRootObject> = this.store.select(CardSelectors.IntermRecords);

  constructor(private store: Store<AppState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
