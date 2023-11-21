import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginFormGroup!: FormGroup;
  registerFormGroup!: FormGroup;
  showPassWord: boolean = false;
  constructor(
    private loginFb: FormBuilder,
    private registerFb: FormBuilder,
    private route: Router,
    private authService : AuthService
  ) {}
  ngOnInit(): void {
    sessionStorage.clear();
    this.loginFormGroup = this.loginFb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
        ],
      ],
      password: ['', [Validators.required]],
    });
 
    this.registerFormGroup = this.registerFb.group({
      name: ['', [Validators.required]],
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(30),
        ],
      ],
      password: [
        '',
        [Validators.required],
      ],
    });
  }
  goToLogin(){
    if(this.loginFormGroup.valid){
      this.authService.loginUser(this.loginFormGroup.value).subscribe((data : any)=>{
        console.log(data)
        sessionStorage.setItem("token", data.token);
        this.route.navigate(['homepage']);
      },
      (err)=>{
        alert("Login Unsucessful")
      })
    }
  }

  goToRegister(){
      if(this.registerFormGroup.valid){
        this.authService.registerUser(this.registerFormGroup.value).subscribe((data : any)=>{
          console.log(data);
            sessionStorage.setItem("token", data.headers[0].value[0]);
            this.registerFormGroup.reset();
            alert("User Registered");
        },
        (err)=>{
          console.log(err);
          alert("Register Unsucessful")
        })
      }
  }
}
