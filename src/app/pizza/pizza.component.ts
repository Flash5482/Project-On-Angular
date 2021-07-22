import {Component, OnInit} from '@angular/core';
import {PizzaService} from "../pizza-service.service";

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  pizzaArray:[] | any;

  constructor(public pizzaServ: PizzaService) {
    console.log(this.pizzaArray);
  }
  ngOnInit(): void {
    this.pizzaArray = this.pizzaServ.getArrayOfPizza();
  }





}
