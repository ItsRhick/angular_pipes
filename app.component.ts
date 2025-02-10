import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyserviceService } from './myservice.service';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { MyServiceComponent } from './my-service/my-service.component';

@Component({
  selector: 'app-root',
  standalone: true, 
  imports: [CommonModule, NewCmpComponent, MyServiceComponent], 
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
