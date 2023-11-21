import { Component } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { UsersDialogComponent } from './components/users-dialog/users-dialog.component';
import { User } from './models';
import { UsersService } from './users.service'; 
import { NotifierService } from '../../../core/services/notifier.service';
import { Observable, filter, map, of, switchMap } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
userName = '';
users$: Observable<User[]>;

  constructor(
    private matDialog : MatDialog,
    private UsersService : UsersService,
    private NotifierService : NotifierService
  ){
    this.users$ = this.UsersService.getUsers();
    /* this.UsersService.loadUsers(); */
    /* this.NotifierService.showSuccess('Exito', 'Se Cargaron los usuarios') */
  }
  addUser (): void {
    this.matDialog.open(UsersDialogComponent)
    .afterClosed()
    .subscribe({
      next: (valorFormulario) => {
        if (!!valorFormulario) {
          this.users$ = this.UsersService.createUser(valorFormulario);
        }
      },
    });
  }


  OnEditUser(user: User): void {
    this.matDialog.open(UsersDialogComponent, {
      data: user,
    }).afterClosed().subscribe({
      next: (valorFormulario) => {
        if (!!valorFormulario) {
          this.users$ = this.UsersService.updateUser(user.id, valorFormulario)
        }
      }
    });
  }

  onDeleteUser(userId: number): void {
    if (confirm('Esta seguro de borrar este usuario')) {
      this.users$ = this.UsersService.deleteUser(userId);
  }  
}
}
