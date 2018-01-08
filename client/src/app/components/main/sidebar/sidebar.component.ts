import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../../project/new-project/new-project.component';
import { Router } from '@angular/router';
import { DragulaService } from 'ng2-dragula';
import { NewTaskComponent } from '../../task/new-task/new-task.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  
  project$;
  @Input() user;
  
  project;
  filter = false; // only show assigned items
  
  constructor(
    private _ps: ProjectService,
    private _dialog: MatDialog
  ) {}

  ngOnInit() {
    this.project$ = this._ps.project$
    .subscribe(project => this.project = project);
  }

  filterTasks(){
    if(!this.filter){
      this.filter = true;
      this._ps.filterProject(this.project._id);
    }
    else {
      this.filter = false;
      this._ps.updateProject(this.project._id);
    }
  }

  openNewTask(){
    let dialogRef = this._dialog.open(NewTaskComponent, {
      width: '500px',
      data: {
        lane_id: this.project.grid[0]._id,
        contributors: this.project['contributors']
      }
    });
    dialogRef.beforeClose().subscribe(result => {
      if(result) this._ps.updateProject(this.project._id);
    });
  }

  ngOnDestroy(){
    this.project$.unsubscribe();
  }

}