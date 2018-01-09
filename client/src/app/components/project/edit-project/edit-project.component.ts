import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { ProjectService } from '../../../services/project.service';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {

  action = 'Update Project';
  users;

  constructor(
    private dialog: MatDialogRef<EditProjectComponent>,
    private snackbar: MatSnackBar,
    private _ps: ProjectService,
    private _us: UserService,
    @Inject(MAT_DIALOG_DATA) private project
  ) {}

  ngOnInit() {
    this.users = this._us.list();
  }

  editProject(project){
    this._ps.update(project)
    .subscribe(result => {
      this.snackbar.open(result['msg'], 'x', {duration: 3000});
      if(result['status']){
        this.dialog.close(true);
      }
    })
  }

}
