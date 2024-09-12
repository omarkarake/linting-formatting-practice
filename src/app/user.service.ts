// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { User } from './models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [
    // Use the User model for type safety
    { name: 'John', age: 30 },
    { name: 'Jane', age: 25 },
  ];

  constructor() {}

  getUsers(): User[] {
    // Specify the return type
    return this.users;
  }

  addUser(user: User): void {
    // Ensure the parameter follows the User model
    this.users.push(user);
  }
}
