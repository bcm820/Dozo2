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

// Components
import { AppComponent } from './components/app.component';
import { LandingComponent } from './components/landing/landing.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Auth components
import { UserFormComponent } from './components/auth/user-form/user-form.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AccountComponent } from './components/auth/account/account.component';
import { LoginComponent } from './components/auth/login/login.component';

// Services
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    LandingComponent,
    AccountComponent,
    DashboardComponent,
    UserFormComponent,
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
    AccountComponent
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
