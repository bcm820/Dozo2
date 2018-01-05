import { Component } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { UserService } from '../../../services/user.service';
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
    private _us: UserService,
    private _router: Router
  ){}

  register(user){
    this._us.register(user)
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
