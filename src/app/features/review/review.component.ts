import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from 'src/shared/services/services.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent {

  feedbackForm!: FormGroup;

  constructor(private fb: FormBuilder, private service: ServicesService){}

  ngOnInit(){
    this.InitializeForm();
  }
  
  InitializeForm(): void{
    this.feedbackForm = this.fb.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      createdAt: ['', Validators.required],
      rating: ['', Validators.required],
      feedMessage: ['', Validators.required],
      suggMessage: ['',Validators.required],
      reportMessage: ['',Validators.required],
    })
  }

  get name(){
    return this.feedbackForm?.get('name');
  }

  get usernname(){
    return this.feedbackForm?.get('username');
  }

  get date(){
    return this.feedbackForm.get('createdAt');
  }

  get rating(){
    return this.feedbackForm?.get('rating');
  }

  get feedback(){
    return this.feedbackForm?.get('feedMessage');
  }

  get suggestions(){
    return this.feedbackForm?.get('suggMessage')
  }

  get report(){
    return this.feedbackForm?.get('reportMessage')
  }

  addFeedback(){
    if(this.feedbackForm.valid){
      // console.log(this.feedbackForm.value)
      this.service.addFeedback(this.feedbackForm.value);
    }
  }
}
