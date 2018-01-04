import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../../task/new-task/new-task.component';
import { ProjectService } from '../../../services/project.service';
import { TaskService } from '../../../services/task.service';
import { DragulaService } from 'ng2-dragula';
import { FormControl } from '@angular/forms';
import { ViewContainerRef } from '@angular/core';
import { TdDialogService } from '@covalent/core';
import { setInterval } from 'timers';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  project;
  lane0 = {tasks:[{title:'',description:''}]}
  lane1 = {tasks:[{title:'',description:''}]}
  lane2 = {tasks:[{title:'',description:''}]}
  lane3 = {tasks:[{title:'',description:''}]}
  lane4 = {tasks:[{title:'',description:''}]}
  drops;

  newLane = {status: false, title: ''};
  
  constructor(
    private _ps: ProjectService,
    private _ts: TaskService,
    private _ds: DragulaService,
    private dialog: MatDialog,
    private _tdDialog: TdDialogService,
    private _tdDialogRef: ViewContainerRef
  ){}

  ngOnInit() {
    this.getAgenda();
    this.setLaneOptions();
    this.drops = this._ds.dropModel.subscribe((value) => {
      this.onDropModel(value.slice(1));
    });
  }

  getAgenda(){
    this._ps.getAgenda()
      .subscribe(agenda => {
        this.project = agenda;
        [this.lane0, this.lane1, this.lane2, this.lane3, this.lane4] = agenda['grid'];
      });
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

  addLane(){
    setTimeout(() => { this.newLane.status = true; }, 400);
  }

  onDropModel(args) {

    if(args[0].id !== 'project'){
      let [el, target, source] = args;
      let lane: any = this.checkLane(args[2].id);
      let id = lane['_id'];
      lane = this.getLaneTaskIDs(lane);

      if(args[2].id !== args[1].id){
        let newLane: any = this.checkLane(args[1].id);
        let id2 = newLane['_id'];
        newLane = this.getLaneTaskIDs(newLane);
        this._ts.updateLaneOrder(newLane, id2).subscribe(result => {
          this._ts.updateLaneOrder(lane, id).subscribe(result => this.getAgenda());
        });
      } else {
        this._ts.updateLaneOrder(lane, id).subscribe(result => this.getAgenda());
      }
    }
  }

  checkLane(laneId){
    switch(laneId) {
      case 'lane0':
        return this.lane0;
      case 'lane1':
        return this.lane1;
      case 'lane2':
        return this.lane2;
      case 'lane3':
        return this.lane3;
      case 'lane4':
        return this.lane4;
    }
  }

  getLaneTaskIDs(lane){
    return Array.from(lane.tasks, item => item['_id']);
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

  createNewLane(){
    if(this.newLane.title === '') return;
    let lane = {title: this.newLane.title};
    this._ts.createLane(lane, this.project._id)
      .subscribe(result => {
        if(result['status']){
          if(result) this.getAgenda();
          this.newLane = {status: false, title: ''};
        }
      });
  }

  openEdit(lane) {
    this._tdDialog.openPrompt({
      message: '',
      title: `Edit "${lane.title}" Lane`,
      value: `${lane.title}`,
      acceptButton: 'Edit',
    }).afterClosed().subscribe(title => {
      // if lane title is too long, show message and cancel!!!
      if(title) {
        lane.title = title;
        this._ts.updateLane(lane)
          .subscribe(result => {return});
      }
    });
  }

  openDelete(lane) {
    let message;
    let notEmpty = false;
    if(lane.tasks.length > 0){
      message = `Are you sure you want to delete this "${lane.title}" lane?
        All its items will be moved to your "${this.lane0['title']}" lane.`;
      notEmpty = true;
    } else {
      message = `Are you sure you want to delete this "${lane.title}" lane?`
    }
    this._tdDialog.openConfirm({
      message: message,
      title: `Delete "${lane.title}" Lane`,
      acceptButton: 'Delete',
    }).afterClosed().subscribe((accept) => {
      if(accept) {
        if(notEmpty){
          let tasksIDs = this.getLaneTaskIDs(lane);
          let lane0IDs = this.getLaneTaskIDs(this.lane0);
          tasksIDs = [...lane0IDs, ...tasksIDs];
          this._ts.updateLaneOrder(tasksIDs, this.lane0['_id'])
            .subscribe(result => {
              this._ts.removeLane(lane._id).subscribe(lane => this.getAgenda());
              this.getAgenda()
            });
        } else {
          this._ts.removeLane(lane._id).subscribe(lane => this.getAgenda());
        }
      }
    });
  }

  ngOnDestroy(){
    this.drops.unsubscribe();
  }

}
