import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { StudentActions } from './store/student.actions';
import { MatDialog } from '@angular/material/dialog';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {
  constructor(private store: Store,
              private dialog: MatDialog) {
    this.store.dispatch(StudentActions.loadStudents());
  }
  addStudent(): void {
    this.dialog.open(StudentsDialogComponent);
  }
}
