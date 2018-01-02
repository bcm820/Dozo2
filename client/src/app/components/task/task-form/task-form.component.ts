import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  @Input() task;
  @Input() action;
  @Output() send = new EventEmitter;
  
  constructor(private _ts: TaskService) { }

  ngOnInit() {
  }

  sendTask(){
    this.send.emit(this.task);
  }

}