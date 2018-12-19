import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../services/skill.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public skills: any;
  public levels: any;
  public certificates: any;

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
