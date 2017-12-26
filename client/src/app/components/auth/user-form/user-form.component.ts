import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Subject } from 'Rxjs';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Input() user;
  @Output() send = new EventEmitter;

  // form controls/validations
  email = new FormControl('', [Validators.email])
  getEmailError(){
    return this.email.hasError('email')
      ? 'Valid email address required.' : '';
  }
  hidePW = true;
  hidePWC = true;
  address$ = new Subject(); // email address input
  unique: any = true;
  
  constructor(private _as: AuthService) { }

  checkEmail(){
    this._as.checkEmail(this.address$)
      .subscribe(result => this.unique = result);
  }

  ngOnInit() {
    this.checkEmail();
  }

  sendUser(){
    this.send.emit(this.user);
  }

}
