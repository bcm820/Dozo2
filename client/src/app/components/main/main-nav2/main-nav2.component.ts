import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { MatDialog } from '@angular/material';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-main-nav2',
  templateUrl: './main-nav2.component.html',
  styleUrls: ['./main-nav2.component.css']
})
export class MainNav2Component implements OnInit {

  @Input() user;
  users;
  // clicking user will open up dialog with info
  // managers will be able to assign user
  // shows which users and for what, but that's all
  
  constructor(
    private _us: UserService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.users = this._us.list();
  }

  viewUser(id){
    this.dialog.open(UserComponent, {
      width:'500px',
      data: { id: id, user: this.user },
      autoFocus: false
    })
  }

}
