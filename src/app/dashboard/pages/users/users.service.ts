import { Injectable } from '@angular/core';
import { User } from './models';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { 
    this.sendNotification$.subscribe({
      next: (message) => alert(message),
    });
  }

  private users : User[] = [
    {
      id: 1,
      name: 'Luke',
      lastName: 'Skywalker',
      email: 'luke@example.com', 
    },
    {
      id: 2,
      name: 'Leia',
      lastName: 'Organa',
      email: 'leia@example.com',
    },
    {
      id: 3,
      name: 'Obi-Wan',
      lastName: 'Kenobi',
      email: 'obi-wan@example.com',
    }
  ];

    private sendNotification$ = new Subject<string>();

    private users$ = new BehaviorSubject<User[]>([]);

    sendNotification(notification: string) : void {
      this.sendNotification$.next(notification)
    }

    loadUsers () : void {
      this.users$.next(this.users);
    }

    getUsers(): BehaviorSubject<User[]> {
      return this.users$
    }

    addUser(newUser: User): void {
      // Agregar el nuevo usuario a la lista actual de usuarios
      this.users.push(newUser);
      // Emitir la lista actualizada a través del BehaviorSubject
      this.users$.next(this.users);
    }
  }
