import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';
import { PaymentState, PaymentSelectors, AppState } from '@core/store';
import { PaymentActivityRootObject } from '@core/models';
export { PaymentActions } from '@core/store';

@Injectable({
  providedIn: 'root'
})
export class PaymentFacade {

  public paymentState$: Observable<PaymentState.State> = this.store.select(PaymentSelectors.getState);
  public paymentActivities$: Observable<PaymentActivityRootObject> = this.store.select(PaymentSelectors.PaymentActivities);

  constructor(private store: Store<AppState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
