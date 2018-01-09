import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ProjectService } from '../../../services/project.service';

@Component({
  selector: 'project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {

  @Input() project;
  @Input() action;
  @Input() users;
  @Output() send = new EventEmitter;
  minDate = new Date();
  
  constructor(private _ps: ProjectService) { }

  ngOnInit() {
  }

  sendProject(){
    this.send.emit(this.project);
  }

}
