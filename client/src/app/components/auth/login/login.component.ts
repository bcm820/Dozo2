import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  subscription;
  guest = {email:'', _pw:''}
  hidePW = true;
  emailError;
  pwError;
  
  constructor(
    private _as: AuthService,
    private snackbar: MatSnackBar,
    private dialog: MatDialogRef<LoginComponent>,
    private _router: Router
  ) { }

  ngOnInit() {
  }

  login(){
    this.subscription = this._as.login(this.guest)
      .subscribe(result => {
        this.snackbar.open(result['msg'], 'x', {duration: 3000})
        this._as.updateStatus();
        if(result['status']){
          this.dialog.close();
          this._router.navigate(['dashboard']);
        }
      });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
