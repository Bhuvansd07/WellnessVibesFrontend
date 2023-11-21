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
import { authGuard } from 'src/shared/services/auth.guard';

const routes: Routes = [
  {
    path: "homepage",
    component: HomepageComponent,
    canActivate : [authGuard]
  },
  {
    path: "options",
    component: OptionComponent,
    canActivate : [authGuard]
  },
  {
    path: "assessment",
    component: AssessmentComponent,
    canActivate : [authGuard]
  },
  {
    path: "activities",
    component: ActivitiesComponent,
    canActivate : [authGuard]
  },
  {
    path: "feedback",
    component: FeedbackComponent,
    canActivate : [authGuard]
  },
  {
    path: "review",
    component: ReviewComponent,
    canActivate : [authGuard]
  },
  {
    path: "workout",
    component: WorkoutComponent,
    canActivate : [authGuard]
  },
  {
    path:"routines/:username",
    component: RoutinesComponent,
    canActivate : [authGuard]
  },
  {
    path:"stress",
    component:StressManagementComponent,
    canActivate : [authGuard]
  },
  {
    path:"",
    component:LoginComponent
  },
  {
    path:"charts",
    component:ChartsComponent,
    canActivate : [authGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
