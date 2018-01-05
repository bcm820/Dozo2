import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../../project/new-project/new-project.component';
import { Router } from '@angular/router';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {

  @Input() agenda;
  projects;
  drops$;
  
  constructor(
    private _ps: ProjectService,
    private _ds: DragulaService,
    private _dialog: MatDialog,
    private _router: Router
  ) {}

  ngOnInit() {
    this.listProjects();
    // this.setListOptions();
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
      .subscribe(result => {return});
  }

  openNewProject(){
    let dialogRef = this._dialog.open(NewProjectComponent,
      {width: '500px'});
    dialogRef.beforeClose().subscribe(result => {
      if(result) this.listProjects();
    });
  }

  goToProject(id){
    if(id === this.agenda) this._router.navigate(['dashboard']);
    else this._router.navigate(['projects', id]);
  }

  ngOnDestroy(){
    this.drops$.unsubscribe();
  }

}