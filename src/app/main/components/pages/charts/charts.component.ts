import { Component } from '@angular/core';
import { DataService } from "../../../services/data.service";

@Component({
  templateUrl: './charts.component.html'
})
export class PageChartsComponent {
    public charts: object;

    // Create an instance of the StatsService through dependency injection
    constructor(private _dataService: DataService) {
      _dataService.getCharts().subscribe(response => {
        this.charts = response.data;
      });
    }
}
