import { Component, OnInit } from '@angular/core';
import { Assessment } from '../../models/assessment.model';
import { UserAssessmentService } from '../../services/user-assessment.service';
import { AuthService } from '../../services/auth.service';
import { AssessmentService } from '../../services/assessment.service';
import { QuizQuestionService } from '../../services/quizquestion.service';
import { QuizAnswerService } from '../../services/quizanswer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizAnswer } from '../../models/quizanswer.model';
import { QuizQuestion } from '../../models/quizquestion.model';

@Component({
  selector: 'app-assessment-quiz',
  templateUrl: './assessment-quiz.component.html',
  styleUrls: ['./assessment-quiz.component.css']
})
export class AssessmentQuizComponent implements OnInit {
  testTaken = false;
  id: Number;
  sub: any;
  public score = 0;
  public percentage = 0;
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

    let json = {
      question: question.id,
      answer: answer.id
    };

    if(!this.filledInQuestions.find(obj => obj.question === question.id)) {
      this.filledInQuestions.push(json);
    } else {
      let obj = this.filledInQuestions.find(obj => obj.question === question.id);
      if(obj.answer !== answer.id) {
        obj.answer = answer.id;
      }
    }
    console.log(this.filledInQuestions);
  }

  isCurrentAnswer(question: QuizQuestion, answer: QuizAnswer) {
      if(this.filledInQuestions.find(obj => obj.question == question.id)) {
        return this.filledInQuestions.find(obj => obj.question == question.id).answer == answer.id;
      }
      return false;
  }

  calculateScore() {
    this.filledInQuestions.forEach(element => {
        this.assessment.questions.forEach(question => {
            if(element.question == question.id) {
                question.answers.forEach(answer => {
                    if(element.answer == answer.id) {
                        if(answer.isCorrect) {
                            this.score++;
                        }
                    }
                });
            }
        });
      });

    let totalPoints = this.assessment.questions.length;
    this.percentage = (this.score / totalPoints) * 100;
  }

  // POST given answers to Node backend
  postScoreToUser(assessment: Assessment) {
    this.calculateScore();
    let body = {
      score: this.percentage,
      assessmentId: assessment.id
    };
    console.log(body);
    console.log('Correct answers: ' + this.score);
    console.log('Percentage: ' + this.percentage + '%');
    this.userAssessmentService.createWithParameter(this.authService.getUserDetails()._id + '/assessmentscores', body)
      .subscribe(() => {
        this.testTaken = true;
    }, (err) => {
      console.error(err);
    });

  }

  returnToProfile(){
    this.router.navigateByUrl('/profile');
  }
}
