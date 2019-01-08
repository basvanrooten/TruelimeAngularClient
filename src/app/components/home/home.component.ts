import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../services/skill.service';
import { LevelService } from "../../services/level.service";
import { CertificateService } from "../../services/certificate.service";
import {AssessmentService} from '../../services/assessment.service';
import {QuizQuestionService} from '../../services/quizquestion.service';
import {QuizAnswerService} from '../../services/quizanswer.service';
import {forEach} from '@angular/router/src/utils/collection';
import {Assessment} from '../../models/assessment.model';
import {QuizQuestion} from '../../models/quizquestion.model';

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
  public assessments: Assessment[];

  public skill: any;
  public level: any;
  public certificate: any;
  public assessment: any;

  constructor(private skillService: SkillService,
              private levelService: LevelService,
              private certificateService: CertificateService,
              private assessmentService: AssessmentService,
              private quizQuestionService: QuizQuestionService,
              private quizAnswerService: QuizAnswerService) { }

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
    this.assessmentService.list().subscribe(
      result => {
        this.assessments = result;
        this.assessments.forEach((a) => {
          this.quizQuestionService.list().subscribe(
            result => {
              let questionCounter = result.length;
              result.forEach((b) => {
                if(b.assessmentId == a.id){
                  a.questions = [];
                  a.questions.push(b);
                }
                questionCounter -= 1;
                if (questionCounter === 0){
                  a.questions.forEach((c) => {
                    this.quizAnswerService.list().subscribe(
                      result => {
                        result.forEach((d) => {
                          if(c.id == d.quizQuestionId){
                            c.answers = [];
                            c.answers.push(d);
                          }
                        })
                      }
                    )
                  })
                }
              });
            }
          )
        });
        console.log(this.assessments);
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
