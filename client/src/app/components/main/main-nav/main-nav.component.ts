import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../../services/project.service';
import { MatDialog } from '@angular/material';
import { DragulaService } from 'ng2-dragula';
import { NewProjectComponent } from '../../project/new-project/new-project.component';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {

  @Input() user;
  projects;
  current;

  constructor(
    private _ps: ProjectService,
    private _ds: DragulaService,
    private _dialog: MatDialog,
    private _router: Router
  ) { }

  ngOnInit() {
    this._ps.getUserProjects();
    this.listProjects();
  }

  listProjects(){
    this._ps.projects$
    .subscribe(user => this.projects = user['projects']);
  }

  openNewProject(){
    let dialogRef = this._dialog.open(NewProjectComponent, {
      width: '500px',
      data: this.user
    });
    dialogRef.beforeClose().subscribe(result => {
      if(result) this._ps.getUserProjects();
    });
  }

  goToProject(project){
    this.current = project._id;
    if(project._id === this.user['agenda']){
      this._ps.getAgenda();
      this._router.navigate(['dashboard']);
    }
    else {
      this._ps.updateProject(project._id);
      this._router.navigate(['projects', project._id]);
    }
  }

}
