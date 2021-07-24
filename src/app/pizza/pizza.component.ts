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
  array: [] | any;
  setDataToStorage(arrayForOrderData: [] | any) {

    if (sessionStorage.getItem("orderData") === null) {
      sessionStorage.setItem("orderData", JSON.stringify([arrayForOrderData]));
    } else {
      this.array = sessionStorage.getItem("orderData");
      this.array = JSON.parse( this.array);
      const productOne =  this.array.find((item: any) => item.title === arrayForOrderData.title);
      if (productOne) {
        productOne.count += arrayForOrderData.count;
        sessionStorage.setItem("orderData", JSON.stringify( this.array));
      } else {
        sessionStorage.setItem("orderData", JSON.stringify([...this.array, arrayForOrderData]));
      }
    }
  }

  ngOnInit(): void {
    this.pizzaArray = this.pizzaServ.getArrayOfPizza();
  }

}
