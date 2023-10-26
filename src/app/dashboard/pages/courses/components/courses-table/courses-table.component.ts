import { Component, Input } from '@angular/core';
import { Courses } from '../../models';

@Component({
  selector: 'app-courses-table',
  templateUrl: './courses-table.component.html',
  styles: [],
})
export class CoursesTableComponent {
  @Input()
  coursesDataSource: Courses[] = [];

  displayedColumns: string[] = ['id', 'name','duration', 'actions'];
}
