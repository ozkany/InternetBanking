declare var google: any;

import { Injectable } from '@angular/core';
import { GoogleChartsBaseService } from './google-charts-base.service';
import { GooglePieChartConfig } from './google-pie-chart-config.model';
import { ScriptLoaderService } from 'src/app/_core/services/script-loader.service';

@Injectable({
  providedIn: 'root'
})
export class GooglePieChartService extends GoogleChartsBaseService {

  constructor(private scriptLoaderService: ScriptLoaderService) { super(scriptLoaderService); }

  public BuildPieChart(elementId: string, data: any[], config: GooglePieChartConfig) : void {  
    var chartFunc = () => { return new google.visualization.PieChart(document.getElementById(elementId)); };
    var options = {
            title: config.title,
            pieHole: config.pieHole,
      };

    this.buildChart(data, chartFunc, options);
  }

}
