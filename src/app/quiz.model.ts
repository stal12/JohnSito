import {Question} from "./question.model";

export class Quiz {
  title: string;
  author: string;
  description: string;
  authorPicture: string;
  picture: string;
  questions: Question[];
  acknowledgements: string;

  constructor(title: string, author: string, description: string, authorPicture: string, picture: string, questions: Question[], acknowledgements: string) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.authorPicture = authorPicture;
    this.picture = picture;
    this.questions = questions;
    this.acknowledgements = acknowledgements;
  }
}
