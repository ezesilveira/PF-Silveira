import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { BusinessCustomer } from './models';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent {
  userName = '';
  businessCustomer$: Observable<BusinessCustomer[]>;

  constructor(
    private matDialog : MatDialog,
    private CustomersService : CustomersService,
    /* private NotifierService : NotifierService */
  ){
    this.businessCustomer$ = this.CustomersService.getCustomersBusinessEntry();
    /* this.UsersService.loadUsers(); */
    /* this.NotifierService.showSuccess('Exito', 'Se Cargaron los usuarios') */
  }

}
