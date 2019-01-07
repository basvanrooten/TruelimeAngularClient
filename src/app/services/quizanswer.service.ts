import { Injectable } from '@angular/core';
import { ResourceService } from '../core/base/resource.service';
import { HttpClient } from '@angular/common/http';
import { QuizAnswerSerializer } from "./serializers/quizanswer.serializer";
import { QuizAnswer } from "../models/quizanswer.model";

@Injectable({
  providedIn: 'root'
})

export class QuizAnswerService extends ResourceService<QuizAnswer> {
  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      'https://truelimecertserviceapi.azurewebsites.net/api',
      'QuizAnswers',
      new QuizAnswerSerializer());
  }
}
