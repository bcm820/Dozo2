import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  
  action = 'Update';
  pwField = {_pw:'', _pwconf:''};
  pwDel = {_pw:''};
  hidePW = true;
  hidePWC = true;
  hidePWD = true;
  pwError;
  user: any = {name:''};
  
  constructor(
    private snackbar: MatSnackBar,
    private _as: AuthService,
    private _router: Router
  ) { }

  ngOnInit(){
    this._as.updateStatus();
    this.user = this._as.status$
  }

  changePW(){
    this._as.updatePW(this.pwField)
      .subscribe(result => {
        this.snackbar.open(result['msg'], 'x', {duration: 3000});
      });
  }
  
  update(user){
    this._as.update(user)
      .subscribe(result => {
        this.snackbar.open(result['msg'], 'x', {duration: 3000});
        this._as.updateStatus();
      });
  }

  unregister(){
    this._as.unregister(this.pwDel)
      .subscribe(result => {
        this.snackbar.open(result['msg'], 'x', {duration: 3000})
        this._as.updateStatus();
        this._router.navigate(['']);
      });
  }

}