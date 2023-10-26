import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-courses-dialog',
  templateUrl: './courses-dialog.component.html',
  styleUrls: ['./courses-dialog.component.scss']
})
export class CoursesDialogComponent {
  coursesForm : FormGroup;

  constructor(private fb : FormBuilder, 
              private matDialogRef: MatDialogRef <CoursesDialogComponent>
              ){
    this.coursesForm = this.fb.group({
      name: ['', Validators.required],
      duration: ['', Validators.required],
    });
  }

  onSubmit() : void {
    if (this.coursesForm.invalid) {
      this.coursesForm.markAllAsTouched(); 
    } else {
      this.matDialogRef.close(this.coursesForm.value);
    }
  }
}
