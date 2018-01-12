import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'Rxjs';

@Injectable()
export class ProjectService implements OnDestroy {

  constructor(private _http: HttpClient) { }

  project$ = new Subject();
  projects$ = new Subject();
  team_projects$ = new Subject();

  updateDemo(demo){
    this.project$.next(demo);
  }
  
  updateProject(id){
    this._http.get(`/api/projects/${id}`)
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

  filterProject(id){
    this._http.get(`/api/projects/${id}/filter`)
    .subscribe(project => {
      this.project$.next(project);
    });
  }

  getUserProjects(){
    this._http.get('/api/projects')
    .subscribe(projects => {
      this.projects$.next(projects);
    })
  }

  list(){
    this._http.get('api/projects/list')
    .subscribe(projects => {
      this.team_projects$.next(projects);
    })
  }

  create(project){
    return this._http.post('/api/projects', project);
  }

  updateUserProjects(project_ids){
    return this._http.put('/api/projects', project_ids);
  }

  update(project){
    return this._http.post(`/api/projects/${project._id}`, project);
  }

  join(id){
    return this._http.put(`/api/projects/${id}`, null);
  }

  remove(id){
    return this._http.delete(`/api/projects/${id}`);
  }

  ngOnDestroy(){
    this.project$.unsubscribe();
    this.projects$.unsubscribe();
    this.team_projects$.unsubscribe();
  }

}
