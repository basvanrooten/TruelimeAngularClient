import { Level } from '../../models/level.model';

export class LevelSerializer {
  fromJson(json: any): Level {
    const level = new Level();
    level.id = json.id;
    level.name = json.name;
    level.weight = json.weight;
    level.skillId = json.skillId;

    return level;
  }

  toJson(level: Level): any {
    return {
      id: level.id,
      name: level.name,
      weight: level.weight,
      skillId: level.skillId
    };
  }

  fromJsonList(json: any, key: string): Level[] {
    const levels: Level[] = [];

    json[key].forEach((element: any) => {
      levels.push(this.fromJson(element));
    });

    return levels;
  }
}
