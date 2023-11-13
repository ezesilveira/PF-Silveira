import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, map } from 'rxjs';
import { User } from 'src/app/dashboard/pages/users/models';
import { environment } from 'src/environments/environment.local';
import { LoginPayload } from '../models';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authUser$ = new BehaviorSubject<User | null>(null);
  public authUser$ = this._authUser$.asObservable(); 

  constructor(private httpClient: HttpClient,
              private router: Router) {}

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
          this._authUser$.next(authUser);
          localStorage.setItem('token', authUser.token)
          this.router.navigate(['/dashboard/home'])
        }
      },
      error: (err) => {
        alert('Error de conexión')
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
          this._authUser$.next(authUser);
          localStorage.setItem('token', authUser.token)
          return true;
        }
      })
    )
  }
  logout(): void {
    this._authUser$.next(null);
    localStorage.removeItem('token');
    this.router.navigate(['/auth/login']);
  }
}