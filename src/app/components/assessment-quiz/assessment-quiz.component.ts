import { Component, OnInit } from '@angular/core';
import {Assessment} from '../../models/assessment.model';
import {UserAssessmentService} from '../../services/user-assessment.service';
import {AuthService} from '../../services/auth.service';
import {AssessmentService} from '../../services/assessment.service';
import {QuizQuestionService} from '../../services/quizquestion.service';
import {QuizAnswerService} from '../../services/quizanswer.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {switchMap} from 'rxjs/operators';

// @ts-ignore
@Component({
  selector: 'app-assessment-quiz',
  templateUrl: './assessment-quiz.component.html',
  styleUrls: ['./assessment-quiz.component.css']
})
export class AssessmentQuizComponent implements OnInit {
  id: Number;
  sub: any;
  public assessment: Assessment;

  constructor(private route: ActivatedRoute,
              private assessmentService: AssessmentService,
              private userAssessmentService: UserAssessmentService,
              private quizQuestionService: QuizQuestionService,
              private quizAnswerService: QuizAnswerService,
              private authService: AuthService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

  // GET certain Assessment (from ASP.NET) and fill assessment object
    this.assessmentService.read(this.id).subscribe(
      result => {
        this.assessment = result;
          this.quizQuestionService.list().subscribe(
            result => {
              this.assessment.questions = [];
              let questionCounter = result.length;
              result.forEach((b) => {
                if(b.assessmentId == this.assessment.id){
                  this.assessment.questions.push(b);
                }
                questionCounter -= 1;
                if (questionCounter === 0){
                  this.assessment.questions.forEach((c) => {
                    this.quizAnswerService.list().subscribe(
                      result => {
                        c.answers = [];
                        result.forEach((d) => {
                          if(c.id == d.quizQuestionId){
                            c.answers.push(d);
                          }
                        })
                      }
                    )
                  })
                }
              });
            }
          );
        console.log(this.assessment);
      }
    );
  }

// POST said Assessment (from ASP.NET) and attach it to User with score (Node)
  postSkillToUser(assessment: Assessment, score: Number) {
    let body = {
      "Score": score,
      "assessmentId": assessment.id
    };
    this.userAssessmentService.createWithParameter(this.authService.getUserDetails()._id, body);
  }
}
