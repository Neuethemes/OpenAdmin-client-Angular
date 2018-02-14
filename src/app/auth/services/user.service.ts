import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user.model';

@Injectable()
export class UserService {
  constructor(private _http: HttpClient) { }

  public getAll() {
    return this._http.get('/user').subscribe((response: ApiResponse) => response.data);
  }

  public getById(_id: string) {
    return this._http.get('/user/' + _id).subscribe((response: ApiResponse) => response.data);
  }

  public create(user: User) {
    return this._http.post('/user/register', user);
  }

  public update(user: User) {
    return this._http.put('/user/' + user._id, user);
  }

  public _delete(_id: string) {
    return this._http.delete('/user/' + _id);
  }
}
