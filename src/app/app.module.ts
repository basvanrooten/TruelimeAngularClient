import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/base/header/header.component';
import { HomeComponent } from '../app/components/home/home.component';
import { FormlyModule} from '@ngx-formly/core';
import { FormlyMaterialModule} from '@ngx-formly/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CookieService } from 'ngx-cookie-service';

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
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent
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

    // Material components
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

    // Flex-layout
    FlexLayoutModule
  ],
  exports: [RouterModule],
  providers: [CookieService, SkillService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
