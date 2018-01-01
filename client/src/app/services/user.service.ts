import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  
  constructor(private _http: HttpClient) { }

  getUser(){
    return this._http.get('/api/account')
  }

  list(){
    return this._http.get('/api/users');
  }

  lookup(id){
    return this._http.get(`/api/users/${id}`);
  } // individual user data, in user cmp

  addNotes(id, notes){
    return this._http.post(`/api/m/users/${id}`, notes);
  }

  promote(id){
    return this._http.put(`/api/m/users/${id}`, null);
  } // promote to manager, in user cmp

}
