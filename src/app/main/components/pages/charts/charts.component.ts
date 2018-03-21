import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';

@Component({
  templateUrl: './charts.component.html'
})
export class PageChartsComponent implements OnInit {
  public charts: any;

  // Create an instance of the StatsService through dependency injection
  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this._dataService.getCharts().subscribe(response => {
      this.charts = response.data;
    });
  }
}
