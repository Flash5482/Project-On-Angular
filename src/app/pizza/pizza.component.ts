import {Component, OnInit} from '@angular/core';
import {PizzaService} from "../pizza-service.service";

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.scss']
})
export class PizzaComponent implements OnInit {
  pizzaArray: [] | any;


  constructor(public pizzaServ: PizzaService) {
  }

  setDataToStorage(arrayForOrderData:[] | any,array:[] | any){
    if (sessionStorage.getItem("orderData") === null) {
      sessionStorage.setItem("orderData", JSON.stringify([arrayForOrderData]));
    } else {
      array = sessionStorage.getItem("orderData");
      array = JSON.parse(array);
      sessionStorage.setItem("orderData",JSON.stringify([...array, arrayForOrderData]));
    }
  }

  ngOnInit(): void {
    this.pizzaArray = this.pizzaServ.getArrayOfPizza();
  }

}
