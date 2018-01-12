import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { ProjectService } from '../../../services/project.service';

@Component({
  selector: 'app-join-project',
  templateUrl: './join-project.component.html',
  styleUrls: ['./join-project.component.css']
})
export class JoinProjectComponent {
  
  hidePW = true;
  attempt = {pw: ''};
  
  constructor(
    public dialogRef: MatDialogRef<JoinProjectComponent>,
    private _ps: ProjectService,
    @Inject(MAT_DIALOG_DATA) public project,
    private snackbar: MatSnackBar
  ) { }

  joinProject(){
    if(this.attempt.pw !== this.project['pw'])
      this.snackbar.open('Password invalid! Access denied.', 'x', {duration: 3000});
    else {
      this._ps.join(this.project['_id'])
      .subscribe(result => {
        this.snackbar.open(result['msg'], 'x', {duration: 3000});
        this.dialogRef.close();
        this._ps.getUserProjects();
      })
    }
  }

}