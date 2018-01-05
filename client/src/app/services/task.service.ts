import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TaskService {

  constructor(private _http: HttpClient) { }

  createTask(task, id){
    return this._http.post(`/api/projects/${id}/build`, task);
  }

  createLane(lane, id){
    return this._http.put(`/api/projects/${id}/build`, lane)
  }

  updateLane(lane){ 
    return this._http.post(`/api/lanes/${lane._id}`, lane);
  }

  updateLaneTasks(lane, id){
    return this._http.put(`/api/lanes/${id}`, lane);
  }

  removeLane(id){
    return this._http.delete(`/api/lanes/${id}`);
  }

  updateTask(task){
    return this._http.post(`/api/tasks/${task._id}`, task);
  }

  removeTask(id){
    return this._http.delete(`/api/tasks/${id}`);
  }

}
