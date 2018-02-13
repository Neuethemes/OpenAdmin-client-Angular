import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
})

export class MessagesComponent {
  @Input() messages: any;
}
