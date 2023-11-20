import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ServicesService } from 'src/shared/services/services.service';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.component.html',
  styleUrls: ['./workout.component.scss']
})
export class WorkoutComponent implements OnInit {

  routineForm!: FormGroup;
  constructor(private fb: FormBuilder, private service: ServicesService, private router: Router) {}

  ngOnInit(){
    this.InitializeForm();
  }

  InitializeForm(): void{
    this.routineForm = this.fb.group({
      username: ['', Validators.required],
      fitnessLevel: ['', Validators.required],
      goal: ['', Validators.required],
      tDuration: ['',Validators.required],
    })
  }

  get username(){
    return this.routineForm?.get('username');
  }

  get fitnessLevel(){
    return this.routineForm?.get('fitnessLevel');
  }

  get goal(){
    return this.routineForm?.get('goal');
  }

  get tDuration(){
    return this.routineForm?.get('tDuration')
  }

  addWorkout(){
      this.service.addRoutine(this.routineForm.value);
      this.router.navigate(['routines', this.routineForm.getRawValue().username])
  }
}
