import { Skill } from '../../models/skill.model';

export class SkillSerializer {
    fromJson(json: any): Skill {
        const skill = new Skill();
        skill.id = json.id;
        skill.name = json.name;

        return skill;
    }

    fromJsonList(json: any, key: string): Skill[] {

      let skills: Skill[] = [];

      json[key].forEach(element => {
        skills.push(this.fromJson(element));
      });

      return skills;
  }

    toJson(skill: Skill): any {
        return {
            id: skill.id,
            name: skill.name
        };
    }
}
