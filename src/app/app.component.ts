// src/app/app.component.ts

import { Component, OnInit } from '@angular/core';
import { UserListComponent } from './user-list/user-list.component'; // Import UserListComponent
import { ExampleComponent } from './example/example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [UserListComponent, ExampleComponent], // Add UserListComponent here
})
export class AppComponent implements OnInit {
  title = 'linting-formatting-practice';

  constructor() {
    console.log('App component initialized');
  }

  ngOnInit() {
    const x: number = 10;
    if (x === 10) {
      // Use strict equality check
      console.log('x is 10');
    }
  }

  public doSomething(): void {
    const y = 20;
    console.log(y);
  }
}
