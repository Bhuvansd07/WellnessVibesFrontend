import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  loginForm: FormGroup | undefined;
  constructor(private fb: FormBuilder){ }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      Username: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      Password: ['', [Validators.required, Validators.minLength(8),
      // this.patternValidator(/\d/, { hasNumber: true }),
      // this.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
      // this.patternValidator(/[a-z]/, { hasSmallCase: true }),
      // this.patternValidator(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/, { hasSpecialCharacters: true })
      ]],
    })
    throw new Error('Method not implemented.');
  }

  get Username(){
    return this.loginForm?.get('Username');
  }
  
  get Password(){
    return this.loginForm?.get('Password');
  }
}
