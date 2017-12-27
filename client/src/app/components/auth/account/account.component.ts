import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  subscription;
  action = 'Update';
  pwField = {_pw:'', _pwconf:''};
  pwDel = {_pw:''};
  hidePW = true;
  hidePWC = true;
  hidePWD = true;
  pwError;
  user: any = {name:''};
  
  constructor(
    private dialog: MatDialogRef<AccountComponent>,
    private snackbar: MatSnackBar,
    private _as: AuthService
  ) { }

  ngOnInit(){
    this._as.updateStatus();
    this.subscription = this._as.status$
      .subscribe(result => {
        this.user = result;
      });
  }

  changePW(){
    this.subscription = this._as.updatePW(this.pwField)
      .subscribe(result => {
        this.snackbar.open(result['msg'], 'x', {duration: 3000});
      });
  }
  
  update(user){
    this.subscription = this._as.update(user)
      .subscribe(result => {
        this.snackbar.open(result['msg'], 'x', {duration: 3000});
        this._as.updateStatus();
      });
  }

  unregister(){
    this.subscription = this._as.unregister(this.pwDel)
      .subscribe(result => {
        this.snackbar.open(result['msg'], 'x', {duration: 3000})
        if(result['type']) this._as.updateStatus();
      });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}