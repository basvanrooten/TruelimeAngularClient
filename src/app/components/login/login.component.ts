import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { User } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginModel: User;
  loginFields: Array<FormlyFieldConfig>;
  constructor(private authService: AuthService, private router: Router) {
    this.loginForm = new FormGroup({});
    this.loginModel = new User();
    this.loginFields = this.loginModel.login();
  }

  ngOnInit() {
  }

  onSubmit(userLog: User) {
    const user = new User();
    user.email = userLog.email;
    user.password = userLog.password;

    this.authService.loginUser(user)
    .subscribe(() => {
      this.router.navigateByUrl('/home');
    }, (err) => {
      console.error(err);
    });
  }
}
