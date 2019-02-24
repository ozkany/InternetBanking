import { Component, OnInit, OnDestroy } from '@angular/core';
import { GooglePieChartConfig } from 'src/app/misc/google-charts/google-pie-chart-config.model';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromApp from 'src/app/_core/store/app.state';
import * as fromAccounts from '../../_core/store/account/account.reducers';
import * as AccountActions from 'src/app/_core/store/account/account.actions';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit, OnDestroy {

  accountState$: Observable<fromAccounts.State>;
  public assets$ = new BehaviorSubject<any[]>(null);
  config: GooglePieChartConfig;
  elementId: String;
  subscription = new Subscription();

  constructor(private store: Store<fromApp.AppState>) {
    this.accountState$ = this.store.select('accounts');
    this.loadChart();
  }

  loadChart() {
    this.config = new GooglePieChartConfig('', 0.4);
    this.elementId = 'assetsPieChart';
    this.store.dispatch(new AccountActions.CallGetAssets());
  }

  ngOnInit() {
    this.subscription.add(this.accountState$.subscribe(res => {
      if(!!res && !!res.assets) {
        let data = res.assets.assetTypes.map(a => [a.title, a.totalAmount]);
        data = [['Varlık Türü', 'Tutarı'], ...data];
        this.assets$.next(data);
      }
    }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
