import { Injectable } from '@angular/core';
import { ResourceService } from '../core/base/resource.service';
import { HttpClient } from '@angular/common/http';
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
      new QuizQuestionSerializer());
  }
}
