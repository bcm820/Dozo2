import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user = { first:'', last:'', email:'', _pw:'', _pwconf:'' }

  constructor(
    private dialog: MatDialogRef<RegisterComponent>,
    private snackbar: MatSnackBar,
    private _as: AuthService
  ){}

  register(user){
    this._as.register(user)
      .subscribe(result => {
        this.snackbar.open(result['msg'], 'x', {duration: 3000})
        this._as.updateStatus(); // if success, update user
        if(result['type']) this.dialog.close();
      });
  }

}
