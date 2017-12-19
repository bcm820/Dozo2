
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'Rxjs';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthService {
  
  user$ = new Subject();
  
  constructor(private _http: HttpClient) {
  }
  
  login(user) { return this._http.post('/api/auth/login', user); }
  logout() { return this._http.post('/api/auth/logout', true); }
  
  updateUser(){
    this._http.get('/api/auth/confirm')
      .subscribe(result => this.user$.next(result));
  }

}
