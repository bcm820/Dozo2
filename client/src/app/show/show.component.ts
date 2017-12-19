import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QAService } from '../_services/qa.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css'],
})

export class ShowComponent implements OnInit {

  question: any = {text:'', support:'', answers:[]}
  
  constructor(
    private _rt: ActivatedRoute,
    private _router: Router,
    private _qa: QAService
  ) { }

  ngOnInit() {
    this._rt.paramMap.subscribe(param => {
      let id = param.get('id');
      this._qa.show(id).subscribe(q => {
        this.question = q;
      });
    });
  }

  home(){
    this._router.navigate([''])
  }

  answer(id){
    this._router.navigate(['question', id, 'new_answer'])
  }

  like(id){
    this._qa.like(id).subscribe(q => {
      this.question = q;
      this.question.answers = this.compare(this.question.answers, 'likes');
    });
  }

  compare(array, field){
    array.sort((a, b) => {
      if(a[field] < b[field]){
        return 1;
      } else if(a[field] > b[field]) {
        return -1;
      } else {
        return 0
      }
    });
    return array;
  }

}