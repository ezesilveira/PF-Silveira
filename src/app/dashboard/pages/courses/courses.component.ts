import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';
import { Courses } from './models';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  
courseName = '';


courses: Courses[] = [
  {
    id: 1,
    name: 'Introducción STAR WARS',
    duration: '3 Meses'
  },
  {
    id: 2,
    name: 'El Universo Expandido',
    duration: '2 Meses'
  },
  {
    id: 3,
    name: 'Peliculas y Series',
    duration: '3 Meses',
  }
]

  constructor(
    private matDialog : MatDialog
  ){

  }
  openCoursesDialog (): void {
    this.matDialog.open(CoursesDialogComponent)
    .afterClosed()
    .subscribe({
      next: (v) => {
        console.log('Valor: ', v);
        if (!!v) {
          this.courseName = v;
        }
      },
    });
  }
}
