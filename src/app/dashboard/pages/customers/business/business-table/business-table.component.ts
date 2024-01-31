import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';
import { BusinessCustomer } from '../models';
import { UserRole } from '../../../users/models';

@Component({
  selector: 'app-business-table',
  templateUrl: './business-table.component.html',
  styleUrls: ['./business-table.component.scss']
})
export class BusinessTableComponent {
  loading = true;

  @Input()
  dataSource: BusinessCustomer[] = [];

  @Output()
  deleteUser: EventEmitter<number> = new EventEmitter<number>();
  
  @Output()
  editUser: EventEmitter<BusinessCustomer> = new EventEmitter<BusinessCustomer>();

  displayedColumns: string[] = ['cod_cliente', 'nombre_cliente', 'ciudad', 'direccion', 'cuit', 'actions'];

  userRole$: Observable< UserRole | undefined>;

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
