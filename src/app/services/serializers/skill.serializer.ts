import { Skill } from '../../models/skill.model';

export class SkillSerializer {
    fromJson(json: any): Skill {
        const skill = new Skill();
        skill.id = json.id;
        skill.name = json.name;

        return skill;
    }

    toJson(skill: Skill): any {
        return {
            id: skill.id,
            name: skill.name
        };
    }
}
