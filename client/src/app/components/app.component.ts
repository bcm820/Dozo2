import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../services/auth.service';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AccountComponent } from './auth/account/account.component';
import { MatDialog } from '@angular/material';
import 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {

  user;
  label = {name:'', email:''};

  constructor(
    private _router: Router,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    private _as: AuthService
  ){}

  ngOnInit(){
    this._as.updateStatus();
    this._as.status$
      .subscribe(result => {
        this.user = result;
        if(typeof(result) === 'object'){
          this.label.name = result['name'];
          this.label.email = result['email'];
        } else {
          this.label = {name:'', email:''};
        }
      });
  }

  openSignUp(){
    this.dialog.open(RegisterComponent, {width: '350px'});
  }

  openLogIn(){
    this.dialog.open(LoginComponent, {width:'350px'})
  }

  openAccount(){
    this.dialog.open(AccountComponent,
      {width:'60%', data: this.user})
  }

  logout(){
    this._as.logout()
      .subscribe(result => {
        this.snackbar.open(result['msg'], 'x', {duration: 3000})
      });
  }

}
