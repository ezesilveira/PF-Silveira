import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HrmRoutingModule } from './hrm-routing.module';
import { VacationComponent } from './vacation/vacation.component';
import { OvertimeComponent } from './overtime/overtime.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeTableComponent } from './employee/employee-table/employee-table.component';
import { EmployeeDialogComponent } from './employee/employee-dialog/employee-dialog.component';
import { EmployeeDeleteDialogComponent } from './employee/employee-delete-dialog/employee-delete-dialog.component';
import { AssignmentEmployeeComponent } from './assignment-employee/assignment-employee.component';
import { AssignmentEmployeeTableComponent } from './assignment-employee/assignment-employee-table/assignment-employee-table.component';
import { AssignmentEmployeeDialogComponent } from './assignment-employee/assignment-employee-dialog/assignment-employee-dialog.component';
import { AssignmentEmployeeDeleteDialogComponent } from './assignment-employee/assignment-employee-delete-dialog/assignment-employee-delete-dialog.component';
import { NewsEmployeeComponent } from './news-employee/news-employee.component';
import { HrmComponent } from './hrm.component';
import { DashboardEmployeeComponent } from './dashboard-employee/dashboard-employee.component';
import { OvertimeTableComponent } from './overtime/overtime-table/overtime-table.component';
import { OvertimeDialogComponent } from './overtime/overtime-dialog/overtime-dialog.component';
import { VacationDialogComponent } from './vacation/vacation-dialog/vacation-dialog.component';
import { VacationTableComponent } from './vacation/vacation-table/vacation-table.component';

@NgModule({
  declarations: [
    VacationComponent,
    OvertimeComponent,
    EmployeeComponent,
    EmployeeTableComponent,
    EmployeeDialogComponent,
    EmployeeDeleteDialogComponent,
    AssignmentEmployeeComponent,
    AssignmentEmployeeTableComponent,
    AssignmentEmployeeDialogComponent,
    AssignmentEmployeeDeleteDialogComponent,
    NewsEmployeeComponent,
    HrmComponent,
    DashboardEmployeeComponent,
    OvertimeTableComponent,
    OvertimeDialogComponent,
    VacationDialogComponent,
    VacationTableComponent,
  ],
  imports: [
    CommonModule,
    HrmRoutingModule
  ]
})
export class HrmModule { }
