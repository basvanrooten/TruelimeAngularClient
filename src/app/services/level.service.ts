import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Level } from '../model/level.model';
import { Router } from "@angular/router";
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
    let packageToPost = JSON.stringify(level);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })};
    return this.httpClient.post('https://truelimecertserviceapi.azurewebsites.net/api/Levels/', packageToPost, httpOptions)
      .subscribe(
        (response) => {
          console.log("POST /api/Levels/ call successful", response);
        },
        response => {
          console.log("POST /api/Levels/ call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }

  // Post new Level and add to existing Skill
  postLevelToSkill(level: Level, skillId: number) {
    let packageToPost = JSON.stringify(level);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })};
    return this.httpClient.post('https://truelimecertserviceapi.azurewebsites.net/api/Skills/' + skillId + '/Level', packageToPost, httpOptions)
      .subscribe(
        (response) => {
          console.log('POST /api/Skills/' + skillId + '/Level/ call successful', response);
        },
        response => {
          console.log('POST /api/Skills/' + skillId + '/Level/ call in error', response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }

  // PUT existing Level
  putLevel(level: Level, levelId: number) {
    let packageToPost = JSON.stringify(level);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })};
    return this.httpClient.put('https://truelimecertserviceapi.azurewebsites.net/api/Levels/' + levelId, packageToPost, httpOptions)
      .subscribe(
        (response) => {
          console.log("PUT /api/Levels/ call successful", response);
        },
        response => {
          console.log("PUT /api/Levels/ call in error", response);
        },
        () => {
          console.log("The PUT observable is now completed.");
        });
  }

  // DELETE existing Level
  deleteLevel(levelId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })};
    return this.httpClient.put('https://truelimecertserviceapi.azurewebsites.net/api/Levels/' + levelId, httpOptions)
      .subscribe(
        (response) => {
          console.log("DELETE /api/Levels/ call successful", response);
        },
        response => {
          console.log("DELETE /api/Levels/ call in error", response);
        },
        () => {
          console.log("The DELETE observable is now completed.");
        });
  }
}
