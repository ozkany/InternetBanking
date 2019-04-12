import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';
import { AppState, TransferState, TransferSelectors } from '@core/store';
import { TransferActivities } from '@core/models';
export { TransferActions } from '@core/store';

@Injectable({
  providedIn: 'root'
})
export class TransferFacade {

  public transferState$: Observable<TransferState.State> = this.store.select(TransferSelectors.getState);
  public transferActivities$: Observable<TransferActivities> = this.store.select(TransferSelectors.TransferActivities);

  constructor(private store: Store<AppState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
