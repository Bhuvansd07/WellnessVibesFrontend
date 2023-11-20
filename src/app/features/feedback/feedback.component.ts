import { Component } from '@angular/core';
import { IFeedback } from 'src/shared/models/ifeedback';
import { ServicesService } from 'src/shared/services/services.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent {

  feedbacks: IFeedback[] = [];

  isLoading = true;
  constructor(private service: ServicesService) {}

  ngOnInit(){
    this.fetchdata();
  }

  fetchdata(){
    this.service.fetchData().subscribe(
      (response)=>{
        console.log(response);
        this.feedbacks = response;
        // console.log(    this.feedbacks[1].createdAt    ,this.feedbacks[0].createdAt)
      },
      (error)=>{
        console.error(error);
      }
    )
  }
}
