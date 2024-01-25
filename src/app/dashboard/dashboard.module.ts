import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FontSizeDirective } from '../font-size.directive';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MatMenuModule } from '@angular/material/menu';

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
    RouterModule,
    MatListModule,
    DashboardRoutingModule,
    MatMenuModule
  ],
  exports: [DashboardComponent],
})
export class DashboardModule { }
