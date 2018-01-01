import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { MatDialog } from '@angular/material';
import { ProfileComponent } from './profile/profile.component';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  @Input() user;
  contributors;

  constructor(
    private _us: UserService,
    private _router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.contributors = this._us.list();
  }

  viewUser(id){
    this.dialog.open(ProfileComponent, {
      width:'500px',
      data: { id: id, user: this.user },
      autoFocus: false
    })
  }

}
