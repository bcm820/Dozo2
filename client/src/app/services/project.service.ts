import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'Rxjs';

@Injectable()
export class ProjectService {

  constructor(private _http: HttpClient) { }

  // store current project
  // if none, log out!
  project$ = new Subject();

  updateProject(id){
    this._http.get(`/api/projects/${id}`)
    .subscribe(project => {
      this.project$.next(project);
    });
  }

  filterProject(id){
    this._http.get(`/api/projects/${id}/filter`)
    .subscribe(project => {
      this.project$.next(project);
    });
  }

  getAgenda(){
    this._http.get('/api/projects/agenda')
    .subscribe(agenda => {
      this.project$.next(agenda);
    })
  }

  getUserProjects(){
    return this._http.get('/api/projects');
  }

  create(project){
    return this._http.post('/api/projects', project);
  }

  updateUserProjects(project_ids){
    return this._http.put('/api/projects', project_ids);
  }

  update(id, project){
    return this._http.post(`/api/m/projects/${id}`, project);
  }

  updateGrid(id, grid_ids){
    return this._http.put(`/api/m/projects/${id}`, grid_ids);
  }

  remove(id){
    return this._http.delete(`/api/projects/${id}`);
  }

}
