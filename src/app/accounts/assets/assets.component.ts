import { Component, OnInit, OnDestroy } from '@angular/core';
import { GooglePieChartConfig } from 'src/app/misc/google-charts/google-pie-chart-config.model';
import { AccountFacade, AccountActions } from '@core/facades/account.facade';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit, OnDestroy {

  config: GooglePieChartConfig;

  constructor(public accountFacade: AccountFacade) { }

  loadChart() {
    this.config = new GooglePieChartConfig('', 0.4);
    this.accountFacade.dispatch(new AccountActions.CallGetAssets());
  }

  ngOnInit() {
    this.loadChart();
  }

  ngOnDestroy() {
  }

}
