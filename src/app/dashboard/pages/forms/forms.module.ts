import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsComponent } from './forms.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormsComponent
  ],
  imports: [
    CommonModule, MatInputModule, MatFormFieldModule, ReactiveFormsModule
  ],
  exports: [
    FormsComponent
  ]
})
export class FormsModule { }
