import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';
import { Course } from './models';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  
courseName = '';


courses: Course[] = [
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
          this.courses = [
            ...this.courses,
            {
              ...v,
            id: new Date().getTime(),
            }
          ]
        }
      },
    });
  }
  OnEditCourse(course: Course): void {
    this.matDialog.open(CoursesDialogComponent, {
      data: course
    }).afterClosed().subscribe({
      next: (v) => {
        if (!!v) {

          const arrayNuevo = [...this.courses];
          const indiceToEdit = arrayNuevo.findIndex((u) => u.id === course.id);
          arrayNuevo[indiceToEdit] = {...arrayNuevo[indiceToEdit], ...v}  

          this.courses = [...arrayNuevo]
        }
      }
    });
  }


  onDeleteCourse(courseId: number): void {
    if (confirm('Esta seguro de borrar este curso?')) {
    this.courses = this.courses.filter((u) => u.id !== courseId)
  }
}
}
