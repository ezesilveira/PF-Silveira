import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of, forkJoin } from 'rxjs';
import { EnrollmentActions } from './enrollment.actions';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.local';
import { CreateEnrollmentPayload, Enrollment } from '../models';
import { Course } from '../../courses/models';
import { Student } from '../../students/models';


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

  loadEnrollmentDialogOptions$ = createEffect(() => 
  this.actions$.pipe(
    // Filtro las acciones del tipo EnrollmentActions.loadEnrollmentDialogOptions
    ofType(EnrollmentActions.loadEnrollmentDialogOptions),
    concatMap(() => this.getEnrollmentDialogOptions().pipe(
      map((response) =>
      //Si la peticion sale OK, disparo el loadEnrollmentDialogOptionsSuccess
      EnrollmentActions.loadEnrollmentDialogOptionsSuccess(response)
      ),
      catchError((error) => 
        of(EnrollmentActions.loadEnrollmentDialogOptionsFailure({ error: error }))
      )
    ))
  ));

  createEnrollment$ = createEffect(() => 
    this.actions$.pipe(
        ofType(EnrollmentActions.createEnrollment),
        concatMap((action) => {
          return this.createEnrollment(action.payload).pipe(
            map((data) => EnrollmentActions.loadEnrollments()),
            catchError((error) => of(EnrollmentActions.createEnrollmentFailure(error)))
          )
        })
    )
  );
  

  constructor(private actions$: Actions, private httpClient: HttpClient) {}

  createEnrollment(payload:CreateEnrollmentPayload): Observable<Enrollment> {
    return this.httpClient.post<Enrollment>(`${environment.baseUrl}/enrollments`, payload)
  }

  getEnrollmentDialogOptions(): Observable<{
    courses: Course[];
    students: Student[];
  }> {
    return forkJoin([
      this.httpClient.get<Course[]>(`${environment.baseUrl}/courses`),
      this.httpClient.get<Student[]>(`${environment.baseUrl}/students?role=STUDENT`)
    ]).pipe(
      map((response) => {
        return {
          courses: response[0],
          students: response[1]
        }
      })
    )
  }

  getEnrollments(): Observable<Enrollment[]> {
    return this.httpClient.get<Enrollment[]>
    (`${environment.baseUrl}/enrollments?_expand=course&_expand=student`)
  }
}
