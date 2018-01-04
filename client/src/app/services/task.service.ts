import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TaskService {

  constructor(private _http: HttpClient) { }

  list(id){ // maybe not
    return this._http.get(`/api/projects/${id}/tasks`);
  }

  createTask(task, id){ // done
    return this._http.post(`/api/projects/${id}/build`, task);
  }

  createLane(lane, id){ // done
    return this._http.put(`/api/projects/${id}/build`, lane)
  }

  lookup(id){ // maybe not
    return this._http.get(`/api/tasks/${id}`);
  }

  updateTask(task){ 
    return this._http.post(`/api/tasks/${task._id}`, task);
  }

  updateLane(lane){ 
    return this._http.post(`/api/lanes/${lane._id}`, lane);
  }

  updateLaneOrder(lane, id){
    return this._http.put(`/api/lanes/${id}`, lane);
  }

  removeTask(id){
    return this._http.delete(`/api/tasks/${id}`);
  }

  removeLane(id){
    return this._http.delete(`/api/lanes/${id}`);
  }

  assign(task, profile){ // maybe not
    return this._http.post(`/api/tasks/${task}/${profile}`, null)
  }

  unassign(task, profile){ // maybe not
    return this._http.delete(`/api/tasks/${task}/${profile}`)
  }

}
