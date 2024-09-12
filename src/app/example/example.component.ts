import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css'],
  standalone: true,
})
export class ExampleComponent implements OnInit {
  message: string = 'Welcome to the Example Component!';

  constructor() {}

  ngOnInit(): void {
    const shouldShowMessage = true;

    if (shouldShowMessage) {
      console.log(this.message);
    }
  }
}
