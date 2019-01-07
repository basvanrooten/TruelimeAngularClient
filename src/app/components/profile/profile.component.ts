import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../services/skill.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public editMode: boolean = false;
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

}
