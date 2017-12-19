import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../_services/auth.service';
import { QAService } from '../_services/qa.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  
  user: any = {name:''}
  search: string = '';
  questions;
  
  constructor(
    private _as: AuthService,
    private _qa: QAService,
    private _router: Router
  ){}

  ngOnInit() {
    this.listQuestions();
    this._as.updateUser();
    this._as.user$.subscribe(user => {
      this.user = user;
    })
  }

  listQuestions(){
    this._qa.list().subscribe(list => {
      this.questions = list;
    });
  }

  show(id){
    this._router.navigate(['question', id])
  }

  answer(id){
    this._router.navigate(['question', id, 'new_answer'])
  }

}
