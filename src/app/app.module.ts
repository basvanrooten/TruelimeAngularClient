import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/base/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FormlyModule} from '@ngx-formly/core'
import { FormlyMaterialModule} from '@ngx-formly/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CookieService } from 'ngx-cookie-service';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { SkillService } from './services/skill.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';


import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { AppRoutingModule } from './app-routing.module';
import { SkillMenuComponent } from './components/skillMenu/skillMenu.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AssessmentQuizComponent } from './components/assessment-quiz/assessment-quiz.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    SkillMenuComponent,
    AssessmentQuizComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),

    // Flex-layout
    FlexLayoutModule,

    AppRoutingModule
  ],
  exports: [BsDropdownModule, TooltipModule, ModalModule],
  providers: [CookieService, SkillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
