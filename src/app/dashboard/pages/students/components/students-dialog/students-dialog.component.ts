import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { StudentActions } from '../../store/student.actions';
import { Student, createStudent } from '../../models';
import { Observable } from 'rxjs';
import { selectStudentToEdit } from '../../store/student.selectors';

@Component({
  selector: 'app-students-dialog',
  templateUrl: './students-dialog.component.html',
  styleUrls: ['./students-dialog.component.scss']
})
export class StudentsDialogComponent implements OnInit { 

  studentToEdit$: Observable<createStudent | null>;

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

constructor(private store: Store){
  this.studentToEdit$ = this.store.select(selectStudentToEdit);
  console.log(this.studentToEdit$);
}
  ngOnInit(): void {
    this.studentToEdit$.subscribe(studentToEdit => {
      if (studentToEdit) {
        this.populateForm(studentToEdit);
      }
    });
  }

onSubmit(): void{
  this.store.dispatch(StudentActions.createStudent({ 
    payload: this.studentForm.getRawValue() 
  }));
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
