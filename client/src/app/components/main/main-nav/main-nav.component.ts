import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  @Input() user;
  // if manager, get manager view of users and projects
  // if not manager, get general view

  constructor() { }

  ngOnInit() {
  }

}
