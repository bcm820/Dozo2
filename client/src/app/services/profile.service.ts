import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProfileService {
  
  constructor(private _http: HttpClient) { }

  list(){
    return this._http.get('/api/users');
  } // user names and emails, used in main-nav

  lookupUser(id){
    return this._http.get(`/api/users/${id}`);
  } // individual user data, in user cmp

  listLeads(){
    return this._http.get('/api/profiles/leads');
  } // list all lead profiles

  listMembers(){
    return this._http.get('/api/profiles/members');
  } // list all member profiles

  lookupProfile(id){
    return this._http.get(`/api/profiles/${id}`);
  } // profile data, with projects/tasks

  listFull(){ // all user data (minus PWs)
    return this._http.get('/api/m/users');
  }

  assign(id, profile){
    return this._http.post(`/api/m/users/${id}`, profile);
  } // assign profile, in user cmp

  promote(id){
    return this._http.put(`/api/m/users/${id}`, null);
  } // promote to manager, in user cmp

  addNotes(id, notes){
    return this._http.post(`/api/m/profiles/${id}`, notes);
  }

  remove(id){
    return this._http.delete(`/api/m/profiles/${id}`);
  }

}
