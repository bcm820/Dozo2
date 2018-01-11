import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { DemoComponent } from './components/demo/demo.component';

const routes: Routes = [
  { path:'', component: MainComponent, children: [

    { path: '', component: DemoComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'projects/:id', component: DashboardComponent }
    
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
