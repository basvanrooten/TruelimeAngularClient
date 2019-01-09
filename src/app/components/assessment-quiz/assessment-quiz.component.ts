import { Component, OnInit } from '@angular/core';
import {Assessment} from '../../models/assessment.model';
import {UserAssessmentService} from '../../services/user-assessment.service';
import {AuthService} from '../../services/auth.service';

// @ts-ignore
@Component({
  selector: 'app-assessment-quiz',
  templateUrl: './assessment-quiz.component.html',
  styleUrls: ['./assessment-quiz.component.css']
})
export class AssessmentQuizComponent implements OnInit {

  constructor(private userAssessmentService: UserAssessmentService,
              private authService: AuthService) { }

  ngOnInit() {
  }

// POST certain Assessment (from ASP.NET) and attach it to User (Node)
  postSkillToUser(assessment: Assessment, score: Number) {
    let body = {
      "Score": score,
      "assessmentId": assessment.id
    };
    this.userAssessmentService.createWithParameter(this.authService.getUserDetails()._id, body);
  }
}
