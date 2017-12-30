import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MatSnackBar } from '@angular/material';
import { ProjectService } from '../../../services/project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent {
  
  project = { title:'', description:'', notes:'', start_date:'', target_date:'' };
  action = 'Create Project';
  
  constructor(
    private dialog: MatDialogRef<NewProjectComponent>,
    private snackbar: MatSnackBar,
    private _ps: ProjectService
  ) { }

  createProject(project){
    this._ps.create(project)
      .subscribe(result => {
        console.log(result);
        this.snackbar.open(result['msg'], 'x', {duration: 3000});
        if(result['status']) this.dialog.close();
      });
  }

}
