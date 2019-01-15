import { Injectable } from '@angular/core';
import { ResourceService } from '../core/base/resource.service';
import { Skill } from '../models/skill.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';
import { UserSkillSerializer } from './serializers/user-skill.serializer';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { SkillService } from './skill.service';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserLevelService extends ResourceService<Skill> {
  constructor(httpClient: HttpClient, authService: AuthService, skillService: SkillService) {
    super(
      httpClient,
      `https://truelimenode.herokuapp.com/api/users/${authService.getTokenUser()._id}`,
      'skills',
      new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': `${authService.getCookie()}`
      }),
      new UserSkillSerializer(skillService));
  }

  deleteLevelFromSkill(skillId: Number, levelId: Number): Observable<any> {
    return this.httpClient.delete<any>(`${this.url}/${this.endpoint}/${skillId}/levels/${levelId}`, this.httpOptions).pipe(
      map(data => this.serializer.fromJson(data))
    );
  }

}
