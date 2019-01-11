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

export class UserSkillService extends ResourceService<Skill> {
  constructor(httpClient: HttpClient, authService: AuthService, skillService: SkillService) {
    super(
      httpClient,
      `https://truelimenode.herokuapp.com/api/users/${authService.getUserDetails()._id}`,
      'skills',
      new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': `${authService.getCookie()}`
      }),
      new UserSkillSerializer(skillService));
  }

  // public updateList(item: any): Observable<Skill> {
  //   return this.httpClient
  //     .put<any>(`${this.url}/${this.endpoint}`, item, this.httpOptions);
  // }

  public updateList(item: any): Observable<any> {
    return this.httpClient.put<any>(`${this.url}/${this.endpoint}`, item, this.httpOptions).pipe(
      map((result: any) => {
        return result;
      })
    );
  }

  list(): Observable<Skill[]> {
    return this.httpClient
    .get(`${this.url}/${this.endpoint}`, this.httpOptions)
    .pipe(map((data: any) => {
        return this.serializer.fromJsonList(data, 'processedObjects');
    })
    );
  }

}
