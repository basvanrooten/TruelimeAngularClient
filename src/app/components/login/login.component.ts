import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loginModel: User;
  loginFields: Array<FormlyFieldConfig>;
  constructor() {
    this.loginForm = new FormGroup({});
    this.loginModel = new User();
    this.loginFields = this.loginModel.formFields();
  }

  ngOnInit() {
  }

  onSubmit(account: Account) {
    console.log(account);
  }
}
