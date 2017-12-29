import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../../../services/project.service';
import { MatDialog } from '@angular/material';
import { ProjectNewComponent } from '../project-new/project-new.component';

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
    this.dialog.open(ProjectNewComponent, {width: '500px'})
  }

}
