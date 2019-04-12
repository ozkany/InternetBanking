import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, Action } from '@ngrx/store';
import { CustomerAccount } from '@core/models';
import { AppState, AccountState, AccountSelectors } from '@core/store';
export { AccountActions }  from '@core/store';

@Injectable({
  providedIn: 'root'
})
export class AccountFacade {

  public accountState$: Observable<AccountState.State> = this.store.select(AccountSelectors.getState);
  public accounts$: Observable<CustomerAccount[]> = this.store.select(AccountSelectors.Accounts);
  public accountActivities$: Observable<any> = this.store.select(AccountSelectors.AccountActivities);
  public assets$: Observable<any> = this.store.select(AccountSelectors.Assets);
  public assetsForView$: Observable<any> = this.store.select(AccountSelectors.AssetsForView);
  public receipt$: Observable<any> = this.store.select(AccountSelectors.Receipt);

  constructor(private store: Store<AppState>) {}

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
