import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from '../app/components/home/home.component';
import { SkillMenuComponent } from './components/skillMenu/skillMenu.component';
import { AssessmentQuizComponent } from './components/assessment-quiz/assessment-quiz.component';
import { AssessmentListComponent } from './components/assessment-list/assessment-list.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'skillmenu', component: SkillMenuComponent },
  { path: 'assessment', component: AssessmentQuizComponent },
  { path: 'assessments', component: AssessmentListComponent }

];


@NgModule({
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
