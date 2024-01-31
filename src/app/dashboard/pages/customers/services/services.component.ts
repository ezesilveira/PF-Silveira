import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomersService } from '../customers.service';
import { MatDialog } from '@angular/material/dialog';
import { ServicesDialogComponent } from './services-dialog/services-dialog.component';
import { CustomersServiceEntry } from './models';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  userName = '';
  customersService$: Observable<CustomersServiceEntry[]>;

  constructor(
    private matDialog : MatDialog,
    private CustomersService : CustomersService,
    /* private NotifierService : NotifierService */
  ){
    this.customersService$ = this.CustomersService.getCustomersServiceEntry();
    /* this.UsersService.loadUsers(); */
    /* this.NotifierService.showSuccess('Exito', 'Se Cargaron los usuarios') */
  }
/*   addCustomersService (): void {
    this.matDialog.open(ServicesDialogComponent)
    .afterClosed()
    .subscribe({
      next: (valorFormulario) => {
        if (!!valorFormulario) {
          this.customersService$ = this.CustomersService.createUser(valorFormulario);
        }
      },
    });
  } */

/*   OnEditCustomersService(user: User): void {
    this.matDialog.open(UsersDialogComponent, {
      data: user,
    }).afterClosed().subscribe({
      next: (valorFormulario) => {
        if (!!valorFormulario) {
          this.customersService$ = this.CustomersService.updateUser(user.id, valorFormulario)
        }
      }
    });
  }

  onDeleteCustomersService(userId: number): void {
    const dialogRef = this.matDialog.open(UserDeleteDialogComponent);
  
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Lógica para borrar el usuario
        this.customersService$ = this.CustomersService.deleteUser(userId);
        /* this.NotifierService.showSuccess('Exito', 'Se Borro el usuario')
      }
    });
  } */
}
