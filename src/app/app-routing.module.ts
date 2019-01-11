import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SkillMenuComponent } from './components/skillMenu/skillMenu.component';
import { AssessmentQuizComponent } from './components/assessment-quiz/assessment-quiz.component';
import { AssessmentListComponent } from './components/assessment-list/assessment-list.component';
import { AuthGuardService } from './services/auth-guard.service';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'profile', pathMatch: 'full', canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
  { path: 'skillmenu', component: SkillMenuComponent, canActivate: [AuthGuardService] },
  { path: 'assessment/', redirectTo: 'assessments', pathMatch: 'full', canActivate: [AuthGuardService] },
  { path: 'assessment/:id', component: AssessmentQuizComponent, canActivate: [AuthGuardService] },
  { path: 'assessments', component: AssessmentListComponent, canActivate: [AuthGuardService] },
  { path: '**' ,component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
