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
  userID;
  ownerID;
  contributors;
  lane_id;
  action = 'Add Item';

  constructor(
    private dialog: MatDialogRef<NewTaskComponent>,
    private snackbar: MatSnackBar,
    private _ts: TaskService,
    @Inject(MAT_DIALOG_DATA) private data
  ) { }

  ngOnInit(){
    this.lane_id = this.data.lane_id;
    this.contributors = this.data.contributors;
    this.ownerID = this.data.ownerID;
    this.userID = this.data.userID;
  }

  createTask(task){
    if(this.ownerID !== this.userID)
      this.task.contributor = this.userID;
    this._ts.createTask(task, this.lane_id)
      .subscribe(result => {
        this.snackbar.open(result['msg'], 'x', {duration: 3000});
        if(result['status']) {
          this.dialog.close(true);
        }
      });
  }

}