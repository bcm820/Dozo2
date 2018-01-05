import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TaskService } from '../../../services/task.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {

  @Input() task;
  @Input() action;
  @Input() contributors;
  @Output() send = new EventEmitter;
  
  constructor(private _ts: TaskService, private _us: UserService) {}

  sendTask(){
    this.send.emit(this.task);
  }

}