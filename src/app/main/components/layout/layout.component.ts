import { Component } from '@angular/core';
import { LayoutService } from "../../services/layout.service";

@Component({
  templateUrl: './layout.component.html',
  providers: [ LayoutService ]
})

export class LayoutComponent {
  constructor(private _layoutService: LayoutService) {}
}