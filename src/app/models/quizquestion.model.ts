import { Resource } from '../core/base/resource.model';
import { QuizAnswer } from './quizanswer.model';

export class QuizQuestion extends Resource {
  public id: Number;
  public assessmentId: Number;
  public question: String;
  public answers: QuizAnswer[];
}
