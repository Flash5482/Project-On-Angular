import { Component } from '@angular/core';
import {PizzaService} from "./pizza-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  orderArray: any;

  constructor(public service: PizzaService) {
  }
  ngOnInit(): void {
    this.orderArray = sessionStorage.getItem("orderData");
    this.orderArray = JSON.parse(this.orderArray);

    if (this.orderArray.length > 0) {
      this.service.showCircle = true;
    } else this.service.showCircle = false;

  }

  title = 'Project-On-Angular';
}
