import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Enrollment } from '../../models';
import { selectEnrollments, selectEnrollmentsIsLoading } from '../../store/enrollment.selectors';

@Component({
  selector: 'app-enrollments-table',
  templateUrl: './enrollments-table.component.html',
  styleUrls: ['./enrollments-table.component.scss']
})
export class EnrollmentsTableComponent  {

  isLoading$: Observable<boolean>;

  enrollments$: Observable<Enrollment[]>;

  displayedColumns: string[] = ['id', 'curso', 'estudiante', 'actions'];

  constructor(private store: Store) {
    this.enrollments$ = this.store.select(selectEnrollments);
    this.isLoading$ = this.store.select(selectEnrollmentsIsLoading)
  }
}
