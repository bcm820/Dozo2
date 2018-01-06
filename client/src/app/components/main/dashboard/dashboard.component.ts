import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { NewTaskComponent } from '../../task/new-task/new-task.component';
import { EditTaskComponent } from '../../task/edit-task/edit-task.component';
import { ProjectService } from '../../../services/project.service';
import { TaskService } from '../../../services/task.service';
import { DragulaService } from 'ng2-dragula';
import { UserService } from '../../../services/user.service';
import { FormControl } from '@angular/forms';
import { ViewContainerRef } from '@angular/core';
import { TdDialogService } from '@covalent/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  user$;
  drops$;
  rtParam$;
  project$;

  user;
  project;
  filter = false; // only show assigned items

  lane0;
  lane1;
  lane2;
  lane3;
  lane4;

  newLane = {status: false, title: ''};
  
  constructor(
    private _ps: ProjectService,
    private _us: UserService,
    private _ts: TaskService,
    private _ds: DragulaService,
    private _route: ActivatedRoute,
    private _dialog: MatDialog,
    private _tdDialog: TdDialogService,
    private _tdDialogRef: ViewContainerRef
  ){
    this.rtParam$ = this._route.paramMap.subscribe(params => {
      if(!params.get('id')) this._ps.getAgenda();
      this._ps.updateProject(params.get('id'));
    })
  }

  ngOnInit() {
    this.getUser();
    this.getProject();
    this.setDragulaOptions();
    this.drops$ = this._ds.dropModel
      .subscribe((value) => this.onDropModel(value.slice(1)));
  }

  getUser(){
    this._us.updateStatus();
    this.user$ = this._us.status$
    .subscribe(user => this.user = user);
  }

  getProject(){
    this.project$ = this._ps.project$
    .subscribe(project => {
      this.project = project;
      [ this.lane0,
        this.lane1,
        this.lane2,
        this.lane3,
        this.lane4
      ] = project['grid'];
    });
  }
  
  setDragulaOptions(){
    let bag = this._ds.find('lane');
    if (bag !== undefined) this._ds.destroy('lane');
    this._ds.setOptions('lane', {
      moves: function (el, container, handle) {
        return handle.classList.contains('handle');
      }
    });
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
        this._ts.updateLaneTasks(newLane, id2).subscribe(result => {
          this._ts.updateLaneTasks(lane, id).subscribe(result => {
            this._ps.updateProject(this.project._id);
            this.getProject();
          });
        });
      } else {
        this._ts.updateLaneTasks(lane, id).subscribe(result => {
          this._ps.updateProject(this.project._id);
          this.getProject();
        });
      }
    }
  }

  checkLane(laneId){
    switch(laneId) {
      case 'lane0': return this.lane0;
      case 'lane1': return this.lane1;
      case 'lane2': return this.lane2;
      case 'lane3': return this.lane3;
      case 'lane4': return this.lane4;
    }
  }

  getLaneTaskIDs(lane){
    return Array.from(lane.tasks, item => item['_id']);
  }

  addLane(){
    setTimeout(() => { this.newLane.status = true; }, 400);
  }

  createNewLane(){
    if(this.newLane.title === '') return;
    let lane = {title: this.newLane.title};
    this._ts.createLane(lane, this.project._id)
      .subscribe(result => {
        if(result['status']){
          if(result){
            this._ps.updateProject(this.project._id);
            this.getProject();
          }
          this.newLane = {status: false, title: ''};
        }
      });
  }

  openEditLane(lane) {
    this._tdDialog.openPrompt({
      message: '',
      title: `Edit "${lane.title}" Lane`,
      value: `${lane.title}`,
      acceptButton: 'Edit',
    }).afterClosed().subscribe(title => {
      if(title) {
        lane.title = title;
        this._ts.updateLane(lane)
          .subscribe(result => {return});
      }
    });
  }

  openDeleteLane(lane) {
    let message;
    let notEmpty = false;
    if(lane.tasks && lane.tasks > 0){
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
          this._ts.updateLaneTasks(tasksIDs, this.lane0['_id'])
            .subscribe(result => {
              this._ts.removeLane(lane._id).subscribe(lane => {
                this._ps.updateProject(this.project._id);
                this.getProject();
              });
            });
        } else {
          this._ts.removeLane(lane._id).subscribe(lane => {
            this._ps.updateProject(this.project._id);
            this.getProject();
          });
        }
      }
    });
  }

  // later, move this to sidebar!
  filterTasks(){
    if(!this.filter){
      this.filter = true;
      this._ps.filterProject(this.project._id);
    }
    else {
      this.filter = false;
      this._ps.updateProject(this.project._id);
    }
    this.getProject();
  }

  openNewTask(){
    let dialogRef = this._dialog.open(NewTaskComponent, {
      width: '500px',
      data: {
        lane: this.lane0,
        contributors: this.project['contributors']
      }
    });
    dialogRef.beforeClose().subscribe(result => {
      if(result){
        this._ps.updateProject(this.project._id);
        this.getProject();
      }
    });
  }

  openEditTask(task){
    let dialogRef = this._dialog.open(EditTaskComponent, {
      width: '500px',
      data: {
        task: task,
        userID: this.user._id,
        contributors: this.project['contributors']
      }
    });
    dialogRef.beforeClose().subscribe(result => {
      if(result){
        this._ps.updateProject(this.project._id);
        this.getProject();
      }
    });
  }

  openDeleteTask(taskID){
    this._tdDialog.openConfirm({
      message: `Are you sure you want to delete this task?`,
      title: `Delete Task`,
      acceptButton: 'Delete',
    }).afterClosed().subscribe((accept) => {
      if(accept) {
        this._ts.removeTask(taskID)
        .subscribe(lane => {
          this._ps.updateProject(this.project._id);
          this.getProject();
        });
      }
    });
  }

  ngOnDestroy(){
    this.user$.unsubscribe();
    this.project$.unsubscribe();
    this.drops$.unsubscribe();
    this.rtParam$.unsubscribe();
  }

}