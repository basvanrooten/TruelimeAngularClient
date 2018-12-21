import { Component, OnInit } from '@angular/core';
import {FormGroup} from "@angular/forms";
import {Register} from "../../models/register.model";
import {FormlyFieldConfig} from "@ngx-formly/core";
import {AuthService} from "../../services/auth.service";
import {User} from "../../models/user.model";
import {Skill} from "../../models/skill.model";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registerModel: Register;
  registerFields: Array<FormlyFieldConfig>;
  constructor(private authService: AuthService) {
    this.registerForm = new FormGroup({});
    this.registerModel = new Register();
    this.registerFields = this.registerModel.formFields();
  }

  ngOnInit() {
  }

  onSubmit(register: Register){
    const user = new User();
    user.email = register.email;
    user.firstname = register.firstname;
    user.lastname = register.lastname;
    user.password = register.password;
    this.authService.registerUser(user);
  }
}
