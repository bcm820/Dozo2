import { Component } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  guest = {email:'', _pw:''}
  hidePW = true;
  emailError;
  pwError;
  
  constructor(
    private _us: UserService,
    private snackbar: MatSnackBar,
    private dialog: MatDialogRef<LoginComponent>,
    private _router: Router
  ) { }

  login(){
    this._us.login(this.guest)
    .subscribe(result => {
      this.snackbar.open(result['msg'], 'x', {duration: 3000})
      this._us.updateStatus();
      if(result['status']){
        this.dialog.close();
        this._router.navigate(['dashboard']);
      }
    });
  }

}
