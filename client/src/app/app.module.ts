import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FilterPipe } from './_tools/filter.pipe';
import { AuthService } from './_services/auth.service';
import { QAService } from './_services/qa.service';

import { QuestionsComponent } from './questions/questions.component';
import { CreateComponent } from './create/create.component';
import { ShowComponent } from './show/show.component';
import { AnswerComponent } from './answer/answer.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    QuestionsComponent,
    CreateComponent,
    ShowComponent,
    AnswerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService, QAService],
  bootstrap: [AppComponent]
})
export class AppModule { }
