import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ProjectService } from '../../../services/project.service';

@Component({
  selector: 'app-demo-add',
  templateUrl: './demo-add.component.html',
  styleUrls: ['./demo-add.component.css']
})
export class DemoAddComponent implements OnInit {

  task = { title:'', description:''}
  action = 'Add Item'
  project: any = {grid: [[]]};
  
  constructor(
    @Inject(MAT_DIALOG_DATA) private data,
    public dialogRef: MatDialogRef<DemoAddComponent>,
    private _ps: ProjectService
  ) { }

  ngOnInit() {
    this.project = this.data;
  }

  updateProject(){
    this.project.grid[0].tasks.push(this.task);
    this._ps.updateDemo(this.project);
    this.dialogRef.close();
  }

}
