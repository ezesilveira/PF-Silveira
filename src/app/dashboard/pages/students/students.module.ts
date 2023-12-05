import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { EffectsModule } from '@ngrx/effects';
import { StudentEffects } from './store/student.effects';
import { StoreModule } from '@ngrx/store';
import { studentFeature } from './store/student.reducer';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StudentsComponent,
    StudentsTableComponent,
    StudentsDialogComponent,
    StudentDetailComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule,
    StoreModule.forFeature(studentFeature),
    EffectsModule.forFeature([StudentEffects])
  ]
})
export class StudentsModule { }