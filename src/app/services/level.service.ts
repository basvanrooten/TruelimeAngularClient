import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Level } from '../models/level.model';
import { Router } from '@angular/router';
// tslint:disable-next-line:max-line-length
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJuYmYiOjE1NDUwNjE4NTQsImV4cCI6MTU3NjU5Nzg1NH0.ag0v__J7G1LB8Fmh26wnBB20kx7Y_Sg2PnXTZFTEVf8';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  // GET all Levels
  getLevels() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })};
    return this.httpClient.get('https://truelimecertserviceapi.azurewebsites.net/api/Levels/', httpOptions);
  }

  // GET specific Level
  getLevel(levelId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })};
    return this.httpClient.get('https://truelimecertserviceapi.azurewebsites.net/api/Levels/' + levelId, httpOptions);
  }

  // POST new Level
  postLevel(level: Level) {
    const packageToPost = JSON.stringify(level);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })};
    return this.httpClient.post('https://truelimecertserviceapi.azurewebsites.net/api/Levels/', packageToPost, httpOptions)
      .subscribe(
        (response) => {
          console.log('POST /api/Levels/ call successful', response);
        },
        response => {
          console.log('POST /api/Levels/ call in error', response);
        },
        () => {
          console.log('The POST observable is now compconsted.');
        });
  }

  // Post new Level and add to existing Skill
  postLevelToSkill(level: Level, skillId: number) {
    const packageToPost = JSON.stringify(level);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })};
    // tslint:disable-next-line:max-line-length
    return this.httpClient.post('https://truelimecertserviceapi.azurewebsites.net/api/Skills/' + skillId + '/Level', packageToPost, httpOptions)
      .subscribe(
        (response) => {
          console.log('POST /api/Skills/' + skillId + '/Level/ call successful', response);
        },
        response => {
          console.log('POST /api/Skills/' + skillId + '/Level/ call in error', response);
        },
        () => {
          console.log('The POST observable is now compconsted.');
        });
  }

  // PUT existing Level
  putLevel(level: Level, levelId: number) {
    const packageToPost = JSON.stringify(level);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })};
    return this.httpClient.put('https://truelimecertserviceapi.azurewebsites.net/api/Levels/' + levelId, packageToPost, httpOptions)
      .subscribe(
        (response) => {
          console.log('PUT /api/Levels/ call successful', response);
        },
        response => {
          console.log('PUT /api/Levels/ call in error', response);
        },
        () => {
          console.log('The PUT observable is now compconsted.');
        });
  }

  // DEconstE existing Level
  deconsteLevel(levelId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })};
    return this.httpClient.put('https://truelimecertserviceapi.azurewebsites.net/api/Levels/' + levelId, httpOptions)
      .subscribe(
        (response) => {
          console.log('DEconstE /api/Levels/ call successful', response);
        },
        response => {
          console.log('DEconstE /api/Levels/ call in error', response);
        },
        () => {
          console.log('The DEconstE observable is now compconsted.');
        });
  }
}
