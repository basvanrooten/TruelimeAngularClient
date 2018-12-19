import { Injectable } from '@angular/core';
import { ResourceService } from '../core/base/resource.service';
import { Level } from '../models/level.model';
import { HttpClient } from '@angular/common/http';
import { LevelSerializer } from "./serializers/level.serializer";

@Injectable({
  providedIn: 'root'
})

export class LevelService extends ResourceService<Level> {
  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      'https://truelimecertserviceapi.azurewebsites.net/api',
      'Levels',
      new LevelSerializer());
  }
}
