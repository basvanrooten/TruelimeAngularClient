import { Component, OnInit } from '@angular/core';
import { Assessment } from '../../models/assessment.model';
import { UserAssessmentService } from '../../services/user-assessment.service';
import { AuthService } from '../../services/auth.service';
import { AssessmentService } from '../../services/assessment.service';
import { QuizQuestionService } from '../../services/quizquestion.service';
import { QuizAnswerService } from '../../services/quizanswer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {QuizAnswer} from '../../models/quizanswer.model';
import {QuizQuestion} from '../../models/quizquestion.model';
import {forEach} from '@angular/router/src/utils/collection';

// @ts-ignore
@Component({
  selector: 'app-assessment-quiz',
  templateUrl: './assessment-quiz.component.html',
  styleUrls: ['./assessment-quiz.component.css']
})
export class AssessmentQuizComponent implements OnInit {
  id: Number;
  sub: any;
  public score = 0;
  public assessment: Assessment;
  public filledInQuestions: any = [];

  constructor(private route: ActivatedRoute,
              private assessmentService: AssessmentService,
              private userAssessmentService: UserAssessmentService,
              private quizQuestionService: QuizQuestionService,
              private quizAnswerService: QuizAnswerService,
              private authService: AuthService,
              private router: Router) { }

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
  // Give an answer to a question and save it to array
  fillInQuestion(question: QuizQuestion, answer: QuizAnswer) {
    if(this.filledInQuestions.find(q => q.QuizQuestion == question.id)) {
      // this.filledInQuestions.put({
      //   "QuizQuestion": question.id,
      //   "QuizAnswer": answer.id
      // });
      return;
    } else {
      if(answer.isCorrect){
        this.filledInQuestions.push({
          "QuizQuestion": question.id
        });
        this.score = this.score + 1;
      } else {
        this.filledInQuestions.push({
          "QuizQuestion": question.id
        });
      }
    }
    console.log(this.filledInQuestions);
  }

  // POST given answers to Node backend
  postScoreToUser(assessment: Assessment, filledInQuestions: any) {
    let totalPoints = assessment.questions.length;
    let percentage = (this.score / assessment.questions.length) * 100;
    let body = {
      "Score": percentage,
      "assessmentId": assessment.id
    };
    console.log('Correct answers: ' + this.score);
    console.log('Percentage: ' + percentage + '%');
    this.userAssessmentService.createWithParameter(this.authService.getUserDetails()._id + '/assessmentscores', body)
      .subscribe(() => {
      this.router.navigateByUrl('/profile');
    }, (err) => {
      console.error(err);
    });

  }
}
