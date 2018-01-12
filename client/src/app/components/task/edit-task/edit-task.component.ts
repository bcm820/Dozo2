import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { TaskService } from '../../../services/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {

  action = 'Save Changes';
  task;
  contributors;
  userID;
  ownerID;
  
  constructor(
    private dialog: MatDialogRef<EditTaskComponent>,
    private snackbar: MatSnackBar,
    private _ts: TaskService,
    @Inject(MAT_DIALOG_DATA) private data
  ) { }

  ngOnInit() {
    this.task = this.data.task;
    this.userID = this.data.userID;
    this.ownerID = this.data.ownerID;
    this.contributors = this.data.contributors;
  }

  updateTask(task){
    this._ts.updateTask(task)
      .subscribe(result => {
        this.snackbar.open(result['msg'], 'x', {duration: 3000});
        if(result['status']) {
          this.dialog.close(true);
        }
      });
  }

}
