import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-service',
  template: `
    <p>{{ currentDate }}</p>
    <h2>My Service Component</h2>
    <p>Entered in new component!</p>
    <p>Today's date: {{ currentDate }}</p>
    <p>Component Created</p>
  `,
  styleUrls: ['./my-service.component.css']
})
export class MyServiceComponent implements OnInit {
  currentDate: string = '';

  ngOnInit() {
    this.currentDate = new Date().toString();
  }
}
