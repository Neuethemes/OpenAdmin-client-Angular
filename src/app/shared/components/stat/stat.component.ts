import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
})

export class StatComponent {
  @Input() header: string;
  @Input() excerpt: string;
}
