import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../models';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';

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

  userRole$: Observable<'ADMIN' | 'EMPLOYEE' | undefined>;

  constructor(private router: Router,
              private store: Store
    ){ 
      this.userRole$ = this.store.select(selectAuthUser)
        .pipe(map((u) => u?.role))
    }
  ngOnInit() {
  setTimeout(() => {
    this.loading = false;
  }, 1200);
  }

  goToDetail(userID: number): void {
    this.router.navigate(['dashboard', 'users', 'detail', userID],{
      queryParams:{
        search: 'User'
      }
    });
  }
}