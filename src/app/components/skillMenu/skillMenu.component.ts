import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { SkillService } from '../../services/skill.service';
import { UserSkillService } from '../../services/user-skill.service';
import { forkJoin } from 'rxjs';
import { Skill } from 'src/app/models/skill.model';

@Component({
  selector: 'app-skillMenu',
  templateUrl: './skillMenu.component.html',
  styleUrls: ['./skillMenu.component.css']
})
export class SkillMenuComponent implements OnInit {
  userSkillList: any;
  skillCollection: any;
  skillInput: any;

  constructor(private skillService: SkillService, private userSkillService: UserSkillService) { }

  ngOnInit() {
    this.skillCollection = [];
    this.skillInput = [];
    this.userSkillList = [];
    forkJoin(this.skillService.list(), this.userSkillService.list())
    .subscribe(results => {
        this.skillInput = results[0];
        this.userSkillList = this.getFullSkills(this.skillInput, results[1]);
        this.skillCollection = this.filterList(this.skillInput, this.userSkillList);
    });
  }

  private getFullSkills(skillList, userSkillList) {
    let skills : Skill[] = [];
    skillList.forEach(element => {
      userSkillList.forEach(skill => {
            if (element.id == skill.id) {
                skills.push(element);
            }
        });
    });
    return skills;
  };

  onSave(){
    let skillList = [];

    this.userSkillList.forEach(element => {
        skillList.push(element.id);
    });

      this.userSkillService.updateList({skillList}).subscribe();
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
    this.onSave();
  }

  filterList(listToFilter, userSkillList) {
    return listToFilter.filter(skill => !userSkillList.reduce((acc, userSkill) => skill.id === userSkill.id || acc, false));
  }
}
