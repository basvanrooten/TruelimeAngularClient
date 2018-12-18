import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Certificate } from '../models/certificate.model';
import { Router } from '@angular/router';

// tslint:disable-next-line:max-line-length
const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJuYmYiOjE1NDUwNjE4NTQsImV4cCI6MTU3NjU5Nzg1NH0.ag0v__J7G1LB8Fmh26wnBB20kx7Y_Sg2PnXTZFTEVf8';

@Injectable({
  providedIn: 'root'
})
export class LevelService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  // GET all Certificates
  getCertificates() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })};
    return this.httpClient.get('https://truelimecertserviceapi.azurewebsites.net/api/Certificates/', httpOptions);
  }

  // GET specific Certificate
  getCertificate(certificateId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })};
    return this.httpClient.get('https://truelimecertserviceapi.azurewebsites.net/api/Certificates/' + certificateId, httpOptions);
  }

  // POST new Certificate
  postCertificate(certificate: Certificate) {
    const packageToPost = JSON.stringify(certificate);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })};
    return this.httpClient.post('https://truelimecertserviceapi.azurewebsites.net/api/Certificates/', packageToPost, httpOptions)
      .subscribe(
        (response) => {
          console.log('POST /api/Certificates/ call successful', response);
        },
        response => {
          console.log('POST /api/Certificates/ call in error', response);
        },
        () => {
          console.log('The POST observable is now completed.');
        });
  }

  // PUT existing Certificate
  putCertificate(certificate: Certificate, certificateId: number) {
    const packageToPost = JSON.stringify(certificate);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })};
    // tslint:disable-next-line:max-line-length
    return this.httpClient.put('https://truelimecertserviceapi.azurewebsites.net/api/Certificates/' + certificateId, packageToPost, httpOptions)
      .subscribe(
        (response) => {
          console.log('PUT /api/Certificates/ call successful', response);
        },
        response => {
          console.log('PUT /api/Certificates/ call in error', response);
        },
        () => {
          console.log('The PUT observable is now completed.');
        });
  }

  // DELETE existing Certificate
  deleteCertificate(certificateId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': token
      })};
    return this.httpClient.put('https://truelimecertserviceapi.azurewebsites.net/api/Certificates/' + certificateId, httpOptions)
      .subscribe(
        (response) => {
          console.log('DELETE /api/Certificates/ call successful', response);
        },
        response => {
          console.log('DELETE /api/Certificates/ call in error', response);
        },
        () => {
          console.log('The DELETE observable is now completed.');
        });
  }
}
