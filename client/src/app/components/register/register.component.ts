import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Subject } from 'Rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email = new FormControl('', [Validators.email])
  getEmailError(){
    return this.email.hasError('email') ? 'Valid email address required.' : '';
  }
  hidePW = true;
  hidePWC = true;

  // use cool flashes!
  flashes;

  // check for unique email!
  addr = new Subject();
  
  user = {
    first:'',
    last:'',
    _pw:'',
    _pwconf:'',
  } // assign email after
  
  constructor() { }

  ngOnInit() {
  }

}
