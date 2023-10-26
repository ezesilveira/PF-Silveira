import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from '../../models';

@Component({
  selector: 'app-courses-dialog',
  templateUrl: './courses-dialog.component.html',
  styleUrls: ['./courses-dialog.component.scss']
})
export class CoursesDialogComponent {
  coursesForm : FormGroup;

  constructor(private fb : FormBuilder, 
              private matDialogRef: MatDialogRef <CoursesDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public course?: Course
              ){
    this.coursesForm = this.fb.group({
      name: ['', Validators.required],
      duration: ['', Validators.required],
    });

    if(this.course) {
      this.coursesForm.patchValue(this.course);
    }
  }

  onSubmit() : void {
    if (this.coursesForm.invalid) {
      this.coursesForm.markAllAsTouched(); 
    } else {
      this.matDialogRef.close(this.coursesForm.value);
    }
  }
}
