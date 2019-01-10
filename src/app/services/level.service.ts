import { Injectable } from '@angular/core';
import { ResourceService } from '../core/base/resource.service';
import { Level } from '../models/level.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LevelSerializer } from "./serializers/level.serializer";
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})

export class LevelService extends ResourceService<Level> {
  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      'https://truelimecertserviceapi.azurewebsites.net/api',
      'Levels',
      new HttpHeaders({
        'Content-Type':  'application/json',
        // tslint:disable-next-line:max-line-length
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJuYmYiOjE1NDUxNjY4OTIsImV4cCI6MTU3NjcwMjg5Mn0.U5R0nElNH-1pqNtpFAK_YB40J2bymHYIlYzp-kVQpC4'
      }),
      new LevelSerializer());
  }
}
