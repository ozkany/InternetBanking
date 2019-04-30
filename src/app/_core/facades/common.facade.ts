import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { AppState } from '@core/store';
export { CommonActions} from '@core/store';

@Injectable({
  providedIn: 'root'
})
export class CommonFacade {

  constructor(private store: Store<AppState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
