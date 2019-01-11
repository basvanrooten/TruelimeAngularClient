import {Assessment} from "../../models/assessment.model";

export class AssessmentSerializer {
  fromJson(json: any): Assessment {
    const assessment = new Assessment();
    if(json.processedObject === undefined){
      // Multiple
      assessment.id = json.id;
      assessment.name = json.name;
    } else {
      // Single
      assessment.id = json.processedObject.id;
      assessment.name = json.processedObject.name;
    }
    return assessment;
  }

  toJson(json: any): any {
    return {
      assessmentId: json.assessmentId,
      score: json.score
    };
  }

  fromJsonList(json: any, key: string): Assessment[] {
    const assessments: Assessment[] = [];


    json[key].forEach((element: any) => {
      assessments.push(this.fromJson(element));
    });

    return assessments;
  }
}
  
