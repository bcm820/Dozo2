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

// Auth Components
import { UserFormComponent } from './components/auth/user-form/user-form.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AccountComponent } from './components/auth/account/account.component';
import { LoginComponent } from './components/auth/login/login.component';

// Layout Components
import { MainComponent } from './components/main/main.component';
import { MainNavComponent } from './components/main/main-nav/main-nav.component';
import { ProfileComponent } from './components/main/main-nav/profile/profile.component';
import { MainNav2Component } from './components/main/main-nav2/main-nav2.component';
import { UserComponent } from './components/main/main-nav2/user/user.component';
import { SidebarComponent } from './components/main/sidebar/sidebar.component';
import { LandingComponent } from './components/main/landing/landing.component';
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
    LandingComponent,
    AccountComponent,
    DashboardComponent,
    UserFormComponent,
    MainNavComponent,
    MainComponent,
    UserComponent,
    ProjectFormComponent,
    ProfileComponent,
    MainNav2Component,
    SidebarComponent,
    NewProjectComponent,
    NewTaskComponent,
    TaskFormComponent,
    EditProjectComponent,
    EditTaskComponent,
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
    UserComponent,
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
