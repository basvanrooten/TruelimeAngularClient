import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  registerModel: User;
  registerFields: Array<FormlyFieldConfig>;
  constructor(private authService: AuthService, private router: Router) {
    this.registerForm = new FormGroup({});
    this.registerModel = new User();
    this.registerFields = this.registerModel.formFields();
  }

  ngOnInit() {
   console.log(this.authService.isLoggedIn());
  }

  onSubmit(userReg: User) {
    const user = new User();
    user.setEmail = userReg.getEmail;
    user.setFirstName = userReg.getFirstName;
    user.setLastName = userReg.getLastName;
    user.setPassword = userReg.getPassword;

    this.authService.registerUser(user)
    .subscribe(() => {
      this.router.navigateByUrl('/login');
    }, (err) => {
      console.error(err);
    });
  }
}
