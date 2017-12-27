import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  
  // typically, we retrieve user data from the service
  // but here inject user data from app.cmp into dialog
  // this user data will be input into our user-form
  
  constructor(
    private dialog: MatDialogRef<AccountComponent>,
    private snackbar: MatSnackBar,
    private _as: AuthService,
    @Inject(MAT_DIALOG_DATA) private user
  ) { }
  
  update(user){
    this._as.update(user)
      .subscribe(result => {
        this.snackbar.open(result['msg'], 'x', {duration: 3000});
      });
  }

}
