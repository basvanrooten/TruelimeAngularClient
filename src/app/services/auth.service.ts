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

  private setCookie(token: String) {
    this.cookieExpireDate = new Date();
    this.cookieExpireDate.setDate(this.cookieExpireDate.getDate() + 7);

    this.cookieService.set('token', token.toString(), this.cookieExpireDate);
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
    return this.httpClient.post<User>(`${environment.urlExpessTest}/register`, user).pipe(
      map((userRes: any) => {
        if (userRes.token) {
          this.setCookie(userRes.token);
        }
        return userRes;
      })
    );
  }

  public getUserDetails(): User {
    const token = this.getCookie();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }
}
