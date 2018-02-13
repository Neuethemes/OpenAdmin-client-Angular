import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
})

export class WidgetComponent {
  @Input() header: string;
  @Input() excerpt: string;
  @Input() addClass: string;
  @Input() badge: any;
}
