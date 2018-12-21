import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../services/skill.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public skills: any;

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.skillService.list().subscribe(
      result => {
        console.log(result);
        this.skills = result;
      }
    );
  }

}
