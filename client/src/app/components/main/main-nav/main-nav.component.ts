import { Component, OnInit, OnDestroy, Input } from '@angular/core';
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
  drops$;

  constructor(
    private _ps: ProjectService,
    private _ds: DragulaService,
    private _dialog: MatDialog,
    private _router: Router
  ) { }

  ngOnInit() {
    this.listProjects();
    this.setListOptions();
    this.drops$ = this._ds.dropModel.subscribe((value) => {
      this.onDropModel(value.slice(1));
    });
  }

  listProjects(){
    this._ps.getUserProjects()
      .subscribe(user => this.projects = user['projects']);
  }
  
  setListOptions(){
    let bag = this._ds.find('projectList');
    if (bag !== undefined) this._ds.destroy('projectList');
    this._ds.setOptions('projectList', {
      moves: function (el, container, handle) {
        return handle.classList.contains('handle');
      }
    });
  }

  private onDropModel(args) {
    if(args[0].id === 'project'){
      let [el, target, source] = args;
      let list = Array.from(this.projects, project => project['_id']);
      this.updateProjects(list);
    }
  }

  updateProjects(list){
    this._ps.updateUserProjects(list)
      .subscribe(result => console.log(result));
  }

  openNewProject(){
    let dialogRef = this._dialog.open(NewProjectComponent,
      {width: '500px'});
    dialogRef.beforeClose().subscribe(result => {
      if(result) this.listProjects();
    });
  }

  goToProject(project){
    console.log(project);
    this.current = project._id;
    if(project._id === this.user['agenda'])
      this._router.navigate(['dashboard']);
    else this._router.navigate(['projects', project._id]);
  }

  ngOnDestroy(){
    this.drops$.unsubscribe();
  }

}
