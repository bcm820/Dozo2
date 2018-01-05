import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProjectService {

  constructor(private _http: HttpClient) { }

  getUserProjects(){
    return this._http.get('/api/projects');
  }

  create(project){
    return this._http.post('/api/projects', project);
  }

  updateUserProjects(project_ids){
    return this._http.put('/api/projects', project_ids);
  }

  lookup(id){
    return this._http.get(`/api/projects/${id}`);
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
