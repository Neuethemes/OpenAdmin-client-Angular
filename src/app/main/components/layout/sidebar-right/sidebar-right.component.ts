import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../../services/layout.service';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'layout-sidebar-right',
  templateUrl: './sidebar-right.component.html'
})

export class LayoutSidebarRightComponent implements OnInit {
  messages: Array<any>;

  constructor(public layoutService: LayoutService, private _dataService: DataService) {}

  ngOnInit() {
    this._dataService.getMessages().subscribe(response => {
      this.messages = response.data;
    });
  }
}
