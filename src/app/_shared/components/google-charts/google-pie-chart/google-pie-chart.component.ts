import { Component, OnInit, Input } from '@angular/core';
import { GooglePieChartConfig } from 'src/app/_shared/components/google-charts/google-pie-chart-config.model';
import { GooglePieChartService } from 'src/app/_shared/components/google-charts/google-pie-chart.service';
import { ScriptLoaderService } from 'src/app/_core/services/script-loader.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-google-pie-chart',
  templateUrl: './google-pie-chart.component.html',
  styleUrls: ['./google-pie-chart.component.css']
})
export class GooglePieChartComponent implements OnInit {

  @Input() data$: BehaviorSubject<any[]>;
  @Input() config: GooglePieChartConfig;
  @Input() elementId: string;

  constructor(private pieChartService: GooglePieChartService, private scriptLoaderService: ScriptLoaderService) {

    this.scriptLoaderService.load('google-charts').then(() => {
      this.pieChartService._scriptsLoaded.next(true);
      if (!!this.data$) {
        this.data$.subscribe(res => {
          if (!!res) {
            console.log("building pie chart with response", res);
            this.pieChartService.BuildPieChart(this.elementId, res, this.config);
          }
        });
      }
    });

  }

  ngOnInit() {
  }

}
