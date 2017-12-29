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

// Components
import { AppComponent } from './components/app.component';

import { UserFormComponent } from './components/auth/user-form/user-form.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AccountComponent } from './components/auth/account/account.component';
import { LoginComponent } from './components/auth/login/login.component';

import { MainComponent } from './components/main/main.component';
import { MainNavComponent } from './components/main/main-nav/main-nav.component';
import { LandingComponent } from './components/main/landing/landing.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { UserComponent } from './components/main/user/user.component';
import { ProfileComponent } from './components/main/profile/profile.component';
import { ProjectNewComponent } from './components/main/project-new/project-new.component';
import { MainNav2Component } from './components/main/main-nav2/main-nav2.component';
import { SidebarComponent } from './components/main/sidebar/sidebar.component';


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
    ProjectNewComponent,
    ProfileComponent,
    MainNav2Component,
    SidebarComponent,
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
    ProjectNewComponent
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
