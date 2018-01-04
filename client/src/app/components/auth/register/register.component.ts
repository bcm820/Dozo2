import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = {
    first:'brian',
    last:'mendoza',
    email:'bcmendoza@gmail.com',
    _pw:'codingdojo',
    _pwconf:'codingdojo'
  }
  action = 'Sign Up';

  constructor(
    private dialog: MatDialogRef<RegisterComponent>,
    private snackbar: MatSnackBar,
    private _as: AuthService,
    private _router: Router
  ){}

  register(user){
    this._as.register(user)
      .subscribe(result => {
        this.snackbar.open(result['msg'], 'x', {duration: 3000})
        this._as.updateStatus(); // if success, update user
        if(result['status']){
          this.dialog.close();
          this._router.navigate(['dashboard']);
        }
      });
  }

}
