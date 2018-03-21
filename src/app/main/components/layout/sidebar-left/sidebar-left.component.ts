import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../services/layout.service';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'layout-sidebar-left',
  templateUrl: './sidebar-left.component.html',
})

export class LayoutSidebarLeftComponent implements OnInit {
  monitoring;

  constructor(public layoutService: LayoutService, private _dataService: DataService) {}

  ngOnInit() {
    this._dataService.getMonitoring().subscribe((response: ApiResponse) => {
      this.monitoring = response.data;
    });
  }
}
