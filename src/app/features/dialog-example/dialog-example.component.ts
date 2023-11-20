import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IhealthAssessment } from 'src/shared/models/ihealth-assessment';
import { ServicesService } from 'src/shared/services/services.service';

@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})
export class DialogExampleComponent {


  // id?: number,
  //   username: string,
  //   height: number,
  //   weight: number,
  //   BMI: number,
  //   systolic: number,
  //   diastolic: number,
  //   chronicIllness: string,
  //   sleep_patterns: number,
  //   mental_illness: string,
  //   emotionalState: string,
  username = "johndoe@example.com";
  // username = "devesh@chubb.com";
  // username = "sparsh@chubb.com";
  healtAss: any

  dialog= [
    {
      nutrition: "Emphasizes fruits, vegetables, whole grains, and fat-free or low-fat milk and milk products",
      exercises: "Jogging, Swimming, Cycling, Strength Training, Yoga",
      mindfulActivities: "Adjust your schedule, Breathe to relax, Get enough sleep, Try yoga and meditation",
      stress: "Visualization techniques, Eat healthy foods, Establish a bedtime routine, Get regular exercise"
    },
    {
      nutrition: "Raisins, Caffeine, Brocolli, Eggs, Chicken, Fish, Lentils, Raw Meat",
      exercises: "Walking, Swimming, Yoga, Tai Chi, Pilates",
      mindfulActivities: "Meditation, Deep Breathing,  Body Scan, Mindful Walking",
      stress: "Deep breathing, Progressive muscle relaxation, Regular exercise, Avoid caffeine and alcohol before bed"
    }
  ]

  constructor(private service: ServicesService, private activatedRoute: ActivatedRoute){}
  ngOnInit(){
    this.service.fetchHealth(this.username).subscribe(
      (response)=>{
        console.log(response);
        this.healtAss = response;
      },
      (error)=>{
        console.error(error);
      }
    )



  }
  getHealthId(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.username = params.get('username')!;
      console.log(this.username)
    })
  }
}
