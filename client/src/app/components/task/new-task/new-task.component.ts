import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent implements OnInit {

  task = { title:'', description:'', details:'', contributor:'' }
  laneId;
  contributors;
  action = 'Add'

  constructor(
    private dialog: MatDialogRef<NewTaskComponent>,
    private snackbar: MatSnackBar,
    private _ts: TaskService,
    @Inject(MAT_DIALOG_DATA) private data
  ) { }

  ngOnInit(){
    this.laneId = this.data.lane._id;
    this.contributors = this.data.contributors;
  }

  createTask(task){
    this._ts.createTask(task, this.laneId)
      .subscribe(result => {
        this.snackbar.open(result['msg'], 'x', {duration: 3000});
        if(result['status']) {
          this.dialog.close(true);
        }
      });
  }

}