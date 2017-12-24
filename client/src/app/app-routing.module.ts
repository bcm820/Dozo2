import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ManagerComponent } from './components/manager/manager.component';
import { MemberComponent } from './components/member/member.component';

const routes: Routes = [
  {path:'', component: LoginComponent, outlet:'a'},
  {path:'register', component: RegisterComponent, outlet:'a'},
  {path:'manager', component: ManagerComponent, outlet:'b'},
  {path:'dashboard', component: MemberComponent, outlet:'c'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
