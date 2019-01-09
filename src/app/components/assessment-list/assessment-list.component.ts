import { Component, OnInit } from '@angular/core';
import {Assessment} from '../../models/assessment.model';
import {AssessmentService} from '../../services/assessment.service';
import { Assessment } from 'src/app/models/assessment.model';
import { QuizQuestionService } from 'src/app/services/quizquestion.service';
import { QuizAnswerService } from 'src/app/services/quizanswer.service';

@Component({
  selector: 'app-assessment-list',
  templateUrl: './assessment-list.component.html',
  styleUrls: ['./assessment-list.component.css']
})
export class AssessmentListComponent implements OnInit {
  public assessment: Assessment;
  public assessments: Assessment[];

  public assessments: Assessment[];
  
  constructor(private assessmentService: AssessmentService, 
    private quizQuestionService: QuizQuestionService,
    private quizAnswerService: QuizAnswerService) { }

  ngOnInit() {

    this.assessmentService.list().subscribe(
      result => {
        this.assessments = result;
        this.assessments.forEach((a) => {
          this.quizQuestionService.list().subscribe(
            result => {
              a.questions = [];
              let questionCounter = result.length;
              result.forEach((b) => {
                if(b.assessmentId == a.id){
                  a.questions.push(b);
                }
                questionCounter -= 1;
                if (questionCounter === 0){
                  a.questions.forEach((c) => {
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
          )
        });
        console.log(this.assessments);
      }
    );

  }

}
