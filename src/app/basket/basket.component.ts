import {Component, OnInit} from '@angular/core';
import {OrderService} from "../order.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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
  buttonHover: boolean = false;

  orderForm: FormGroup | any;
  arrayOfCity = [
    "Ivano-Frankivsk",
    "Lviv",
    "Kiev"
  ];

  constructor(private service: OrderService) {
    this.orderArray = sessionStorage.getItem("orderData");
    this.orderArray = JSON.parse(this.orderArray);

    if(this.orderArray === null){
      this.ifExitOrder = false;
    }else{
      this.getTotalPrice();
      if (this.orderArray.length === 0 || this.orderArray.length === undefined ) {
        this.ifExitOrder = false;
      } else this.ifExitOrder = true;
    }
  }


  ngOnInit(): void {
    this.orderForm = new FormGroup({
      phoneNumber: new FormControl('',
        [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      name: new FormControl('', [Validators.required, Validators.minLength(2),]),
      comment: new FormControl('', [Validators.maxLength(200)]),
      address: new FormGroup(
        {
          city: new FormControl('Ivano-Frankivsk'),
          street: new FormControl('', [Validators.required]),
          houseNumber: new FormControl('', [Validators.required])
        }
      )
    });
    this.orderForm.valueChanges.subscribe((status: any) => console.log(status));
    console.log(this.orderForm.get('name').statusChanges.subscribe((status: any) => console.log(status)));
  }

  get name() {
    return this.orderForm.get('name');
  }

  get phoneNumber() {
    return this.orderForm.get('phoneNumber');
  }

  get houseNumber() {
    return this.orderForm.get('address').get('houseNumber');
  }

  get street() {
    return this.orderForm.get('address').get('street');
  }

  onSubmit() {
    console.log(this.orderForm.value);

  }

  setDelivery() {
    this.delivery = true;
    this.pickup = false;

    this.orderForm.get('address').setValue({
      city: "",
      street: "",
      houseNumber: ""
    });
  }

  setPickup() {
    this.delivery = false;
    this.pickup = true;

    this.orderForm.get('address').setValue({
      city: "sss",
      street: "ssss",
      houseNumber: "de"

    });

  }


  elementDelete(element: any) {
    this.orderArray = element;
  }

  elementDelete1(element: any) {
    this.ifExitOrder = element;
  }

  changeTotalPrice(element: any) {
    this.totalPrice = element;
  }

  getTotalPrice() {
    if (this.orderArray.length > 0) {
      this.totalPrice = this.orderArray.reduce((current: number, nex: any) => current + nex.price * nex.count, 0
      );
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
