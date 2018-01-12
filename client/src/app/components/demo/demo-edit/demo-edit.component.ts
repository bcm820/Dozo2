import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-demo-edit',
  templateUrl: './demo-edit.component.html',
  styleUrls: ['./demo-edit.component.css']
})
export class DemoEditComponent implements OnInit {

  action = 'Edit';
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public task,
    public dialogRef: MatDialogRef<DemoEditComponent>
  ) { }

  ngOnInit() {
  }

  closeDialog(){
    this.dialogRef.close();
  }

}
