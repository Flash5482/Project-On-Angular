import { Component, OnInit } from '@angular/core';
import {PizzaService} from "../pizza-service.service";

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.scss']
})
export class DessertComponent implements OnInit {

  desertArray: [] | any;
  setDataToStorage: any;
  constructor(public pizzaServ: PizzaService) {
  }

  ngOnInit(): void {
    this.pizzaServ.showSearchInput = true;

    this.setDataToStorage = this.pizzaServ.setDataToStorage;
    this.desertArray = this.pizzaServ.setProductsToSessionStorage('desserts');
  }

}
