import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  // Output for Parent (AppComponent) data transferring
  @Output() featureSelected = new EventEmitter<string>();

  public appName = 'TrueLime';
  public userDetails: User;

  constructor(public authService: AuthService) { }

  ngOnInit() {

  }

}
