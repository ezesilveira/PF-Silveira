import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EnrollmentActions } from '../../store/enrollment.actions';
import { selectCourseOptions, selectIsLoadingDialogOptions, selectStudentOptions } from '../../store/enrollment.selectors';
import { Course } from '../../../courses/models';
import { Student } from '../../../students/models';
import { Observable, take } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { Actions, ofType } from '@ngrx/effects';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-enrollments-dialog',
  templateUrl: './enrollments-dialog.component.html',
  styleUrls: ['./enrollments-dialog.component.scss']
})
export class EnrollmentsDialogComponent {

  studentIdControl = new FormControl<number | null>(null);
  courseIdControl = new FormControl<number | null>(null);
  enrollmentForm = new FormGroup({
    "courseId": this.courseIdControl,
    "studentId": this.studentIdControl,
  });

  courseOptions$: Observable<Course[]>
  studentOptions$: Observable<Student[]>
  isLoadingDialogOptions$: Observable<boolean>

  constructor(private store: Store, 
              private action$: Actions, 
              private matDialogRef: MatDialogRef<EnrollmentsDialogComponent>) {
    this.store.dispatch(EnrollmentActions.loadEnrollmentDialogOptions());
    this.courseOptions$ = this.store.select(selectCourseOptions)
    this.studentOptions$ = this.store.select(selectStudentOptions)
    this.isLoadingDialogOptions$ = this.store.select(selectIsLoadingDialogOptions)

    this.action$.pipe(ofType(EnrollmentActions.loadEnrollments), take(1)).subscribe({
      next: () => this.matDialogRef.close(),
    });
  }

  onSubmit(): void {
    this.store.dispatch(EnrollmentActions.createEnrollment({ payload: this.enrollmentForm.getRawValue()}))
  }
}
