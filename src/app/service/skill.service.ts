import { Injectable } from '@angular/core';
import { ResourceService } from '../core/base/resource.service';
import { Skill } from '../model/skill.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SkillSerializer } from '../service/serializer/skill.serializer';

// tslint:disable-next-line:max-line-length
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJuYmYiOjE1NDUwNjE4NTQsImV4cCI6MTU3NjU5Nzg1NH0.ag0v__J7G1LB8Fmh26wnBB20kx7Y_Sg2PnXTZFTEVf8';

export class SkillService extends ResourceService<Skill> {
  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      'https://truelimecertserviceapi.azurewebsites.net/api',
      'Skills',
      new SkillSerializer());
  }
}
