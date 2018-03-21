import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../../../auth/services/authentication.service';
import { LayoutService } from '../../../services/layout.service';
import { DataService } from '../../../services/data.service';
import { User } from '../../../../auth/models/user.model';

@Component({
  selector: 'layout-toolbar',
  templateUrl: './toolbar.component.html',
})

export class LayoutToolbarComponent implements OnInit {
  currentUser: User;
  messages: any[];

  constructor(private _auth: AuthenticationService,
              public layoutService: LayoutService,
              private _dataService: DataService) { }

  ngOnInit() {
    this.currentUser = this._auth.getCurrentUser();
    this._dataService.getMessages()
      .subscribe(response => this.messages = response.data);
  }
}
