import { Skill } from '../../models/skill.model';
import { SkillService } from '../skill.service';
import { resolve } from 'q';

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
        const skills: Skill[] = [];

        json.forEach(element => {
            const skill = new Skill();
            skill.id = element.skillId;
            if (!element.levelId === null) {
                skill.levelId = element.levelId;
            }
            skills.push(skill);
        });

        return skills;
    }
}
