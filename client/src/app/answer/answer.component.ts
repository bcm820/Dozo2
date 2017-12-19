import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QAService } from '../_services/qa.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  qid: any;
  q: any = {text:'', support:''}
  answer: any = {text:'', support:'', author:''}
  user;
  flashes;

  constructor(
    private _rt: ActivatedRoute,
    private _router: Router,
    private _as: AuthService,
    private _qa: QAService
  ) { }

  ngOnInit() {
    this._rt.paramMap.subscribe(param => {
      this.qid = param.get('id');
      this._qa.show(this.qid).subscribe(q => {
        this.q = q;
      });
    });
    this._as.updateUser();
    this._as.user$.subscribe(user => {
      this.user = user;
    })
  }

  home(){
    this._router.navigate([''])
  }

  cancel(){
    this.answer = {text:'', support:'', author:''}
  }

  question(){
    this._router.navigate(['question', this.qid])
  }

  submit(){
    this.answer.author = this.user.name;
    this._qa.answer(this.qid, this.answer)
      .subscribe(result => {
        if(Array.isArray(result)){ this.flashes = result; }
        else {
          this._router.navigate([''])
        }
      })
  }

}
