import {Component, DoCheck, OnChanges, OnInit, Pipe} from '@angular/core';
import { UserSkillService } from '../../services/user-skill.service';
import { AuthService } from '../../services/auth.service';
import { SkillService } from '../../services/skill.service';
import { User } from 'src/app/models/user.model';
import {AssessmentService} from '../../services/assessment.service';
import {UserCertificateService} from '../../services/user-certificate.service';
import {CertificateService} from '../../services/certificate.service';
import {UserAssessmentScoreService} from '../../services/user-assessment-score.service';
import {forkJoin} from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit{
  public editMode: Boolean = false;

  // All available Skills (ASP.NET)
  public allSkills: any;
  // All Skills attached to User (Node)
  public userSkills: any;
  public profileUserSkills: String[] = [];

  // All available Assessments (ASP.NET)
  public allAssessments: any;
  // All AssessmentId's with score attached to User (Node)
  public userAssessments: any;
  public profileUserAssessments: String[] = [];

  // All available Certificates (ASP.NET)
  public allCertificates: any;
  // All CertificateId's with score attached to User (Node)
  public userCertificates: any;
  public profileUserCertificates: String[] = [];

  // User Details
  public userDetails: User;

  constructor(private userSkillService: UserSkillService,
              private skillService: SkillService,
              private userAssessmentService: UserAssessmentScoreService,
              private userAssessmentScoreService: UserAssessmentScoreService,
              private assessmentService: AssessmentService,
              private userCertificateService: UserCertificateService,
              private certificateService:  CertificateService,
              private authService: AuthService) { }

  ngOnInit() {
    forkJoin(
      this.authService.getUser(),
      this.skillService.list(),
      this.assessmentService.list(),
      this.certificateService.list()
      )
      .subscribe(results => {

        this.userDetails = results[0];
        this.allSkills = results[1];
        this.allAssessments = results[2];
        this.allCertificates = results[3];


        // All Skills attached to logged in User (Node)
        this.userSkillService.list().subscribe(
          result => {
            this.userSkills = result;
            this.fillProfileUserSkillsArray();
          }
        );
        // All AssessmentId's with scores attached to logged in User (Node)
        this.userAssessmentScoreService.listSpecific(this.authService.getTokenUser()._id + '/assessmentscores').subscribe(
          result => {
            this.userAssessments = result;
            this.fillProfileUserAssessmentsArray();
          }
        );

        // All CertificateId's attached to logged in User (Node)
        this.userCertificateService.list().subscribe(
          result => {
            this.userCertificates = result;
            this.fillProfileUserCertificatesArray();
          }
        );
      });
  }

  // Fill User Skills Array
  fillProfileUserSkillsArray() {
    this.userSkills.forEach(element => {
      this.allSkills.forEach(skill => {
        if (element.id == skill.id) {
          this.profileUserSkills.push(skill.name);
        }
      });
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

  // Fill User Certificate Array
  fillProfileUserCertificatesArray() {
    this.userCertificates.forEach(element => {
      this.allCertificates.forEach(certificate => {
        if(element.id == certificate.id) {
          this.profileUserCertificates.push(certificate.name);
        }
      });
    });
  }

  editToggle() {
    if (this.editMode) {
      this.editMode = false;
      this.profileUserSkills = [];
      this.profileUserCertificates = [];
      this.userSkillService.list().subscribe(
        result => {
          this.userSkills = result;
          this.fillProfileUserSkillsArray();
        }
      );
      this.userCertificateService.list().subscribe(
        result => {
          this.userCertificates = result;
          this.fillProfileUserCertificatesArray();
        }
      )
    } else if (!this.editMode) {
      this.editMode = true;
    } else {
      console.error("Invalid edit state..")
    }
  }
}


