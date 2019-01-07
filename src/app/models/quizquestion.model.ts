import { Resource } from '../core/base/resource.model';

export class QuizQuestion extends Resource {
  public assessmentId: Number;
  public question: String;
}
