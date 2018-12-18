export class Level {
  public id: number;
  public name: string;
  public weight: number;
  public skillId: number;

  constructor(id: number, name: string, weight: number, skillId: number) {
    this.id = id;
    this.name = name;
    this.weight = weight;
    this.skillId = skillId;
  }
}
