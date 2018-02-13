import { Component } from '@angular/core';
import { DataService } from "../../../services/data.service";

@Component({
  templateUrl: './dashboard.component.html',
})
export class PageDashboardComponent {
  public messages: Array<any>;
  public sales: Array<any>;
  public summary: object;
  public charts: object;

  // Create an instance of the StatsService through dependency injection
  constructor(private _dataService: DataService) {
    _dataService.getCharts().subscribe(response => {
      this.charts = response.data;
    });

    _dataService.getSummary().subscribe(response => {
      this.summary = response.data;
    });

    _dataService.getSales().subscribe(response => {
      this.sales = response.data;
    });

    _dataService.getMessages().subscribe(response => {
      this.messages = response.data;
    });
  }

}
