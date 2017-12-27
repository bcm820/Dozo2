import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { LandingComponent } from './components/main/landing/landing.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';

const routes: Routes = [
  {path:'', component: MainComponent, children:[
    {path:'', component: LandingComponent},
    {path:'dashboard', component: DashboardComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
