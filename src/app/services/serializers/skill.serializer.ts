import { Skill } from '../../models/skill.model';

export class SkillSerializer {
    fromJson(json: any): Skill {
        const skill = new Skill();
        skill.id = json.id;
        skill.name = json.name;
        skill.levels = json.levels;

        return skill;
    }

    toJson(skill: Skill): any {
        return {
            id: skill.id,
            name: skill.name
        };
    }

    fromJsonList(json: any, key: string): Skill[] {
        const skills: Skill[] = [];
        json[key].forEach((element: any) => {
          skills.push(this.fromJson(element));
        });

        return skills;
    }
}
