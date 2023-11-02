import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule as FormsPageModule } from './pages/forms/forms.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { UsersModule } from './pages/users/users.module';
import { CoursesModule } from './pages/courses/courses.module';
import { FontSizeDirective } from '../font-size.directive';
import { RouterModule } from '@angular/router';
import {Component} from '@angular/core';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    DashboardComponent,FontSizeDirective

  ],
  imports: [
    CommonModule, 
    MatSidenavModule, 
    MatCardModule, 
    MatButtonModule, 
    FormsPageModule, 
    MatToolbarModule,
    MatIconModule,
    UsersModule,
    CoursesModule,
    RouterModule,
    MatListModule
  ],
  exports: [DashboardComponent],
})
export class DashboardModule { }
