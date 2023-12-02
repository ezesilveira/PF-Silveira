import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { EnrollmentActions } from './enrollment.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';
import { Enrollment } from '../models';


@Injectable()
export class EnrollmentEffects {

  loadEnrollments$ = createEffect(() => {
    return this.actions$.pipe(

      // Filtra de todas las acciones, solo aquellas de tipo EnrollmentActions.loadEnrollments
      ofType(EnrollmentActions.loadEnrollments),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.getEnrollments().pipe(
            //Si la peticion sale OK, dispara la accion EnrollmentActions.loadEnrollmentsSuccess
          map(data => EnrollmentActions.loadEnrollmentsSuccess({ data })),
            //Si la peticion sale NG, dispara la accion EnrollmentActions.loadEnrollmentsFailure
          catchError(error => of(EnrollmentActions.loadEnrollmentsFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions, private httpClient: HttpClient) {}

  getEnrollments(): Observable<Enrollment[]> {
    return this.httpClient.get<Enrollment[]>
    (`${environment.baseUrl}/enrollments?_expand=course&_expand=student`)
  }
}
