import { Injectable } from '@angular/core';
import { ResourceService } from '../core/base/resource.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CertificateSerializer } from './serializers/certificate.serializer';
import { Certificate } from '../models/certificate.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class UserCertificateService extends ResourceService<Certificate> {
  constructor(httpClient: HttpClient, authService: AuthService) {
    super(
      httpClient,
      'https://truelimenode.herokuapp.com/api',
      'certificates',
      new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': `${authService.getCookie()}`
      }),
      new CertificateSerializer());
  }
}

