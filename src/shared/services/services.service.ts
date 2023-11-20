import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IhealthAssessment } from '../models/ihealth-assessment';
import { Observable } from 'rxjs';
import { IFeedback } from '../models/ifeedback';
import { Iworkout } from '../models/iworkout';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  // httpOptions= {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json'
  //   })
  // };

  constructor(private http: HttpClient) { }

  fetchData(): Observable<Array<IFeedback>>{
    return this.http.get<IFeedback[]>('https://localhost:7199/api/Feedback');
  }

  addData(survey: IhealthAssessment){
    console.log(survey);
    
    return this.http.post('https://localhost:7199/api/Health',survey).subscribe();
  }

  addFeedback(feedback: IFeedback){
    console.log(feedback);
    return this.http.post('https://localhost:7199/api/Feedback',feedback).subscribe();
  }

  addRoutine(workout: Iworkout){
    console.log(workout);
    workout.exercises = [];
    return this.http.post('https://localhost:7199/api/Workout/',workout).subscribe();
  }

  fetchRoutine(username: string): Observable<Iworkout>{
    return this.http.get<Iworkout>(`https://localhost:7199/api/Workout/${username}`)
  }

  // updateRoutine(username: string, routine: Iworkout){
  //   return this.http.put(`https://localhost:7199/api/Workout/${username}`,routine).subscribe();
  // }

  fetchHealth(username: string): Observable<IhealthAssessment>{
    return this.http.get<IhealthAssessment>(`https://localhost:7199/api/Health/${username}`);
  }
}
