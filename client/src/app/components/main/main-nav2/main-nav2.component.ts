import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { JoinProjectComponent } from '../../project/join-project/join-project.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-main-nav2',
  templateUrl: './main-nav2.component.html',
  styleUrls: ['./main-nav2.component.css']
})
export class MainNav2Component implements OnInit, OnDestroy {

  @Input() user;
  projects$;
  projects;
  
  constructor(
    private _ps: ProjectService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this._ps.list();
    this.projects$ = this._ps.team_projects$
    .subscribe(projects => this.projects = projects);
  }

  openJoinProject(project){
    this.dialog.open(JoinProjectComponent, {
      width:'500px',
      data: project,
      autoFocus: false
    })
  }

  ngOnDestroy(){
    this.projects$.unsubscribe();
  }

}
