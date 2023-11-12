import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styles: [
  ]
})
export class CoursesTableComponent {
  @Input()
  coursesDataSource: Course[] = [];

  @Output()
  deleteCourse: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  editCourse: EventEmitter<number> = new EventEmitter<number>();

  displayedColumns: string[] = ['id', 'name', 'duration', 'actions'];

  constructor(private router: Router){  }

  goToDetail(courseID: number): void {
    this.router.navigate(['dashboard', 'courses', 'detail', courseID],{
      queryParams:{
        search: 'course'
      }
    });
  }
}
