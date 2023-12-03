import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { EnrollmentActions } from '../../store/enrollment.actions';
import { selectCourseOptions, selectIsLoadingDialogOptions, selectStudentOptions } from '../../store/enrollment.selectors';
import { Course } from '../../../courses/models';
import { Student } from '../../../students/models';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-enrollments-dialog',
  templateUrl: './enrollments-dialog.component.html',
  styleUrls: ['./enrollments-dialog.component.scss']
})
export class EnrollmentsDialogComponent {

  studentControl = new FormControl();
  courseControl = new FormControl();
  enrollmentForm = new FormGroup({

  });

  courseOptions$: Observable<Course[]>
  studentOptions$: Observable<Student[]>
  isLoadingDialogOptions$: Observable<boolean>

  constructor(private store: Store) {
    this.store.dispatch(EnrollmentActions.loadEnrollmentDialogOptions());

    this.courseOptions$ = this.store.select(selectCourseOptions)
    this.studentOptions$ = this.store.select(selectStudentOptions)
    this.isLoadingDialogOptions$ = this.store.select(selectIsLoadingDialogOptions)
  }
}
