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
  grid_ids;

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
      else this._ps.updateProject(params.get('id'));
    })
  }

  ngOnInit() {
    this.getUser();
    this.getProject();
    this.setDragulaOptions();
    this.drops$ = this._ds.drop
      .subscribe((value) => this.onDrop(value.slice(1)));
  }

  getUser(){
    this._us.updateStatus();
    this.user$ = this._us.status$
    .subscribe(user => this.user = user);
  }

  getProject(){
    this.project$ = this._ps.project$
    .subscribe(project => {

      if(project['_id']){
        this.project = project;
        let grid_ids = [];
        project['grid'].forEach(lane => {
          grid_ids.push(Array.from(lane.tasks, item => item['_id']));
        })
        this.grid_ids = grid_ids;
      }

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

  onDrop(args) {

    if(args[0].id !== 'project'){
      // let [task, newLane, oldLane, next] = args;

      let same = false;
      let j2;

      const lane = args[2].id;
      const newLane = args[1].id;
      if(lane === newLane) same = true;

      const task = args[0].id;
      
      const i1 = args[2].title; // lane idx
      const i2 = args[1].title; // newLane idx
      const j1 = args[0].title; // task idx
      if(args[3]) j2 = args[3].title; // next idx
  
      this.grid_ids[i1].splice(j1, 1);
      if(j2) this.grid_ids[i2].splice(j2, 0, task);
      else this.grid_ids[i2].push(task);

      if(!same){
        this._ts.updateLaneTasks(this.grid_ids[i1], lane)
        .subscribe(result => {
          this._ts.updateLaneTasks(this.grid_ids[i2], newLane)
          .subscribe(result => {
            this._ps.updateProject(this.project._id);
            // this.getProject();
          });
        });
      } else {
        this._ts.updateLaneTasks(this.grid_ids[i1], lane)
        .subscribe(result => {
          this._ps.updateProject(this.project._id);
          // this.getProject();
        })
      }
    }
  }

  getLaneTaskIDs(lane){
    return Array.from(lane.tasks, item => item['_id']);
  }

  addLane(){
    setTimeout(() => { this.newLane.status = true; }, 300);
  }

  createNewLane(){
    if(this.newLane.title === '') return;
    let lane = {title: this.newLane.title};
    this._ts.createLane(lane, this.project._id)
      .subscribe(result => {
        if(result['status']){
          if(result){
            this._ps.updateProject(this.project._id);
            // this.getProject();
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
        All its items will be moved to your "${this.project.grid[0].title}" lane.`;
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
          tasksIDs = [...this.grid_ids[0], ...tasksIDs];
          this._ts.updateLaneTasks(tasksIDs, this.project.grid[0]._id)
          .subscribe(result => {
            this._ts.removeLane(lane._id).subscribe(lane => {
              this._ps.updateProject(this.project._id);
              // this.getProject();
            });
          });
        } else {
          this._ts.removeLane(lane._id).subscribe(lane => {
            this._ps.updateProject(this.project._id);
            // this.getProject();
          });
        }
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
        // this.getProject();
      }
    });
  }

  openDeleteTask(taskID){
    this._tdDialog.openConfirm({
      message: 'Are you sure you want to delete this task?',
      title: 'Delete Task',
      acceptButton: 'Delete',
    }).afterClosed().subscribe((accept) => {
      if(accept) {
        this._ts.removeTask(taskID)
        .subscribe(lane => {
          this._ps.updateProject(this.project._id);
          // this.getProject();
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