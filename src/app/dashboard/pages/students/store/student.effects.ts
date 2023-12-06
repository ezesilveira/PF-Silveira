import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import { StudentActions } from './student.actions';
import { HttpClient } from '@angular/common/http';
import { Student, createStudent } from '../models';
import { environment } from 'src/environments/environment.local';


@Injectable()
export class StudentEffects {

  loadStudents$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(StudentActions.loadStudents),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        this.getStudents().pipe(
          map(data => StudentActions.loadStudentsSuccess({ data })),
          catchError(error => of(StudentActions.loadStudentsFailure({ error }))))
      )
    );
  });

  loadStudentToEdit$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StudentActions.loadStudentToEdit),
      concatMap((action) =>
        this.getStudentToEdit(action.studentId).pipe(
          map(data => StudentActions.loadStudentToEditSuccess({ data })),
          catchError(error => of(StudentActions.loadStudentToEditFailure({ error }))))
      )
    );
  });

  updateStudentToEdit$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StudentActions.updateStudentToEdit),
      concatMap((action) =>
        this.updateStudentToEdit(action.studentId, action.payload).pipe(
          mergeMap(() => [
            StudentActions.clearStudentToEdit(),
            StudentActions.loadStudents()
          ]),
          catchError(error => of(StudentActions.updateStudentToEditFailure({ error }))))
      )
    );
  });

  createStudent$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(StudentActions.createStudent),
      concatMap((action) =>
        this.createStudent(action.payload).pipe(
          map(data => StudentActions.loadStudents()),
          catchError(error => of(StudentActions.createStudentFailure({ error }))))
      )
    );
  });

  deleteStudent$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(StudentActions.deleteStudent),
      concatMap((action) =>
        this.deleteStudent(action.studentId).pipe(
          map(data => StudentActions.loadStudents()),
          catchError(error => of(StudentActions.deleteStudentFailure({ error }))))
      )
    );
  });

  

  constructor(private actions$: Actions,
              private httpClient: HttpClient) {}

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${environment.baseUrl}/students`)
  }

  getStudentToEdit(studentId: number): Observable<Student> {
    console.log(studentId);
    return this.httpClient.get<Student>(`${environment.baseUrl}/students/${studentId}`)
  }

  updateStudentToEdit(studentId: number, payload: Student): Observable<Student> {
    console.log(studentId);
    return this.httpClient.put<Student>(`${environment.baseUrl}/students/${studentId}`, payload)
  }

  createStudent(payload: createStudent): Observable<createStudent> {
    return this.httpClient.post<createStudent>(`${environment.baseUrl}/students`, payload)
  }

  deleteStudent(studentId: number): Observable<number> {
    return this.httpClient.delete<number>(`${environment.baseUrl}/students/${studentId}`)
  }
}
