import {Component, OnInit} from '@angular/core';
import {PizzaService} from "../pizza-service.service";

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  pizzaArray: [] | any;
  setDataToStorage: any;


  constructor(public pizzaServ: PizzaService) {
    this.setDataToStorage = this.pizzaServ.setDataToStorage;

    this.pizzaArray = pizzaServ.setProductsToSessionStorage('pizza');


  }

  ngOnInit(): void {
  }




}
