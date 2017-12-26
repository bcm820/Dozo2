import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  guest = {email:'', _pw:''}
  hidePW = true;
  emailError;
  pwError;
  
  constructor(
    private _as: AuthService,
    private snackbar: MatSnackBar,
    private dialog: MatDialogRef<LoginComponent>
  ) { }

  ngOnInit() {
  }

  login(){
    this._as.login(this.guest)
      .subscribe(result => {
        this.snackbar.open(result['msg'], 'x', {duration: 3000})
        this._as.updateStatus(); // if success, update user
        if(result['type']) this.dialog.close();
      });
  }

}
