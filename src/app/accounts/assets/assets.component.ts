import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountStore } from 'src/app/_core/stores/account.store';
import { ScriptLoaderService } from 'src/app/_core/services/script-loader.service';
import { GooglePieChartConfig } from 'src/app/misc/google-charts/google-pie-chart-config.model';

@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit, OnDestroy {

  config: GooglePieChartConfig;
  elementId: String;

  constructor(public accountStore: AccountStore, private scriptLoaderService: ScriptLoaderService) {
    this.loadChart();
  }

  loadChart() {
    this.config = new GooglePieChartConfig('', 0.4);
    this.elementId = 'assetsPieChart';

    this.accountStore.fetchAssets();
  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }

}
