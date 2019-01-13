import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import { UserSkillService } from '../../services/user-skill.service';
import { AuthService } from '../../services/auth.service';
import { SkillService } from '../../services/skill.service';
import { Skill } from '../../models/skill.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{

  public editMode: Boolean = false;
  // All available Skills (ASP.NET)
  public allSkills: any;
  // All Skills attached to User (Node)
  public userSkills: any;
  public userDetails: User;
  public profileUserSkills: String[] = [];

  constructor(private userSkillService: UserSkillService,
              private skillService: SkillService,
              private authService: AuthService) { }

  ngOnInit() {
    // All available Skills (ASP.NET)
    this.skillService.list().subscribe(
      result => {
        this.allSkills = result;
      }
    );
    // All Skills attached to logged in User (Node)
    this.userSkillService.list().subscribe(
      result => {
        this.userSkills = result;
        this.fillProfileUserSkillsArray();
      }
    );

    this.authService.getUser().subscribe(
      result => {
        this.userDetails = result;
      }
    );
  }

  fillProfileUserSkillsArray() {
    this.userSkills.forEach(element => {
      this.allSkills.forEach(skill => {
        if (element.id == skill.id) {
          this.profileUserSkills.push(skill.name);
        }
      });
    });
  }

  editToggle() {
    if (this.editMode) {
      this.editMode = false;
      this.profileUserSkills = [];
      this.userSkillService.list().subscribe(
        result => {
          this.userSkills = result;
          this.fillProfileUserSkillsArray();
        }
      )
    } else if (!this.editMode) {
      this.editMode = true;
    } else {
      console.error("Invalid edit state..")
    }
  }
// POST certain Skill (from ASP.NET) and attach it to User (Node)
postSkillToUser(skill: Skill) {
  this.userSkillService.createWithParameter(this.authService.getTokenUser()._id, skill);
}

}
