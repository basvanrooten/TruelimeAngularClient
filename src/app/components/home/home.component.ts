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
  public levels: any;
  public certificates: any;

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

}
