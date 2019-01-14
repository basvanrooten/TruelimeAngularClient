import { Injectable } from '@angular/core';
import { ResourceService } from '../core/base/resource.service';
import { UserCertificateSerializer } from './serializers/user-certificate.serializer';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { SkillService } from './skill.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Certificate } from '../models/certificate.model';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserCertificateService extends ResourceService<Certificate> {
  constructor(httpClient: HttpClient, authService: AuthService, skillService: SkillService) {
    super(
      httpClient,
      `https://truelimenode.herokuapp.com/api/users/${authService.getTokenUser()._id}`,
      'certificates',
      new HttpHeaders({
        'Content-Type':  'application/json',
        'x-access-token': `${authService.getCookie()}`
      }),
      new UserCertificateSerializer());
  }

  // public updateList(item: any): Observable<Skill> {
  //   return this.httpClient
  //     .put<any>(`${this.url}/${this.endpoint}`, item, this.httpOptions);
  // }

  public updateList(item: any): Observable<any> {
    return this.httpClient.put<any>(`${this.url}/${this.endpoint}`, item, this.httpOptions).pipe(
      map((result: any) => {
        return result;
      })
    );
  }

  list(): Observable<Certificate[]> {
    return this.httpClient
    .get(`${this.url}/${this.endpoint}`, this.httpOptions)
    .pipe(map((data: any) => {
        return this.serializer.fromJsonList(data, 'processedObjects');
    })
    );
  }
}

