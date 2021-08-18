import { Component, OnInit } from '@angular/core';
import {PizzaService} from "../pizza-service.service";

@Component({
  selector: 'app-salad',
  templateUrl: './salad.component.html',
  styleUrls: ['./salad.component.scss']
})
export class SaladComponent implements OnInit {

  saladArray: [] | any;
  setDataToStorage: any;
  constructor(public pizzaServ: PizzaService) {

  }

  ngOnInit(): void {
    this.setDataToStorage = this.pizzaServ.setDataToStorage;
    this.saladArray = this.pizzaServ.setProductsToSessionStorage('salad');
  }

}
