import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../../../services/profile.service';
import { MatDialog } from '@angular/material';
import { ProfileComponent } from '../profile/profile.component';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  @Input() user;
  leads;
  members;
  // clicking profile will show project and task info
  // managers will be able to assign to projects

  constructor(
    private _ps: ProfileService,
    private _router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.leads = this._ps.listLeads();
    this.members = this._ps.listMembers();
  }

  viewProfile(id){
    this.dialog.open(ProfileComponent, {
      width:'500px',
      data: { id: id, user: this.user },
      autoFocus: false
    })
  }

}
