import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';
import { CoursesComponent } from './courses.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { CoursesRoutingModule } from './courses-routing.module';


@NgModule({
  declarations: [
    CoursesDialogComponent,
    CoursesComponent,
    CoursesTableComponent,
    CourseDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoursesRoutingModule
  ],
  exports: [
    CoursesComponent
  ],
})
export class CoursesModule { }
