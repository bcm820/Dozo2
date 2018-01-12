import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DemoEditComponent } from '../demo/demo-edit/demo-edit.component';
import { ProjectService } from '../../services/project.service';
import { DragulaService } from 'ng2-dragula';
import { Router } from '@angular/router';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, OnDestroy {

  user$;
  project$;
  project: any = {
    grid: [
      {
        title: "What is Dozo?",
        tasks: [
          {title: "A Project Visualization Tool",
          description: "Dozo uses simple Kanban boards for seamless project workflows. Use it to plan, assign, and track each step throughout the course of a project. I used it to track a lot of my progress in building this app!"},
          {title: "Disclaimer!",
          description: "Dozo's simple interface likely won't meet all of your Scrum/Agile needs. But it makes for a good introduction!"}
        ]
      },
      { title: "Credits", tasks: [
        {title: "The MEAN Stack",
        description: "Dozo is built in full-stack JavaScript via the MEAN stack, which runs on Node.js and uses the Express web framework, MongoDB (via Mongoose ODM), and Angular on the front-end."},
        {title: "UX / UI",
        description: "Dozo's interface uses design elements provided by Angular Material & Teradata Covalent UI."},
        {title: "Dragula / ng2-Dragula",
        description: "Much thanks to Nicolas Bevacqua and Valor Software for their easy-to-integrate drag-and-drop projects."}
      ] },
      { title: "About Me", tasks: [
        {title: "Full-Stack Developer",
        description: "I'm Brian, a full stack web developer in the Washington D.C. area. I'm able to work with various web frameworks in JavaScript, Python, and Java, and I'm always looking to learn more!"},
        {title: "Looking for a developer?",
        description: "If you like what you see, I'd love to hear from you! Please use the links at the bottom-right corner of the page to view my LinkedIn and GitHub, or to send me an email."}
      ] },
      { title: "Thanks!",
        tasks: [
          {title: "Special Thanks to Coding Dojo",
          description: "I owe a ton to my mentors and friends at Coding Dojo D.C. Thank you for accelerating my growth as a developer during my residency!"},
          {title: "Thanks for stopping by!",
          description: "Click the button at the top-right corner of the page to use Dozo's more advanced features!"}
        ]
      }
    ]
  }
  
  constructor(
    private _ps: ProjectService,
    private _ds: DragulaService,
    private _dialog: MatDialog,
    private _router: Router
  ){}

  ngOnInit() {
    this._ps.updateDemo(this.project);
    this.project$ = this._ps.project$
    .subscribe(project => this.project = project);
  }

  openEditTask(task){
    let dialogRef = this._dialog.open(DemoEditComponent, {
      width: '400px',
      data: task
    });
  }

  ngOnDestroy(){
  }

}