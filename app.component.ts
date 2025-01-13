import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular Pipes Demonstration';

  // Properties for Pipes
  text = 'Angular Pipes Example';
  currentDate = new Date();
  price = 1234.56;
  decimalNumber = 12345.6789;
  jsonData = { name: 'John', age: 30, occupation: 'Developer' };
  array = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];
}
