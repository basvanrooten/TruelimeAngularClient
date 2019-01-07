import { Resource } from '../core/base/resource.model';

export class QuizAnswer extends Resource {
  public quizQuestionId: Number;
  public answer: String;
  public isCorrect: Boolean;
}
