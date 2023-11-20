import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { OptionComponent } from './option/option.component';
import { AssessmentComponent } from './features/assessment/assessment.component';
import { ActivitiesComponent } from './features/activities/activities.component';
import { FeedbackComponent } from './features/feedback/feedback.component';
import { ReviewComponent } from './features/review/review.component';
import { WorkoutComponent } from './features/workout/workout.component';
import { RoutinesComponent } from './features/routines/routines.component';
import { StressManagementComponent } from './features/stress-management/stress-management.component';
import { LoginComponent } from './features/login/login.component';
import { ChartsComponent } from './features/charts/charts.component';

const routes: Routes = [
  {
    path: "",
    component: HomepageComponent
  },
  {
    path: "homepage",
    component: HomepageComponent
  },
  {
    path: "options",
    component: OptionComponent
  },
  {
    path: "assessment",
    component: AssessmentComponent
  },
  {
    path: "activities",
    component: ActivitiesComponent
  },
  {
    path: "feedback",
    component: FeedbackComponent
  },
  {
    path: "review",
    component: ReviewComponent
  },
  {
    path: "workout",
    component: WorkoutComponent
  },
  {
    path:"routines/:username",
    component: RoutinesComponent
  },
  {
    path:"stress",
    component:StressManagementComponent
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"charts",
    component:ChartsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
