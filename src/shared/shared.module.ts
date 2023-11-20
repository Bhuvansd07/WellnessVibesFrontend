import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from 'src/app/material/material.module';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    // NavbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class SharedModule { }
