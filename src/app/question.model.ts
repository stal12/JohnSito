export class Question {
  text: string;
  answers: Answer[];

  constructor(text: string, answers: Answer[]) {
    this.text = text;
    this.answers = answers;
  }
}

export class Answer {
  text: string;
  score: number;

  constructor(text: string, score: number) {
    this.text = text;
    this.score = score;
  }
}
// cap di caratteri nella risposta è 128
