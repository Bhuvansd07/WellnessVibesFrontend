import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  constructor(private route : Router){

  }
  goToLogin(){
    alert("User Has Been registered succesfully");
    // this.route.navigate(['/home']);
  }
}
