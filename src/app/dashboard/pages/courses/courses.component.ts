import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';
import { Course } from './models';
import { CoursesService } from './courses.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

courses$ : Observable<Course[]>;

  constructor(
    private matDialog : MatDialog,
    private coursesService: CoursesService
  ){
this.courses$ = this.coursesService.getCourses$();
  }
  
  generateAlphanumericID(length: number): string {
    const charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    const values = new Uint8Array(length);
  
    crypto.getRandomValues(values);
  
    for (let i = 0; i < length; i++) {
      id += charset[values[i] % charset.length];
    }
  
    return id;
  }

  addCourse (): void {
    const idRandom = this.generateAlphanumericID(8);
    console.log(idRandom);
    this.matDialog.open(CoursesDialogComponent).afterClosed().subscribe({
      next: (result) => {
        if (result) {
          this.courses$ = this.coursesService.createCourse$({
            //id: idRandom,
            id: new Date().getDate(),
            name: result.name,
            duration: result.duration,
          })
        }
      }
    });
  }

  onDeleteCourse (courseId: number): void {
    this.courses$ = this.coursesService.deleteCourse$(courseId)
  }

  OnEditCourse (courseId: number): void {
    this.matDialog
    .open(CoursesDialogComponent, {
      data: courseId,
    })
    .afterClosed()
    .subscribe({
      next: (result) => {
        if (!!result) {
          this.courses$ = this.coursesService.editCourse$(courseId, result);
        }
      }
    });
  }

}