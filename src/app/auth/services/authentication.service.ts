import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { UserService } from './user.service';

@Injectable()
export class AuthenticationService {
  constructor(
    private _http: HttpClient,
    private _userService: UserService
  ) {}

  public login(email: string, password: string) {
    return this._http.post('/user/authenticate', {email: email, password: password});
  }

  public logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }

  public register(user: User) {
    return this._userService.create(user);
  }

  public getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
  }
}
