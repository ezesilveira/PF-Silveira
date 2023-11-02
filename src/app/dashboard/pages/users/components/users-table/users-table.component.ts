import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styles: [
  ]
})
export class UsersTableComponent {
  @Input()
  dataSource: User[] = [];

  @Output()
  deleteUser: EventEmitter<number> = new EventEmitter<number>();
  
  @Output()
  editUser: EventEmitter<User> = new EventEmitter<User>();

  displayedColumns: string[] = ['id', 'fullname','email', 'actions'];

  constructor(private router: Router){  }

  goToDetail(userID: number): void {
    this.router.navigate(['dashboard', 'users', 'detail', userID],{
      queryParams:{
        search: 'Hola Mundo'
      }
    });
  }
}