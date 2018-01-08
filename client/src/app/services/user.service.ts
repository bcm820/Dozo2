import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'Rxjs';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserService {
  
  constructor(private _http: HttpClient) { }

  // if not logged in, status$ = false
  // if logged in, status$ = user object
  status$ = new Subject();
  
  /*
    Account routes
  */

  updateStatus(){
    this._http.get('/api/account')
      .subscribe(result => {
        this.status$.next(result);
      });
  }

  updateUser(user){
    return this._http.post('/api/account', user);
  }

  updatePW(pw){
    return this._http.put('/api/account', pw);
  }

  unregister(pw){
    return this._http.delete('/api/account', pw);
  }

  /*
    Auth routes
  */

  register(user){
    return this._http.post('/api/auth', user);
  }

  login(user){
    return this._http.put('/api/auth', user);
  }

  logout(){
    this.status$.next({status: false});
    return this._http.delete('/api/auth');
  }

  checkEmail(email){
    return email
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(email => this.check(email));
  }

  check(email){
    if(email === ''){ return of(true) }
    return this._http.get(`/api/auth/${email}`);
  }

  /*
    User routes
  */

  list(){
    return this._http.get('/api/users');
  }

  lookup(id){
    return this._http.get(`/api/users/${id}`);
  }

  promote(id){
    return this._http.post(`/api/m/users/${id}`, null);
  }

  ngOnDestroy(){
    this.status$.unsubscribe();
  }

}