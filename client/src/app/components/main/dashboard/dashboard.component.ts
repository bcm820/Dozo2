import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user;
  
  constructor(
    private _as: AuthService,
    private _router: Router,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit() {
    this._as.updateStatus();
    this._as.status$
      .subscribe(result => {
        this.user = result;
      });
  }

}
