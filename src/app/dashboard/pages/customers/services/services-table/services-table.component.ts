import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { UserRole } from '../../../users/models';
import { selectAuthUser } from 'src/app/store/auth/auth.selectors';
import { CustomersServiceEntry } from '../models';

@Component({
  selector: 'app-services-table',
  templateUrl: './services-table.component.html',
  styleUrls: ['./services-table.component.scss']
})
export class ServicesTableComponent implements OnInit {

  loading = true;

  @Input()
  dataSource: CustomersServiceEntry[] = [];

  @Output()
  deleteUser: EventEmitter<number> = new EventEmitter<number>();
  
  @Output()
  editUser: EventEmitter<CustomersServiceEntry> = new EventEmitter<CustomersServiceEntry>();

  displayedColumns: string[] = ['cod_cliente', 'nombre_cliente', 'cod_servicio', 'servicio', 'ciudad', 'tipo_servicio', 'fecha_inicio', 'actions'];

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
  }, 1000);
  }

  goToDetail(userID: number): void {
    this.router.navigate(['dashboard', 'users', 'detail', userID],{
      queryParams:{
        search: 'User'
      }
    });
  }
}
