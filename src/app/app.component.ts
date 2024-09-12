// src/app/app.component.ts

import { Component } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component';  // Import UserListComponent

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [UserListComponent],  // Add UserListComponent here
})
export class AppComponent {
  title = 'linting-formatting-practice';

  constructor() {
    console.log('App component initialized');
  }

  ngOnInit() {
    let x = 10;
    if (x === 10) {  // Use strict equality check
      console.log('x is 10');
    }
  }

  public doSomething(): void {
    const y = 20;
    console.log(y);
  }
}
