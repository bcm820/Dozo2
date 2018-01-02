import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../../task/new-task/new-task.component';
import { ProjectService } from '../../../services/project.service';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  project;
  drops;
  removes;
  
  constructor(
    private _ps: ProjectService,
    private _ds: DragulaService,
    private dialog: MatDialog,
  ){}

  ngOnInit() {
    this.setLaneOptions();
    this.getAgenda();
  }

  getAgenda(){
    this._ps.getAgenda()
      .subscribe(agenda => this.project = agenda);
  }

  setLaneOptions(){
    let bag = this._ds.find('lane');
    if (bag !== undefined) this._ds.destroy('lane');
    this._ds.setOptions('lane', {
      moves: function (el, container, handle) {
        return handle.classList.contains('handle');
      }
    });
  }

  openNewTask(){
    let dialogRef = this.dialog.open(NewTaskComponent, {
      width: '500px',
      data: this.project
    });
    dialogRef.beforeClose().subscribe(result => {
      if(result) this.getAgenda();
    });
  }

}
