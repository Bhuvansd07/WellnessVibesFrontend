import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

const Materials = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatTableModule,
  MatDialogModule,
]

@NgModule({
  exports: [Materials],
  imports: [Materials]
})
export class MaterialModule { }
