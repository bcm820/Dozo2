import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  guest = {email:'', _pw:''}
  user;
  errors;

  constructor(
    private _router: Router
    // insert auth service
  ){}

  ngOnInit(){
    this.errors = false;
    // invoke auth getUser to update Subject
    // set this.user to = return value of subscription to Subject
  }

  login(){
    // invoke auth login
    // if no form errors, update this user
  }

  logout(){
    // invoke auth logout
    // invoke auth getUser to update Subject
  }

}
