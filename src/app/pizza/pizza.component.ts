import {Component, OnInit} from '@angular/core';
import {PizzaService} from "../pizza-service.service";

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit{
  pizzaArray: [] | any;
  setDataToStorage: any;

  constructor(public service: PizzaService) {

  }

  ngOnInit(): void {
    this.service.showSearchInput = true;
    this.setDataToStorage = this.service.setDataToStorage;
    this.pizzaArray = this.service.setProductsToSessionStorage('pizza');
  }
}
