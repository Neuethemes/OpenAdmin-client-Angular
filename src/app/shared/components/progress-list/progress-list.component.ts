import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-list',
  templateUrl: './progress-list.component.html',
})

export class ProgressListComponent {
  @Input() list: any;
}
