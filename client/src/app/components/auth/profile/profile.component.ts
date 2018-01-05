import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  employee;
  user;
  
  constructor(
    private dialogRef: MatDialogRef<ProfileComponent>,
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
