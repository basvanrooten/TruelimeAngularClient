import { Injectable } from '@angular/core';
import { ResourceService } from '../core/base/resource.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserAssessmentScoreSerializer } from './serializers/user-assessment-score.serializer';
import { Assessment } from '../models/assessment.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class UserAssessmentScoreService extends ResourceService<Assessment> {
  constructor(httpClient: HttpClient, authService: AuthService) {
    super(
      httpClient,
      'https://truelimenode.herokuapp.com/api',
      'users',
new HttpHeaders({
  'Content-Type':  'application/json',//
  'x-access-token': `${authService.getCookie()}`
}),
  new UserAssessmentScoreSerializer());
}
}

