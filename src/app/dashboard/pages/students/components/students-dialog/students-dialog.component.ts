import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { StudentActions } from '../../store/student.actions';
import { Student, createStudent } from '../../models';
import { Observable, take } from 'rxjs';
import { selectStudentToEdit } from '../../store/student.selectors';
import { Actions, ofType } from '@ngrx/effects';
import { EnrollmentActions } from '../../../enrollments/store/enrollment.actions';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-students-dialog',
  templateUrl: './students-dialog.component.html',
  styleUrls: ['./students-dialog.component.scss']
})
export class StudentsDialogComponent implements OnInit { 

  studentToEdit$: Observable<Student | null>;

  nameControl= new FormControl<string | null>(null);
  lastNameControl= new FormControl<string | null>(null);
  emailControl= new FormControl<string | null>(null);
  passwordControl= new FormControl<string | null>(null);
  tokenControl= new FormControl<string | null>(null);
  roleControl= new FormControl<string | null>(null);

  studentForm= new FormGroup({
    name: this.nameControl,
    lastName: this.lastNameControl,
    email: this.emailControl,
    password: this.passwordControl,
    token: this.tokenControl,
    role: this.roleControl
  });

constructor(private store: Store, 
            private action$: Actions, 
            private matDialogRef : MatDialogRef<StudentsDialogComponent>){
  this.studentToEdit$ = this.store.select(selectStudentToEdit);
  this.action$.pipe(ofType(StudentActions.loadStudents), take (1))
  .subscribe({
    next: () => this.matDialogRef.close(),
  })
}
  ngOnInit(): void {
    this.studentToEdit$.subscribe(studentToEdit => {
      if (studentToEdit) {
        this.populateForm(studentToEdit);
      }
    });
  }

onSubmit(): void{
    
  const formData = this.studentForm.getRawValue();

  // Obtén el id del estudiante a editar desde studentToEdit$
  this.studentToEdit$.pipe(take(1)).subscribe(studentToEdit => {
    const studentId = studentToEdit?.id;

    if (studentId) {
      // Si hay un id, ejecutar la acción de actualización
      this.store.dispatch(
        StudentActions.updateStudentToEdit({ studentId, payload: formData })
      );
    } else {
      // Si no hay un id, ejecutar la acción de creación
      this.store.dispatch(StudentActions.createStudent({ payload: formData }));
    }
  });

  /*  this.store.dispatch(StudentActions.createStudent({ 
    payload: this.studentForm.getRawValue() 
  })); */
  }

  private populateForm(student: createStudent): void {
    this.studentForm.patchValue({
      name: student.name,
      lastName: student.lastName,
      email: student.email,
      password: student.password,
      token: student.token,
      role: student.role
    });
  }
}
