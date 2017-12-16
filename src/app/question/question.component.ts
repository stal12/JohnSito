import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Answer, Question} from "../question.model";

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuestionComponent implements OnInit {
  question: Question;
  textSize: string;

  constructor() { }

  ngOnInit() {
    this.question = new Question(
      'Rispondi alla domanda, Jemel merda',
      [new Answer('Puzzi', 1), new Answer('Sei merda', 3), new Answer('Muori male', 1000), new Answer('Ti voglio bene piccolo cane malato  bruttoaoi tirittura mangia banane al semolino e sta mael cspiteroni quanta ROBA CHE CI STA dio minchia', -10)]
    );
    console.log(this.question.answers[0]);
    let maxLength = 0;
    for (const answer of this.question.answers) {
      if (answer.text.length > maxLength) {
        maxLength = answer.text.length;
      }
    }
    if (maxLength < 15) {
      this.textSize = "text-50"
    } else if (maxLength < 45) {
      this.textSize = "text-35"
    } else {
      this.textSize = "text-20"
    }
  }
}
