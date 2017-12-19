import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../_services/auth.service';
import { QAService } from '../_services/qa.service';
import { Question } from '../_models/question.model';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  question = new Question();
  flashes;
  
  constructor(
    private _as: AuthService,
    private _qa: QAService,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  cancel(){
    this.question = new Question();
  }
  
  create(){
    this._qa.create(this.question)
      .subscribe(result => {
        if(Array.isArray(result)){
          this.flashes = result;
        }
        else {
          this._router.navigate([''])
        }
      })
  }

}
