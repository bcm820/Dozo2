import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QAService {
  
  constructor(private _http: HttpClient) { }

  list(){
    return this._http.get('/api/questions');
  }

  create(question){
    return this._http.post(`/api/questions`, question);
  }

  show(id){
    return this._http.get(`/api/questions/${id}`);
  }

  answer(id, answer){
    return this._http.post(`/api/questions/${id}`, answer);
  }

  like(id){
    return this._http.post(`/api/questions/a/${id}`, 'hi');
  }

}
