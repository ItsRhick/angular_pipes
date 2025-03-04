import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {
  currentDate: string = '';

  constructor(private myService: MyserviceService) {}

  ngOnInit() {
    this.currentDate = this.myService.getCurrentDate();
  }
}
