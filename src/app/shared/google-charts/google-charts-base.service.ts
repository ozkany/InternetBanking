declare var google: any;

import { Injectable } from '@angular/core';
import { ScriptLoaderService } from 'src/app/_core/services/script-loader.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleChartsBaseService {

  public _scriptsLoaded: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(scriptLoaderService: ScriptLoaderService) { 

    this._scriptsLoaded.subscribe(res => {if(res) google.charts.load('current', {'packages':['corechart']}); } );

  }

  protected buildChart(data: any[], chartFunc: any, options: any) : void {
    var func = (chartFunc, options) => {
      var datatable = google.visualization.arrayToDataTable(data);
      chartFunc().draw(datatable, options);
    };   
    var callback = () => func(chartFunc, options);
    google.charts.setOnLoadCallback(callback);
  }

}
