import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { UsersModule } from './pages/users/users.module';
import { FontSizeDirective } from '../font-size.directive';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { CoursesModule } from './pages/courses/courses.module';
import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,FontSizeDirective

  ],
  imports: [
    CommonModule, 
    MatSidenavModule, 
    MatCardModule, 
    MatButtonModule, 
    MatToolbarModule,
    MatIconModule,
    UsersModule,
    /* CoursesModule, */
    RouterModule,
    MatListModule,
    DashboardRoutingModule
  ],
  exports: [DashboardComponent],
})
export class DashboardModule { }
