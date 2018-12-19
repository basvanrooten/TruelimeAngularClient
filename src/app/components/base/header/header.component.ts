import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // Output for Parent (AppComponent) data transferring
  @Output() featureSelected = new EventEmitter<string>();

  public appName = 'TrueLime';

  constructor() { }

  ngOnInit() {
  }

}
