// app.routing.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {JemelComponent} from "./jemel/jemel.component";
import {DexterComponent} from "./dexter/dexter.component";
import {QuestionComponent} from "./question/question.component";
import {QuizComponent} from "./quiz/quiz.component";
import {QuizStartComponent} from "./quiz/quiz-start/quiz-start.component";
import {QuizEndComponent} from "./quiz/quiz-end/quiz-end.component";
import {QuizExecutionComponent} from "./quiz/quiz-execution/quiz-execution.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'jemel' },
  { path: 'jemel', component: JemelComponent},
  { path: 'dexter', component: DexterComponent},
  { path: 'question', component: QuestionComponent},
  { path: 'quiz/:id', component: QuizComponent, children: [
    {path: 'start', component: QuizStartComponent},
    {path: 'execution', component: QuizExecutionComponent},
    {path: 'end', component: QuizEndComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

export const routingComponents = [JemelComponent];
