import { Injectable } from '@angular/core';
import { ResourceService } from '../core/base/resource.service';
import { HttpClient } from '@angular/common/http';
import { AssessmentSerializer } from './serializers/assessment.serializer';
import { Assessment } from '../models/assessment.model';

@Injectable({
  providedIn: 'root'
})

export class UserAssessmentService extends ResourceService<Assessment> {
  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      'https://truelimenode.herokuapp.com/api',
      'users',
      new AssessmentSerializer());
  }
}
