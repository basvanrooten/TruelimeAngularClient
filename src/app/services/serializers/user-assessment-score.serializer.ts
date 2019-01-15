import {AssessmentScore} from "../../models/assessmentScore.model";

export class UserAssessmentScoreSerializer {
  fromJson(json: any): AssessmentScore {
    const assessmentScore = new AssessmentScore();
    if(json.processedObject === undefined){
      // Multiple
      assessmentScore._id = json._id;
      assessmentScore.score = json.score;
      assessmentScore.assessmentId = json.assessmentId;
    } else {
      // Single
      assessmentScore.id = json.processedObject.id;
      assessmentScore.score = json.processedObject.score;
      assessmentScore.assessmentId = json.processedObject.assessmentId;
    }
    return assessmentScore;
  }

  toJson(json: any): any {
    return {
      assessmentId: json.assessmentId,
      score: json.score
    };
  }

  fromJsonList(json: any, key: string): AssessmentScore[] {
    const assessmentScores: AssessmentScore[] = [];
    json.forEach((element: any) => {
      assessmentScores.push(this.fromJson(element));
    });

    return assessmentScores;
  }
}

