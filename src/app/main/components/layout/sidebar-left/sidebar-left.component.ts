import { Component }     from '@angular/core';
import { LayoutService } from "../../../services/layout.service";
import { DataService }   from "../../../services/data.service";

@Component({
  selector: 'layout-sidebar-left',
  templateUrl: './sidebar-left.component.html',
})

export class LayoutSidebarLeftComponent {
  monitoring;

  constructor(private _layoutService: LayoutService,
              private _dataService: DataService
  ) {
    _dataService.getMonitoring().subscribe((response: ApiResponse) => {
      this.monitoring = response.data
    });
  }
}
