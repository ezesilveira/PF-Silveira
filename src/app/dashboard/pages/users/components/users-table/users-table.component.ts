import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styles: [
  ]
})
export class UsersTableComponent implements OnInit {

  loading = true;

  @Input()
  dataSource: User[] = [];

  @Output()
  deleteUser: EventEmitter<number> = new EventEmitter<number>();
  
  @Output()
  editUser: EventEmitter<User> = new EventEmitter<User>();

  displayedColumns: string[] = ['id', 'fullname','email', 'actions'];

  constructor(private router: Router){  }
  ngOnInit() {
  setTimeout(() => {
    this.loading = false;
    // Aquí puedes cargar la lista de usuarios desde tu servicio o fuente de datos
  }, 1500);
  }

  goToDetail(userID: number): void {
    this.router.navigate(['dashboard', 'users', 'detail', userID],{
      queryParams:{
        search: 'User'
      }
    });
  }
}