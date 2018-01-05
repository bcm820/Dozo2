import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { UserService } from '../../../services/user.service';
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
    private _us: UserService,
    private _router: Router,
  ) { }

  ngOnInit(){
    this._us.updateStatus();
    this.user = this._us.status$
  }

  changePW(){
    this._us.updatePW(this.pwField)
      .subscribe(result => {
        this.snackbar.open(result['msg'], 'x', {duration: 3000});
      });
  }
  
  update(user){
    this._us.updateUser(user)
      .subscribe(result => {
        this.snackbar.open(result['msg'], 'x', {duration: 3000});
        this._us.updateStatus();
      });
  }

  unregister(){
    this._us.unregister(this.pwDel)
      .subscribe(result => {
        this.snackbar.open(result['msg'], 'x', {duration: 3000})
        this._us.updateStatus();
        this._router.navigate(['']);
      });
  }

}