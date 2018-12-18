import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Skill } from '../model/skill.model';
import { Router } from "@angular/router";
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJuYmYiOjE1NDUwNjE4NTQsImV4cCI6MTU3NjU5Nzg1NH0.ag0v__J7G1LB8Fmh26wnBB20kx7Y_Sg2PnXTZFTEVf8';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  // GET all Skills
  getSkills() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })};
    return this.httpClient.get('https://truelimecertserviceapi.azurewebsites.net/api/Skills/', httpOptions);
  }

  // GET specific Skill
  getSkill(skillId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })};
    return this.httpClient.get('https://truelimecertserviceapi.azurewebsites.net/api/Skills/' + skillId, httpOptions);
  }

  // POST new Skill
  postSkill(skill: Skill) {
    let packageToPost = JSON.stringify(skill);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })};
    return this.httpClient.post('https://truelimecertserviceapi.azurewebsites.net/api/Skills/', packageToPost, httpOptions)
      .subscribe(
        (response) => {
          console.log("POST /api/Skills/ call successful", response);
        },
        response => {
          console.log("POST /api/Skills/ call in error", response);
        },
        () => {
          console.log("The POST observable is now completed.");
        });
  }

  // PUT existing Skill
  putSkill(skill: Skill, skillId: number) {
    let packageToPost = JSON.stringify(skill);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })};
    return this.httpClient.put('https://truelimecertserviceapi.azurewebsites.net/api/Skills/' + skillId, packageToPost, httpOptions)
      .subscribe(
        (response) => {
          console.log("PUT /api/Skills/ call successful", response);
        },
        response => {
          console.log("PUT /api/Skills/ call in error", response);
        },
        () => {
          console.log("The PUT observable is now completed.");
        });
  }

  // DELETE existing Skill
  deleteSkill(skillId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })};
    return this.httpClient.put('https://truelimecertserviceapi.azurewebsites.net/api/Skills/' + skillId, httpOptions)
      .subscribe(
        (response) => {
          console.log("DELETE /api/Skills/ call successful", response);
        },
        response => {
          console.log("DELETE /api/Skills/ call in error", response);
        },
        () => {
          console.log("The DELETE observable is now completed.");
        });
  }
}
