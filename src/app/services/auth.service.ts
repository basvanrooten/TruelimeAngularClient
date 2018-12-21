import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private cookieValue: String = 'UNKNOWN';
  private cookieExpireDate: Date;

  constructor(private httpClient: HttpClient, private cookieService: CookieService, private router: Router) { }

  private setCookie(token: string) {
    this.cookieExpireDate = new Date();
    this.cookieExpireDate.setDate(this.cookieExpireDate.getDate() + 7);

    this.cookieService.set('token', token, this.cookieExpireDate);
  }

  public getCookie() {
    if (!this.cookieService) {
      this.cookieValue = this.cookieService.get('token');
    }

    return this.cookieValue;
  }

  public deleteCookie() {
    this.cookieService.delete('token');
    this.router.navigateByUrl('/');

    return this.cookieValue = 'UNKNOWN';
  }

  public checkCookie() {
    const cookieExists: boolean = this.cookieService.check('token');

    return cookieExists;
  }

  public registerUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`${environment.urlExpress}/register`, user);
  }
}
