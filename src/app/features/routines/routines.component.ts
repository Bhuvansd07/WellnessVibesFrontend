import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Iworkout } from 'src/shared/models/iworkout';
import { ServicesService } from 'src/shared/services/services.service';

@Component({
  selector: 'app-routines',
  templateUrl: './routines.component.html',
  styleUrls: ['./routines.component.scss']
})
export class RoutinesComponent implements OnInit {

  values: Iworkout[] = []

  beginGain = [
    {
      exerciseType: "Warm-up",
      duration: 10,
      intensity: "Light"
    },
    {
      exerciseType: "Push-Ups",
      duration: 10,
      intensity: "Light"
    },
    {
      exerciseType: "Bench-Dips",
      duration: 10,
      intensity: "Moderate"
    },
    {
      exerciseType: "Rows",
      duration: 10,
      intensity: "Moderate"
    },
    {
      exerciseType: "Cool-Down",
      duration: 10,
      intensity: "Light"
    }
  ]
  moderateGain = [
    {
      exerciseType: "Warm-up",
      duration: 10,
      intensity: "Moderate"
    },
    {
      exerciseType: "Push-Ups",
      duration: 12,
      intensity: "Moderate"
    },
    {
      exerciseType: "Bench-Dips",
      duration: 8,
      intensity: "Moderate"
    },
    {
      exerciseType: "Rows",
      duration: 15,
      intensity: "Heavy"
    },
    {
      exerciseType: "Cool-Down",
      duration: 5,
      intensity: "Light"
    }
  ]
  advancedGain = [
    {
      exerciseType: "Warm-up",
      duration: 10,
      intensity: "Heavy"
    },
    {
      exerciseType: "Push-Ups",
      duration: 15,
      intensity: "Heavy"
    },
    {
      exerciseType: "Bench-Dips",
      duration: 15,
      intensity: "Heavy"
    },
    {
      exerciseType: "Rows",
      duration: 15,
      intensity: "Heavy"
    },
    {
      exerciseType: "Cool-Down",
      duration: 10,
      intensity: "Light"
    }
  ]
  beginLoss = [
    {
      exerciseType: "Warm-up",
      duration: 10,
      intensity: "Light"
    },
    {
      exerciseType: "Jumping Rope",
      duration: 10,
      intensity: "Light"
    },
    {
      exerciseType: "Lunges",
      duration: 10,
      intensity: "Light"
    },
    {
      exerciseType: "Squats",
      duration: 10,
      intensity: "Light"
    },
    {
      exerciseType: "Push & Pull-Ups",
      duration: 10,
      intensity: "Light"
    },
  ]
  moderateLoss = [
    {
      exerciseType: "Warm-up",
      duration: 10,
      intensity: "Moderate"
    },
    {
      exerciseType: "Jumping Rope",
      duration: 15,
      intensity: "Moderate"
    },
    {
      exerciseType: "Lunges",
      duration: 5,
      intensity: "Moderate"
    },
    {
      exerciseType: "Squats",
      duration: 10,
      intensity: "Moderate"
    },
    {
      exerciseType: "Push-Ups and Pull-Ups",
      duration: 10,
      intensity: "Light"
    },
  ]
  advancedLoss = [
    {
      exerciseType: "Warm-up",
      duration: 10,
      intensity: "Heavy"
    },
    {
      exerciseType: "Jumping Rope",
      duration: 15,
      intensity: "Heavy"
    },
    {
      exerciseType: "Lunges",
      duration: 15,
      intensity: "Heavy"
    },
    {
      exerciseType: "Squats",
      duration: 15,
      intensity: "Heavy"
    },
    {
      exerciseType: "Push-Ups and Pull-Ups",
      duration: 10,
      intensity: "Medrate"
    },
  ]

  username: string = "";
  rout: Iworkout = {
    username: '',
    fitnessLevel: '',
    goal: '',
    tDuration: 0,
    exercises: []
  }
  constructor(private service: ServicesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getRoutineId();

    this.service.fetchRoutine(this.username).subscribe((data) => {
      this.rout = data;
      if(this.rout.fitnessLevel == "Beginner" && this.rout.goal == "Weight loss"){
        this.rout.exercises = this.beginLoss;
      }
      else if(this.rout.fitnessLevel == "Beginner" && this.rout.goal == "Weight gain"){
        this.rout.exercises = this.beginGain
      }
      else if(this.rout.fitnessLevel == "Moderate" && this.rout.goal == "Weight loss"){
        this.rout.exercises = this.moderateLoss
      }
      else if(this.rout.fitnessLevel == "Moderate" && this.rout.goal == "Weight gain"){
        this.rout.exercises = this.moderateGain
      }
      else if(this.rout.fitnessLevel == "Advanced" && this.rout.goal == "Weight loss"){
        this.rout.exercises = this.moderateLoss
      }
      else if(this.rout.fitnessLevel == "Advanced" && this.rout.goal == "Weight gain"){
        this.rout.exercises = this.moderateGain
      }
      console.log(data);
    })
    // this.service.updateRoutine(this.username,this.rout);
  }

  
  getRoutineId(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.username = params.get('username')!;
      console.log(this.username)
    })
  }

}
