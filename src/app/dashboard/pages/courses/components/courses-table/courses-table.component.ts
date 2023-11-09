import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../models';

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
}
