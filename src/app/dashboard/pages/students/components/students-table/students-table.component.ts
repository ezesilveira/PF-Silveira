import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { UserRole } from '../../../users/models';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';
import { Student } from '../../models';
import { selectStudents, selectStudentsIsLoading } from '../../store/student.selectors';
import { StudentActions } from '../../store/student.actions';
import { MatDialog } from '@angular/material/dialog';
import { StudentsDialogComponent } from '../students-dialog/students-dialog.component';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent {

  userRole$: Observable< UserRole | undefined>;
  isLoading$: Observable<boolean>;
  students$: Observable<Student[]>;
  /* studentToEdit$: Observable<createStudent[]>; */

  displayedColumns: string[] = ['id', 'fullname','email', 'actions'];

  constructor(private store: Store,
              private matDialog: MatDialog) {

    this.students$ = this.store.select(selectStudents);
    this.isLoading$ = this.store.select(selectStudentsIsLoading);

    this.userRole$ = this.store.select(selectAuthUser)
        .pipe(map((u) => u?.role));

   /*  this.studentToEdit$ = this.store.select(selectStudentToEdit); */
  }

  deleteUser(studentId: number): void {
    this.store.dispatch(StudentActions.deleteStudent({studentId}))
  }
  studentToEdit(studentId: number): void {
    this.store.dispatch(StudentActions.loadStudentToEdit({studentId}))
    this.matDialog.open(StudentsDialogComponent, {
      data: { studentId: studentId }
    }).afterClosed().subscribe(result => {
      console.log('Modal cerrado');
    }
  )}

}
