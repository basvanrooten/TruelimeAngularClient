import { Injectable } from '@angular/core';
import { ResourceService } from '../core/base/resource.service';
import { Skill } from '../models/skill.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SkillSerializer } from './serializers/skill.serializer';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class UserSkillService extends ResourceService<Skill> {
  constructor(httpClient: HttpClient, authService: AuthService) {
    super(
      httpClient,
      `https://truelimenode.herokuapp.com/api/users/${authService.getUserDetails()._id}`,
      'skills',
      new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': `${authService.getCookie()}`
      }),
      new SkillSerializer());
  }
}
