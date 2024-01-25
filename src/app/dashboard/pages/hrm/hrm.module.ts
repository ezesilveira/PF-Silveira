import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HrmRoutingModule } from './hrm-routing.module';
import { VacationComponent } from './vacation/vacation.component';
import { OvertimeComponent } from './overtime/overtime.component';
import { EmployeeComponent } from './employee/employee.component';


@NgModule({
  declarations: [
    VacationComponent,
    OvertimeComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    HrmRoutingModule
  ]
})
export class HrmModule { }
