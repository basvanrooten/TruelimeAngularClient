import {Assessment} from "../../models/assessment.model";

export class AssessmentSerializer {
  fromJson(json: any): Assessment {
    const assessment = new Assessment();
    assessment.id = json.id;
    assessment.name = json.name;

    return assessment;
  }

  toJson(assessment: Assessment): any {
    return {
      id: assessment.id,
      name: assessment.name
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
  
