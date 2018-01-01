import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  employee;
  user;
  
  constructor(
    private dialogRef: MatDialogRef<UserComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private snackbar: MatSnackBar,
    private _us: UserService
  ) { }

  ngOnInit() {
    this.employee = this._us.lookup(this.data.id);
    this.user = this.data.user;
  }

  promote(){
    this._us.promote(this.data.id)
      .subscribe(result => {
        this.snackbar.open(result['msg'], 'x', {duration: 3000});
        // insert fancy loader ('applying changes')
        this.employee = this._us.lookup(this.data.id);
      })
  }

}
