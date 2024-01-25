import { Injectable } from '@angular/core';
import { User } from './models';
import { Observable, concatMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  private users : User[] = [];

    getUsers(): Observable<User[]> {
      return this.httpClient.get<User[]>(`${environment.baseUrl}/usuarios`);
    }
    
    createUser(payload: User): Observable<User[]> {
      console.log(payload);
      return this.httpClient
      .post<User>(`${environment.baseUrl}/usuarios`, payload)
      .pipe(concatMap(() => this.getUsers())
        )
    }

    updateUser(userId: number, payload: User): Observable<User[]> {
      return this.httpClient
      .put<User>(`${environment.baseUrl}/usuarios/${userId}`, payload)
        .pipe(concatMap(() => this.getUsers())
        )
    }

    deleteUser(userId: number): Observable<User[]> {
      return this.httpClient
      .delete<User>(`${environment.baseUrl}/usuarios/${userId}`)
        .pipe(concatMap(() => this.getUsers())
        )
    }
  }
