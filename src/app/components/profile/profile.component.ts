import { Component, OnInit } from '@angular/core';
import {UserSkillService} from '../../services/user-skill.service';
import {AuthService} from '../../services/auth.service';
import {SkillService} from '../../services/skill.service';
import {Skill} from '../../models/skill.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public editMode: Boolean = false;
  // All available Skills (ASP.NET)
  public allSkills: any;
  // All Skills attached to User (Node)
  public userSkills: any;

  constructor(private userSkillService: UserSkillService,
              private skillService: SkillService,
              private authService: AuthService) { }

  ngOnInit() {
    // All available Skills (ASP.NET)
    this.skillService.list().subscribe(
      result => {
        console.log(result);
        this.allSkills = result;
      }
    );
    // All Skills attached to logged in User (Node)
    this.userSkillService.list().subscribe(
      result => {
        console.log(result);
        this.userSkills = result;
      }
    );
  }

  editToggle() {
    if (this.editMode) {
      this.editMode = false;
      console.log("Edit mode disabled");
    } else if (!this.editMode) {
      this.editMode = true;
      console.log("Edit mode enabled");
    } else {
      console.error("Invalid edit state..")
    }
  }
// POST certain Skill (from ASP.NET) and attach it to User (Node)
postSkillToUser(skill: Skill) {
  this.userSkillService.createWithParameter(this.authService.getUserDetails()._id, skill);
}

}
