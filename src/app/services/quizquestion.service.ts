import { Injectable } from '@angular/core';
import { ResourceService } from '../core/base/resource.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { QuizQuestionSerializer } from "./serializers/quizquestion.serializer";
import { QuizQuestion } from "../models/quizquestion.model";

@Injectable({
  providedIn: 'root'
})

export class QuizQuestionService extends ResourceService<QuizQuestion> {
  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      'https://truelimecertserviceapi.azurewebsites.net/api',
      'QuizQuestions',
      new HttpHeaders({
        'Content-Type':  'application/json',
        // tslint:disable-next-line:max-line-length
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJuYmYiOjE1NDUxNjY4OTIsImV4cCI6MTU3NjcwMjg5Mn0.U5R0nElNH-1pqNtpFAK_YB40J2bymHYIlYzp-kVQpC4'
      }),
      new QuizQuestionSerializer());
  }
}
