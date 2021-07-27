import {Component, OnInit} from '@angular/core';
import {OrderService} from "../order.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {
  orderArray: any;
  ifExitOrder: boolean = true
  totalPrice: any;
  delivery: boolean = true;
  pickup: boolean = false;

  arrayOfCity = [
    "Ivano-Frankivsk",
    "Lviv",
    "Kiev"
  ];
  constructor(private service: OrderService) {

    this.orderArray = sessionStorage.getItem("orderData");
    this.orderArray = JSON.parse(this.orderArray);
    this.getTotalPrice();

    if (this.orderArray.length == 0) {
      this.ifExitOrder = false;
    } else this.ifExitOrder = true;
  }
  ngOnInit(): void {
  }


  orderForm = new FormGroup({
    phoneNumber: new FormControl(''),
    name: new FormControl(''),
    comment: new FormControl(''),
    address: new FormGroup(
      {
        city: new FormControl(''),
        street: new FormControl(''),
        houseNumber: new FormControl('')
      }
    )

  });


  setDelivery(){
    this.delivery=true;
    this.pickup=false;
  }
  setPickup(){
    this.delivery=false;
    this.pickup=true;
  }
  onSubmit(){

  }


  elementDelete(element: any) {
    this.orderArray = element;
  }

  getTotalPrice() {
    if (this.orderArray.length > 0) {
      this.totalPrice = this.orderArray.reduce((current: number, nex: any) => current + nex.price * nex.count, 0
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
