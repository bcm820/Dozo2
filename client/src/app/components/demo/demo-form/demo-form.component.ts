import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.css']
})
export class DemoFormComponent implements OnInit {

  @Input() task;
  @Input() action;
  @Output() send = new EventEmitter
  
  constructor() { }

  ngOnInit() {
  }

  sendTask(){
    this.send.emit();
  }

}