import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../services/skill.service';
import { LevelService } from "../../services/level.service";
import { CertificateService } from "../../services/certificate.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public skills: any;
  public levelsFromSkill: any;
  public levels: any;
  public certificates: any;

  public skill: any;
  public level: any;
  public certificate: any;

  constructor(private skillService: SkillService,
              private levelService: LevelService,
              private certificateService: CertificateService) { }

  ngOnInit() {
    this.skillService.list().subscribe(
      result => {
        console.log(result);
        this.skills = result;
        }
    );
    this.levelService.list().subscribe(
      result => {
        console.log(result);
        this.levels = result;
      }
    );
    this.certificateService.list().subscribe(
      result => {
        console.log(result);
        this.certificates = result;
      }
    );
  }

  onSelectedSkill(skill){
    console.log(skill);
    this.skill = skill;

    this.levelService.listSpecific('Skill/' + this.skill.id).subscribe(
      result => {
        console.log(result);
        this.levelsFromSkill = result;
      }
    );

  }

  onSelectedLevel(level){
    console.log(level);
    this.level = level;
  }

  onSelectedCertificate(certificate){
    console.log(certificate);
    this.certificate = certificate;
  }
}
