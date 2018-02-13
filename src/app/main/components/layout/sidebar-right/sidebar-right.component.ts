import { Component } from '@angular/core';
import { LayoutService } from "../../../services/layout.service";
import { DataService } from "../../../services/data.service";

@Component({
  selector: 'layout-sidebar-right',
  templateUrl: './sidebar-right.component.html'
})

export class LayoutSidebarRightComponent {
    messages: Array<any>;

    constructor(
        private _layoutService: LayoutService,
        private _dataService: DataService
    ) {
        _dataService.getMessages().subscribe(response => {
            this.messages = response.data;
        });
    }
}
