import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ServicesService } from 'src/shared/services/services.service';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrls: ['./option.component.scss']
})
export class OptionComponent {
  constructor(private service: ServicesService, private router: Router){}
}
