import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
})

export class LogoComponent {
  @Input() link: string;
  @Input() dark: boolean = false;
}
