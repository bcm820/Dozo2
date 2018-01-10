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
  project$;
  drops$;
  rtParam$;

  user: any = false;
  project: any = false;

  newLane = {status: false, title: ''};
  newLaneTip = "Press RETURN to save";
  
  constructor(
    private _ps: ProjectService,
    private _us: UserService,
    private _ts: TaskService,
    private _ds: DragulaService,
    private _route: ActivatedRoute,
    private _dialog: MatDialog,
    private _tdDialog: TdDialogService,
    private _tdDialogRef: ViewContainerRef
  ){}

  ngOnInit() {
    this.rtParam$ = this._route.paramMap.subscribe(params => {
      if(params.get('id')) this._ps.updateProject(params.get('id'));
      else this._ps.getAgenda();
    })
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
      if(project['grid']){
        this.project = project;
      }
    });
  }

  getGrid(){
    let grid_ids = [];
    this.project['grid'].forEach(lane => {
      grid_ids.push(Array.from(lane.tasks, task => task['_id']));
    })
    return grid_ids;
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

      /*
        let [task,
          newLane,
          oldLane,
          next] = args;
      */
      
      const [lane, i1] = args[2].id.split('-');
      const [newLane, i2] = args[1].id.split('-');
      const [task, j1] = args[0].id.split('-');

      let n, j2;
      if(args[3]) [n, j2] = args[3].id.split('-');

      let grid_ids = this.getGrid();
  
      grid_ids[i1].splice(j1, 1);
      if(j2) grid_ids[i2].splice(j2, 0, task);
      else grid_ids[i2].push(task);

      this._ts.updateLaneTasks(grid_ids[i1], lane)
      .subscribe(result => {
        this._ts.updateLaneTasks(grid_ids[i2], newLane)
        .subscribe(result => {
          this._ps.updateProject(this.project._id);
        });
      });
    }
  }

  getLaneTaskIDs(lane){
    return Array.from(lane.tasks, item => item['_id']);
  }

  addLane(){
    setTimeout(() => { this.newLane.status = true; }, 300);
  }

  createNewLane(){
    if(this.newLane.title.length < 3){
      this.newLaneTip = "Titles must be at least 2 characters."
    }
    let lane = {title: this.newLane.title};
    this._ts.createLane(lane, this.project._id)
      .subscribe(result => {
        if(result['status']){
          if(result){
            this._ps.updateProject(this.project._id);
          }
          this.newLane = {status: false, title: ''};
          this.newLaneTip = "Press RETURN to save";
        }
      });
  }

  openEditLane(lane) {
    this._tdDialog.openPrompt({
      message: '',
      title: `Rename "${lane.title}" Lane`,
      value: `${lane.title}`,
      acceptButton: 'Edit',
    }).afterClosed().subscribe(title => {
      if(title.length > 2) {
        lane.title = title;
        this._ts.updateLane(lane)
          .subscribe(result => {return});
      }
    });
  }

  openDeleteLane(lane) {
    let message;
    let notEmpty = false;
    if(lane.tasks.length > 0){
      message = `Are you sure you want to delete this "${lane.title}" lane?
        All its items will be moved to the "${this.project.grid[0].title}" lane.`;
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
          tasksIDs = [...this.getGrid()[0], ...tasksIDs];
          this._ts.updateLaneTasks(tasksIDs, this.project.grid[0]._id)
          .subscribe(result => {
            this._ts.removeLane(lane._id).subscribe(lane => {
              this._ps.updateProject(this.project._id);
            });
          });
        } else {
          this._ts.removeLane(lane._id).subscribe(lane => {
            this._ps.updateProject(this.project._id);
          });
        }
      }
    });
  }

  openEditTask(task){
    let dialogRef = this._dialog.open(EditTaskComponent, {
      width: '50%',
      data: {
        task: task,
        userID: this.user._id,
        contributors: this.project['contributors']
      }
    });
    dialogRef.beforeClose().subscribe(result => {
      if(result){
        this._ps.updateProject(this.project._id);
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