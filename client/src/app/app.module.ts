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

// Services
import { AuthService } from './services/auth.service';
import { ProfileService } from './services/profile.service';
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
import { MainNav2Component } from './components/main/main-nav2/main-nav2.component';
import { SidebarComponent } from './components/main/sidebar/sidebar.component';
import { LandingComponent } from './components/main/landing/landing.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { UserComponent } from './components/main/user/user.component';
import { ProfileComponent } from './components/main/profile/profile.component';

// Project Components
import { ProjectFormComponent } from './components/project/project-form/project-form.component';
import { NewProjectComponent } from './components/project/new-project/new-project.component';


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
  ],
  entryComponents: [
    RegisterComponent,
    LoginComponent,
    AccountComponent,
    UserComponent,
    ProfileComponent,
    NewProjectComponent
  ],
  providers: [
    AuthService,
    ProfileService,
    ProjectService,
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
