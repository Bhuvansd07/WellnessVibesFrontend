import { Component } from '@angular/core';

export interface PeriodicElement {
  username: string;
  date: string,
  CalorieIntake: number;
  WaterIntake: number;
  Mood: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {username: 'johndoe@example.com', date: '20-11-2023', CalorieIntake: 45, WaterIntake: 1.0079, Mood: 'Happy'},
  {username: 'johndoe@example.com', date: '21-11-2023', CalorieIntake: 55, WaterIntake: 1.184, Mood: 'Sad'},
];
@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent {
  displayedColumns: string[] = ['username','date', 'CalorieIntake', 'WaterIntake', 'Mood'];
  dataSource = ELEMENT_DATA;
}
