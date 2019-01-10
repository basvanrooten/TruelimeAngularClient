import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from '../app/components/home/home.component';
import { SkillMenuComponent } from './components/skillMenu/skillMenu.component';
import { AssessmentQuizComponent } from './components/assessment-quiz/assessment-quiz.component';
import { AssessmentListComponent } from './components/assessment-list/assessment-list.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AssessmentFinishComponent } from './components/assessment-finish/assessment-finish.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'skillmenu', component: SkillMenuComponent, canActivate: [AuthGuardService] },
  { path: 'assessment/:id', component: AssessmentQuizComponent, canActivate: [AuthGuardService] },
  { path: 'assessment/:id/finish', component: AssessmentFinishComponent, canActivate: [AuthGuardService]},
  { path: 'assessments', component: AssessmentListComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
