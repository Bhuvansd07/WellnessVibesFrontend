import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from 'src/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/shared/components/navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OptionComponent } from './option/option.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AssessmentComponent } from './features/assessment/assessment.component';
import { ActivitiesComponent } from './features/activities/activities.component';
import { FeedbackComponent } from './features/feedback/feedback.component';
import { ReviewComponent } from './features/review/review.component';
import { WorkoutComponent } from './features/workout/workout.component';
import { RoutinesComponent } from './features/routines/routines.component';
import { DialogExampleComponent } from './features/dialog-example/dialog-example.component';
import { StressManagementComponent } from './features/stress-management/stress-management.component';
import { LoginComponent } from './features/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    OptionComponent,
    AssessmentComponent,
    ActivitiesComponent,
    FeedbackComponent,
    ReviewComponent,
    WorkoutComponent,
    RoutinesComponent,
    DialogExampleComponent,
    StressManagementComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
