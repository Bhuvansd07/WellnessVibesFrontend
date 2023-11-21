import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILogin, IRegister } from '../models/ILogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }
  registerUser(user : IRegister){
    return this.http.post("https://localhost:7199/Auth/Register",user);
  }

  loginUser(user : ILogin){
    return this.http.post("https://localhost:7199/Auth/Login",user);
  }
}
