import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../services/user.service';
import { Subject } from 'Rxjs';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  
  @Input() user;
  @Input() action;
  @Output() send = new EventEmitter;

  // form controls/validations
  // I might later want to make the entire form reactive
  email = new FormControl('', [Validators.email])
  getEmailError(){
    return this.email.hasError('email')
      ? 'Valid email address required.' : '';
  }
  hidePW = true;
  hidePWC = true;
  address$ = new Subject(); // email address input
  unique: any = true;
  
  constructor(private _us: UserService) { }

  checkEmail(){
    if(this.action === 'Sign up'){
      this._us.checkEmail(this.address$)
      .subscribe(result => {
        this.unique = result;
      });
    }
  }

  ngOnInit() {
    this.checkEmail();
  }

  sendUser(){
    this.send.emit(this.user);
  }

}
