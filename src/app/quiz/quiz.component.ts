import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Quiz} from "../quiz.model";
import {Answer, Question} from "../question.model";

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class QuizComponent implements OnInit {
  quiz: Quiz;

  constructor() { }

  ngOnInit() {
    this.quiz = new Quiz(
      'Begoni',
      'Naso Solido',
      'Questo quiz ti permette di scoprire in quale bidet stanno meglio le tue palle (vagine).',
      'https://gematsu.com/wp-content/uploads/2013/06/JoJo-Trailer-5.jpg',
      'https://cdn.bathstore.com/uploads/images/presets/product_page_main/store/products/1050/20050030250-Euro-Mono-wall-hung-bidet-1.jpg',
      [
        new Question(
          'Qual è la forma del tuo culo?',
          [
            new Answer('V', 4),
            new Answer('8', 3),
            new Answer('Y', 2),
            new Answer('Stellina', 1)
          ]
        ),
        new Question(
          'Quanto è duro il tuo culo?',
          [
            new Answer('Marmo', 4),
            new Answer('Coccio', 3),
            new Answer('Plexiglas', 2),
            new Answer('Pongo', 1)
          ]
        ),
        new Question(
          'Quanto è irritabile il tuo culetto?',
          [
            new Answer('Tantissimo', 4),
            new Answer('Molto', 3),
            new Answer('Poco', 2),
            new Answer('Pochissimo', 1),
            new Answer('No', 0)
          ]
        ),
        new Question(
          'Pratichi sesso anale?',
          [
            new Answer('Sì!', 4),
            new Answer('No!', 1),
          ]
        )
      ],
      'Grazie per aver partecipato'
    );
  }

}
