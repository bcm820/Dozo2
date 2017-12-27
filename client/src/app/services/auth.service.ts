import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'Rxjs';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthService {

  // if not logged in, status$ = false
  // if logged in, status$ = user object
  status$ = new Subject();
  subscription;
  
  constructor(private _http: HttpClient) { }

  updateStatus(){
    this.subscription = this._http.get('/api/account')
      .subscribe(result => this.status$.next(result));
  }

  register(user){
    return this._http.post('/api/auth', user);
  }

  update(user){
    return this._http.post('/api/account', user);
  }

  updatePW(pw){
    return this._http.put('/api/account', pw);
  }

  unregister(pw){
    return this._http.delete('/api/account', pw);
  }

  login(user){
    return this._http.put('/api/auth', user);
  }

  logout(){
    this.status$.next(false);
    return this._http.delete('/api/auth');
  }

  checkEmail(email){
    return email
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(email => this.check(email));
  }

  // returns false if email already taken
  check(email){
    if(email === ''){ return of(true) }
    return this._http.get(`/api/auth/${email}`);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
