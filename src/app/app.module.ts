import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/base/header/header.component';
import { HomeComponent } from '../app/components/home/home.component';
import { FormlyModule} from '@ngx-formly/core'
import { FormlyMaterialModule} from '@ngx-formly/material'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ProfileComponent } from './components/profile/profile.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

import { SkillService } from '../app/services/skill.service';

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

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    FormlyModule.forRoot(),
    FormlyMaterialModule,
    RouterModule.forRoot(appRoutes),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),

    // Flex-layout
    FlexLayoutModule
  ],
  exports: [RouterModule, BsDropdownModule, TooltipModule, ModalModule],
  providers: [SkillService],
  bootstrap: [AppComponent]
})
export class AppModule { }
