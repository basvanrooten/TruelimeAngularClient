import { Resource } from '../core/base/resource.model';

export class AssessmentScore extends Resource {
  public id: Number;
  public _id: String;
  public score: Number;
  public assessmentId: Number;
}
