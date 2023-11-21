import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewInit {
  constructor(private route : Router){}
  ngAfterViewInit(): void {
    const item = document.getElementById("log") as HTMLElement;
    if(sessionStorage.getItem("token")!=null){
      item.innerHTML = "LogOut";
    }
    else{
      item.innerHTML = "LogIn";
    }
  }
  ngOnInit(): void {
    const item = document.getElementById("log") as HTMLElement;
    if(sessionStorage.getItem("token")!=null){
      item.innerHTML = "LogOut";
    }
    else{
      item.innerHTML = "LogIn";
    }
  }

  logout(){
    this.route.navigate(['']);
  }
}
