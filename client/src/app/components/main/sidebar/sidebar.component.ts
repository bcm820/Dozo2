import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { MatDialog } from '@angular/material';
import { NewProjectComponent } from '../../project/new-project/new-project.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  projects;
  // 'new project' opens dialog to create project
  // goes to a unique project page
  
  constructor(
    private _ps: ProjectService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.projects = this._ps.list();
  }

  openNewProject(){
    this.dialog.open(NewProjectComponent, {width: '500px'});
    this.projects = this._ps.list();
  }

  // openDialog(): void {
  //   let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
  //     width: '250px',
  //     data: { name: this.name, animal: this.animal }
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log('The dialog was closed');
  //     this.animal = result;
  //   });

}
