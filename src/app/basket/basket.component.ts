import {Component, OnInit} from '@angular/core';
import {OrderService} from "../order.service";
import {CardBasketComponent} from "./card-basket/card-basket.component";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  orderArray: any;
  totalPrice: any;

  constructor(private service: OrderService) {
    this.orderArray = sessionStorage.getItem("orderData");
    this.orderArray = JSON.parse(this.orderArray);
    this.getTotalPrice();
    console.log(this.orderArray);
  }

  ngOnInit(): void {
  }
  elementDelete(element: any){
    this.orderArray = element;
  }


  getTotalPrice(){
    if (this.orderArray.length > 0) {
      this.totalPrice = this.orderArray.reduce( (current: number, nex: any)=>  current + nex.price*nex.count, 0
      );
      console.log(this.orderArray.reduce((current: number, nex: any) => current + nex.price));

    } else {
      this.totalPrice = 0;
    }
  }

  changeCounts = (symbol: any, title: string) => {
    switch (symbol) {
      case "+": {
        this.orderArray.find((item: any) => item.title === title).count++;
        break;
      }
      case '-': {
        const product = this.orderArray.find((item: any) => item.title === title);

        if (product.count <= 1) {
          product.count = 1;
        } else {
          product.count--;
        }

        break;
      }
      default: {
        if (symbol.target.value <= 1 || isNaN(symbol.target.value)) {
          symbol.target.value = 1;
        }
        this.orderArray.find((item: any) => item.title === title).count = symbol.target.value;

      }
        break;
    }
    this.getTotalPrice();
    sessionStorage.setItem("orderData", JSON.stringify(this.orderArray));
  }


}
