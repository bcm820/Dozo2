import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatDialogRef } from '@angular/material';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { TdDialogService } from '@covalent/core';

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
    private dialog: MatDialogRef<AccountComponent>,
    private _tdDialog: TdDialogService
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
        this.dialog.close();
      });
  }

  unregister(){
    this._tdDialog.openConfirm({
      message: 'Are you sure you want to unregister? Your account and all associations will be permanently deleted.',
      title: 'Delete Account',
      acceptButton: "Confirm",
    }).afterClosed().subscribe((accept) => {
      if(accept) {
        this._us.unregister(this.pwDel)
        .subscribe(result => {
          this.snackbar.open(result['msg'], 'x', {duration: 3000});
          this._us.updateStatus();
          this.dialog.close();
          this._router.navigate(['']);
        });
      }
    });
  }

}