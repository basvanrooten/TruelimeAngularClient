import { Component, OnInit } from '@angular/core';
import {Assessment} from '../../models/assessment.model';

@Component({
  selector: 'app-assessment-list',
  templateUrl: './assessment-list.component.html',
  styleUrls: ['./assessment-list.component.css']
})
export class AssessmentListComponent implements OnInit {
  public assessment: Assessment;
  public assessments: Assessment[];

  constructor() { }

  ngOnInit() {
  }

}
