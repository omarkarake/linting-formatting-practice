// src/app/user-list/user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../models/users.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list',
  template: `
    <ul>
      <li *ngFor="let user of users">{{ user.name }} ({{ user.age }})</li>
    </ul>
  `,
  styles: [
    `
      ul {
        list-style-type: none;
        padding: 0;
      }
      li {
        margin-bottom: 10px;
      }
    `,
  ],
  standalone: true,
  imports: [CommonModule],
})
export class UserListComponent implements OnInit {
  users: User[] = []; // Use the User model for type safety

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getUsers();
  }
}
