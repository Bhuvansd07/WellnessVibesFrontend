import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IhealthAssessment } from 'src/shared/models/ihealth-assessment';
import { ServicesService } from 'src/shared/services/services.service';
import { DialogExampleComponent } from '../dialog-example/dialog-example.component';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {

  assessForm: FormGroup | undefined;

  constructor(private fb: FormBuilder, private service: ServicesService, public dialog: MatDialog) {

  }
  ngOnInit() {
    this.assessForm = this.fb.group({
      username: this.fb.control('', [Validators.required, Validators.maxLength(30), Validators.email]),
      height: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      weight: this.fb.control('', [Validators.required, Validators.minLength(2)]),
      BMI: this.fb.control('', [Validators.required, Validators.minLength(2)]),
      systolic: this.fb.control('', [Validators.required, Validators.minLength(2)]),
      diastolic: this.fb.control('', [Validators.required, Validators.minLength(2)]),
      chronicIllness: this.fb.control('', [Validators.required]),
      sleep_patterns: this.fb.control('', [Validators.required]),
      mental_illness: this.fb.control('', [Validators.required, Validators.minLength(2)]),
      emotionalState: this.fb.control('', [Validators.required, Validators.minLength(2)]),
    })
  }

  get username() {
    return this.assessForm?.get('username');
  }

  get height() {
    return this.assessForm?.get('height');
  }

  get weight() {
    return this.assessForm?.get('weight');
  }

  get BMI() {
    return this.assessForm?.get('BMI')
  }

  get systolic() {
    return this.assessForm?.get('systolic');
  }

  get diastolic() {
    return this.assessForm?.get('diastolic')
  }

  get chronicIllness() {
    return this.assessForm?.get('chronicIllness');
  }


  get sleepHours() {
    return this.assessForm?.get('sleep_patterns');
  }

  get mentalIll() {
    return this.assessForm?.get('mental_illness')
  }

  get emotional_state() {
    return this.assessForm?.get('emotionalState')
  }

  getErrorMessage(data: any) {
    if (data?.hasError('required')) {
      return 'Enter a valid value';
    }
    return data?.hasError(data) ? 'Not a valid {{data}}' : '';
  }

  addUser() {
    if (this.assessForm?.valid) {
      // console.log(this.ha);
      this.service.addData(this.assessForm.value);
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogExampleComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
