import { Component, OnInit } from '@angular/core';
import { SkillService } from "../../services/skill.service";
import { Skill } from '../../model/skill.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
skills;
skill;

  constructor(private skillService: SkillService) { }

  ngOnInit() {
    this.skillService.getSkills().subscribe(
      result => {
        console.log(result);
        let resultJSON = JSON.stringify(result);
        this.skills = resultJSON;
      });
  }

}
