import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Enrollment } from '../../models';
import { selectEnrollments, selectEnrollmentsIsLoading } from '../../store/enrollment.selectors';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';
import { UserRole } from '../../../users/models';

@Component({
  selector: 'app-enrollments-table',
  templateUrl: './enrollments-table.component.html',
  styleUrls: ['./enrollments-table.component.scss']
})
export class EnrollmentsTableComponent  {

  userRole$: Observable< UserRole | undefined>;

  isLoading$: Observable<boolean>;

  enrollments$: Observable<Enrollment[]>;

  displayedColumns: string[] = ['id', 'curso', 'estudiante', 'actions'];

  constructor(private store: Store) {
    this.enrollments$ = this.store.select(selectEnrollments);
    this.isLoading$ = this.store.select(selectEnrollmentsIsLoading)
    
    this.userRole$ = this.store.select(selectAuthUser)
        .pipe(map((u) => u?.role))
  }
}
