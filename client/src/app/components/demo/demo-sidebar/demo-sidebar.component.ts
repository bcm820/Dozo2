import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProjectService } from '../../../services/project.service';
import { DragulaService } from 'ng2-dragula';

@Component({
  selector: 'app-demo-sidebar',
  templateUrl: './demo-sidebar.component.html',
  styleUrls: ['./demo-sidebar.component.css']
})
export class DemoSidebarComponent implements OnInit {

  project$;
  project;
  
  constructor(private _ps: ProjectService) { }

  ngOnInit() {
    this.project$ = this._ps.project$
    .subscribe(project => this.project = project);
  }

  clearBoard(){
    this.project = {
      grid: [
        { title: "To Do", tasks: [] },
        { title: "Planning", tasks: [] },
        { title: "Doing", tasks: [] },
        { title: "Done", tasks: [] }
      ]
    }
    this._ps.updateDemo(this.project);
  }

  openNewTask(){
    // open modal!
  }

}
