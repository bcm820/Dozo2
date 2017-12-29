import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TaskService {

  constructor(private _http: HttpClient) { }

  list(id){ // list all tasks for a project
    return this._http.get(`/api/projects/${id}/tasks`);
  }

  create(task, id){
    return this._http.post(`/api/projects/${id}/tasks`, task);
  }

  lookup(id){
    return this._http.get(`/api/tasks/${id}`);
  }

  update(task, id){
    return this._http.post(`/api/tasks/${id}`, task);
  }

  remove(id){
    return this._http.delete(`/api/tasks/${id}`);
  }

  assign(task, profile){
    return this._http.post(`/api/tasks/${task}/${profile}`, null)
  }

  unassign(task, profile){
    return this._http.delete(`/api/tasks/${task}/${profile}`)
  }

  listByStatus(project, status){
    return this._http.get(`/api/tasks/${project}/all/${status}`);
  }

  listFilter(project, profile, status){
    return this._http.get(`/api/tasks/${project}/${profile}/${status}`);
  }

}
