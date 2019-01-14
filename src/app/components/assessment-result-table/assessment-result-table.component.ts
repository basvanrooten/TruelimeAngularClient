import { Component, OnInit } from '@angular/core';
import {UserAssessmentScoreService} from '../../services/user-assessment-score.service';
import {AssessmentService} from '../../services/assessment.service';
import {AuthService} from '../../services/auth.service';
import {User} from '../../models/user.model';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-assessment-result-table',
  templateUrl: './assessment-result-table.component.html',
  styleUrls: ['./assessment-result-table.component.css']
})
export class AssessmentResultTableComponent implements OnInit {
// All available Assessments (ASP.NET)
  public allAssessments: any;
  // All AssessmentId's with score attached to User (Node)
  public userAssessments: any;
  public profileUserAssessments: String[] = [];
  // User Details
  public userDetails: User;

  constructor(private userAssessmentService: UserAssessmentScoreService,
              private userAssessmentScoreService: UserAssessmentScoreService,
              private assessmentService: AssessmentService,
              private authService: AuthService) { }

  ngOnInit() {
    forkJoin(
      this.authService.getUser(),
      this.assessmentService.list()
    )
      .subscribe(results => {

        this.userDetails = results[0];
        this.allAssessments = results[1];

        // All AssessmentId's with scores attached to logged in User (Node)
        this.userAssessmentScoreService.listSpecific(this.authService.getTokenUser()._id + '/assessmentscores').subscribe(
          result => {
            this.userAssessments = result;
            this.fillProfileUserAssessmentsArray();
          }
        );
      });
  }

  // Fill User Assessment Array
  fillProfileUserAssessmentsArray() {
    this.userAssessments.forEach(element => {
      this.allAssessments.forEach(assessment => {
        if(element.assessmentId == assessment.id) {
          this.profileUserAssessments.push(assessment.name + ',' + element.score);
        }
      });
    });
    console.log(this.profileUserAssessments);
    this.profileUserAssessments.reverse();
  }
}
