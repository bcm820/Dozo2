import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProjectService {

  constructor(private _http: HttpClient) { }

  getUserProjects(){
    return this._http.get('/api/projects');
  }

  updateUserProjects(projects){
    return this._http.post('/api/projects', projects);
  }

  getAgenda(){
    return this._http.get('/api/projects/agenda');
  }

  list(){ // all projects in DB
    return this._http.get('/api/m/projects');
  }

  create(project){
    return this._http.post('/api/m/projects', project);
  }

  lookup(id){
    return this._http.get(`/api/projects/${id}`);
  }

  // later
  update(id, project){
    return this._http.post(`/api/m/projects/${id}`, project);
  }
  remove(id){
    return this._http.delete(`/api/m/projects/${id}`);
  }

}
