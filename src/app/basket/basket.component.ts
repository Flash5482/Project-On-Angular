import {Component, OnInit} from '@angular/core';
import {OrderService} from "../order.service";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  orderArray: any;

  constructor(private service: OrderService) {
    //this.orderArray=this.service.getOrderData();
    this.orderArray = sessionStorage.getItem("orderData");
    this.orderArray = JSON.parse(this.orderArray);
    console.log(this.orderArray);
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
    sessionStorage.setItem("orderData", JSON.stringify(this.orderArray));
  }

  ngOnInit(): void {
  }

}
