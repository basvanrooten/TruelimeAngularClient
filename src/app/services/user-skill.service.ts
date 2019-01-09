import { Injectable } from '@angular/core';
import { ResourceService } from '../core/base/resource.service';
import { Skill } from '../models/skill.model';
import { HttpClient } from '@angular/common/http';
import { SkillSerializer } from './serializers/skill.serializer';

@Injectable({
  providedIn: 'root'
})

export class UserSkillService extends ResourceService<Skill> {
  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      'https://truelimenode.herokuapp.com/api',
      'skills',
      new SkillSerializer());
  }
}
