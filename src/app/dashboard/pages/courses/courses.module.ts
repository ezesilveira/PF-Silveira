import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';
import { CoursesComponent } from './courses.component';
import { CoursesTableComponent } from './components/courses-table/courses-table.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CoursesDialogComponent,
    CoursesComponent,
    CoursesTableComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    CoursesComponent
  ],
})
export class CoursesModule { }
