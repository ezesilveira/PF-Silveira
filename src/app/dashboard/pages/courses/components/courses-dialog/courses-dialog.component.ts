import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Course } from '../../models';
import { CoursesService } from '../../courses.service';

@Component({
  selector: 'app-courses-dialog',
  templateUrl: './courses-dialog.component.html',
  styleUrls: ['./courses-dialog.component.scss']
})
export class CoursesDialogComponent {

  nameControl = new FormControl();
  durationControl = new FormControl();

  coursesForm = new FormGroup({
    name: this.nameControl,
    duration: this.durationControl,
  });

  constructor(private fb : FormBuilder,
              private coursesService : CoursesService,
              private matDialogRef: MatDialogRef <CoursesDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public courseId?: number
              ){
    this.coursesForm = this.fb.group({
      name: ['', Validators.required],
      duration: ['', Validators.required],
    });

    if(courseId) {
      this.coursesService.getCourseById$(courseId).subscribe({
        next: (c) => {
          if (c) {
            this.coursesForm.patchValue(c);
          }
        }
      });
    }
  }

  public get isEditing(): boolean {
    return !!this.courseId;
  }

  onSubmit() : void {
    if (this.coursesForm.invalid) {
      this.coursesForm.markAllAsTouched(); 
    } else {
      this.matDialogRef.close(this.coursesForm.value);
    }
  }
}
