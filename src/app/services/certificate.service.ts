import { Injectable } from '@angular/core';
import { ResourceService } from '../core/base/resource.service';
import { Certificate } from '../models/certificate.model';
import { HttpClient } from '@angular/common/http';
import { CertificateSerializer } from "./serializers/certificate.serializer";
import { Router } from "@angular/router";


@Injectable({
  providedIn: 'root'
})

export class CertificateService extends ResourceService<Certificate> {
  constructor(httpClient: HttpClient) {
    super(
      httpClient,
      'https://truelimecertserviceapi.azurewebsites.net/api',
      'Certificates',
      new CertificateSerializer());
  }
}
