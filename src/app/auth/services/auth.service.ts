import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { User } from 'src/app/dashboard/pages/users/models';
import { environment } from 'src/environments/environment.local';
import { LoginPayload } from '../models';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthActions } from 'src/app/store/auth/auth.actions';
import { selectAuthState, selectAuthUser } from '../../store/auth/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public authUser$ = this.store.select(selectAuthUser) 

  constructor(private httpClient: HttpClient,
              private router: Router,
              private store: Store ) {}

  private handleAuthUser(authUser: User): void {
    /* this._authUser$.next(authUser); */
    this.store.dispatch(AuthActions.setAuthUser({data: authUser}));
    localStorage.setItem('token', authUser.token)
  }

  login(payload: LoginPayload): void {
    const headers = new HttpHeaders({
      'token': localStorage.getItem('token') || 'Sin Token',
    })

    this.httpClient
    .get<User[]>(`${environment.baseUrl}/users?email=${payload.email}&password=${payload.password}`,
      {
        headers: headers
      }
    )
    .subscribe({
      next: (response) => {
        if (!response.length) {
          alert('Usuario o contraseña incorrecta')
        } else {
          const authUser = response[0];
          this.handleAuthUser(authUser);
          this.router.navigate(['/dashboard/home'])
        }
      },
      error: (err) => {
        alert('Error de conexión con la base de datos')
      }
    });
  }
  verifyToken(): Observable<boolean> {
    return this.httpClient
    .get<User[]>(`${environment.baseUrl}/users?token=${localStorage.getItem('token')}`)
    .pipe(
      map((users) => {
        if (!users.length){
          return false;
        } else {
          const authUser = users[0];
          this.handleAuthUser(authUser);
          return true;
        }
      })
    )
  }
  logout(): void {
    this.store.dispatch(AuthActions.resetState());
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}