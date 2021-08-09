import { Component, OnInit } from '@angular/core';
import {PizzaService} from "../pizza-service.service";

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.scss']
})
export class DrinksComponent implements OnInit {

  drinksArray: [] | any;
  setDataToStorage: any;
  constructor(public pizzaServ: PizzaService) {
    this.setDataToStorage = this.pizzaServ.setDataToStorage;

    this.drinksArray = pizzaServ.setProductsToSessionStorage('drinks');

  }
  ngOnInit(): void {
  }

}
