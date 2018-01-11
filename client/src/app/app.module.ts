// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// UI modules
import { MaterialModule } from './ui/material.module';
import { CovalentModule } from './ui/covalent.module';
import { DragulaModule } from 'ng2-dragula';

// Services
import { UserService } from './services/user.service';
import { ProjectService } from './services/project.service';
import { TaskService } from './services/task.service';

// AppComponent
import { AppComponent } from './components/app.component';

// Demo Components
import { DemoComponent } from './components/demo/demo.component';
import { DemoSidebarComponent } from './components/demo/demo-sidebar/demo-sidebar.component';

// Auth Components
import { UserFormComponent } from './components/auth/user-form/user-form.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AccountComponent } from './components/auth/account/account.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ProfileComponent } from './components/auth/profile/profile.component';

// Layout Components
import { MainComponent } from './components/main/main.component';
import { MainNavComponent } from './components/main/main-nav/main-nav.component';
import { MainNav2Component } from './components/main/main-nav2/main-nav2.component';
import { SidebarComponent } from './components/main/sidebar/sidebar.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';

// Project Components
import { ProjectFormComponent } from './components/project/project-form/project-form.component';
import { NewProjectComponent } from './components/project/new-project/new-project.component';
import { EditProjectComponent } from './components/project/edit-project/edit-project.component';

// Task Components
import { TaskFormComponent } from './components/task/task-form/task-form.component';
import { NewTaskComponent } from './components/task/new-task/new-task.component';
import { EditTaskComponent } from './components/task/edit-task/edit-task.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AccountComponent,
    DashboardComponent,
    DemoComponent,
    UserFormComponent,
    MainNavComponent,
    MainComponent,
    ProjectFormComponent,
    ProfileComponent,
    MainNav2Component,
    SidebarComponent,
    NewProjectComponent,
    NewTaskComponent,
    TaskFormComponent,
    EditProjectComponent,
    EditTaskComponent,
    DemoSidebarComponent,
  ],
  imports: [
    MaterialModule,
    CovalentModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    DragulaModule,
  ],
  entryComponents: [
    RegisterComponent,
    LoginComponent,
    AccountComponent,
    ProfileComponent,
    NewProjectComponent,
    NewTaskComponent,
    EditProjectComponent,
    EditTaskComponent,
  ],
  providers: [
    UserService,
    ProjectService,
    TaskService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
