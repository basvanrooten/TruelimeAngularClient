import { Skill } from '../../models/skill.model';
import { SkillService } from '../skill.service';

export class UserSkillSerializer {

    constructor(private skillService: SkillService) {}

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

    fromJsonList(json: any, key: string): Skill[] {

        let skills: Skill[] = [];

        json.forEach(element => {
            let skill = new Skill();
            skill.id = element.skillId;
            skills.push(skill);
        });

        return skills;

    }
}
