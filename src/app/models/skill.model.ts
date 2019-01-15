import { Resource } from '../core/base/resource.model';
import { Level } from '../models/level.model';

export class Skill extends Resource {
    public levels: Level[];
    public levelId: Number;
}
