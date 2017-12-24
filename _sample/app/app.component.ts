
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './_services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // auth
  guest = {name:''}
  user;
  flashes;
  
  constructor(
    private _as: AuthService,
    private _router: Router
  ){}

  ngOnInit(){
    this.flashes = false;
    this._as.updateUser();
    this._as.user$.subscribe(user => {
      this.user = user;
    });
  }

  login(){
    this._as.login(this.guest)
    .subscribe(res => {
      if(Array.isArray(res)){ this.flashes = res; }
      else {
        this._as.updateUser();
        console.log('User logged in');
      }
    });
  }

  logout(){
    this._as.logout()
      .subscribe(res => {
        this._as.updateUser();
        console.log('User logged out')
      });
  }

}
