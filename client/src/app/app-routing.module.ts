import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QuestionsComponent } from './questions/questions.component';
import { CreateComponent } from './create/create.component';
import { ShowComponent } from './show/show.component';
import { AnswerComponent } from './answer/answer.component';

const routes: Routes = [
  {path:'', component: QuestionsComponent},
  {path:'new_question', component: CreateComponent},
  {path:'question/:id', component: ShowComponent},
  {path:'question/:id/new_answer', component: AnswerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
