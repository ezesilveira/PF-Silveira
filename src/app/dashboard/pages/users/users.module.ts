import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { UsersTableComponent } from './components/users-table/users-table.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    UsersComponent,
    UsersDialogComponent,
    UsersTableComponent,
    UserDetailComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    MatButtonModule,
    UsersRoutingModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
