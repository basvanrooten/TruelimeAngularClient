import { Resource } from '../core/base/resource.model';
import { QuizQuestion } from './quizquestion.model';

export class Assessment extends Resource {
  public id: Number;
  public name: String;
  public questions: QuizQuestion[];
}
