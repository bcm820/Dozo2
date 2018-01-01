import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../../project/new-project/new-project.component';
import { MatSnackBar } from '@angular/material';
import { DragulaService } from 'ng2-dragula';
import { TimerObservable } from 'rxjs/observable/TimerObservable';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {

  projects;
  drops;
  
  constructor(
    private _ps: ProjectService,
    private _ds: DragulaService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
  ) {
    this.drops = this._ds.drop.subscribe(result => {
      this._ps.updateUserProjects(this.projects)
      .subscribe(result => {
        this.snackbar.open(result['msg'], 'x', {duration: 3000});
      });
    });
  }

  ngOnInit() {
    this.listProjects();
  }

  listProjects(){
    this._ps.getUserProjects()
      .subscribe(user => this.projects = user['_related'].projects);
  }

  openNewProject(){
    let dialogRef = this.dialog.open(NewProjectComponent,
      {width: '500px'});
    dialogRef.beforeClose().subscribe(result => {
      if(result) this.listProjects();
    });
  }

  ngOnDestroy(){
    this.drops.unsubscribe();
  }

}