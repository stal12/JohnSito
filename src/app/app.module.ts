import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { JemelComponent } from './jemel/jemel.component';
import {AppRoutingModule, routingComponents} from "./app-routing";
import { DexterComponent } from './dexter/dexter.component';
import {MatButtonModule, MatGridListModule} from "@angular/material";
import { QuestionComponent } from './question/question.component';
import {LayoutModule} from "ng2-flex-layout";
import { UnderPressureDirective } from './under-pressure.directive';
import { QuizComponent } from './quiz/quiz.component';
import { QuizStartComponent } from './quiz/quiz-start/quiz-start.component';
import { QuizExecutionComponent } from './quiz/quiz-execution/quiz-execution.component';
import { QuizEndComponent } from './quiz/quiz-end/quiz-end.component';


@NgModule({
  declarations: [
    AppComponent,
    JemelComponent,
    routingComponents,
    DexterComponent,
    QuestionComponent,
    UnderPressureDirective,
    QuizComponent,
    QuizStartComponent,
    QuizExecutionComponent,
    QuizEndComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatGridListModule,
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
