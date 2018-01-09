import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../../project/new-project/new-project.component';
import { Router } from '@angular/router';
import { DragulaService } from 'ng2-dragula';
import { EditProjectComponent } from '../../project/edit-project/edit-project.component';
import { NewTaskComponent } from '../../task/new-task/new-task.component';
import { TdDialogService } from '@covalent/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  
  project$;
  @Input() user;
  @Input() nav;
  
  project;
  filter = false; // only show assigned items
  
  constructor(
    private _ps: ProjectService,
    private _dialog: MatDialog,
    private _router: Router,
    private _tdDialog: TdDialogService
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

  openEditProject(){
    let dialogRef = this._dialog.open(EditProjectComponent, {
      width: '500px',
      data: this.project
    });
    dialogRef.beforeClose().subscribe(result => {
      if(result) this._ps.updateProject(this.project._id);
    });
  }

  deleteProject(){
    this._ps.remove(this.project._id)
    .subscribe(result => {
      this._router.navigate(['dashboard']);
      this._ps.getUserProjects();
    })
  }

  renameAgenda(){
    this._tdDialog.openPrompt({
      message: '',
      title: `Rename "${this.project.title}"`,
      value: `${this.project.title}`,
      acceptButton: 'Rename',
    }).afterClosed().subscribe(title => {
      if(title.length > 2) {
        this.project.title = title;
        this._ps.update(this.project)
        .subscribe(result => this._ps.getUserProjects());
      }
    });
  }

  ngOnDestroy(){
    this.project$.unsubscribe();
  }

}