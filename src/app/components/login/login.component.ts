import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  //loginModel: 
  loginFields: Array<FormlyFieldConfig>
  constructor() { 
    this.loginForm = new FormGroup({});
    //this.loginModel = new Login;
    this.loginFields = [{
      key: 'username',
      type: 'input',
      templateOptions:{
        type: 'text',
        label: "Username",
        placeholder: "Username",
        required: true,
      },
      validation:{
        messages: {
          required: 'You need to provide a username'
        }
      }
    },
  ];
  }

  ngOnInit() {
  }

  // onSubmit(loginModel: LoginModel){
  // *Login Logic*
  // }
}
