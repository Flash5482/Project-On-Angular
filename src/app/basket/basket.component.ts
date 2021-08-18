import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PizzaService} from "../pizza-service.service";
import {MatDialog} from "@angular/material/dialog";
import {DialogOnCreateOrderComponent} from "../dialogWindow/dialog-on-createOrder/dialog-on-createOrder.component";
import {Router} from "@angular/router";

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
  title: string = '';
  orderForm: FormGroup | any;
  userPhone: any;
  user: any;


  arrayOfCity = [
    "Ivano-Frankivsk",
    "Lviv",
    "Kiev"
  ];

  constructor(public service: PizzaService, public dialog: MatDialog, private router: Router) {

  }

  ngOnInit(): void {

    this.orderArray = sessionStorage.getItem("orderData");
    this.orderArray = JSON.parse(this.orderArray);

    if (this.orderArray === null || this.orderArray.length === 0) {
      this.ifExitOrder = false;
    } else {
      this.getTotalPrice();
      this.ifExitOrder = true;
    }

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

    let id = localStorage.getItem('userId');

    this.service.getUser(id).subscribe(response => {
        this.user = JSON.stringify(response);
        this.orderForm.patchValue({
            phoneNumber: JSON.parse(this.user).phoneNumber,
            name: JSON.parse(this.user).name,
            address: {
              city: JSON.parse(this.user).city,
              street: JSON.parse(this.user).street,
              houseNumber: JSON.parse(this.user).house
            }
          }
        );
        if (JSON.parse(this.user).street === '' && JSON.parse(this.user).house === '') {
          this.setPickup();
        }
      }
    )
  }


  get name() {
    return this.orderForm.get("name");
  }

  get phoneNumber() {
    return this.orderForm.get('phoneNumber');
  }
  get comment() {
    return this.orderForm.get('comment');
  }

  get houseNumber() {
    return this.orderForm.get('address').get('houseNumber');
  }

  get street() {
    return this.orderForm.get('address').get('street');
  }
  get city() {
    return this.orderForm.get('address').get('city');
  }

  objectOrder: any;

  mergeArray(name: any, phone: any, comment: any, city: any, street: any, housenumber: any, product: any, price: any) {
    return {
      name, phone, comment, city, street, housenumber, product, price
    }
  }

  onSubmit() {
    this.objectOrder = this.mergeArray(
      this.name.value,
      this.phoneNumber.value,
      this.comment.value,
      this.city.value,
      this.street.value,
      this.houseNumber.value,
      JSON.stringify(this.orderArray),
      this.totalPrice);

    this.service.postOrder(this.objectOrder);
    this.service.showCircle = false;

    this.dialog.open(DialogOnCreateOrderComponent, {width: '450px'});
    setTimeout(() => {
      this.dialog.closeAll();
      this.router.navigate(['pizza']);
    }, 2000)
  }

  setDelivery() {
    this.delivery = true;
    this.pickup = false;
    this.orderForm.get('address').setValue({
      city: "Ivano-Frankivsk",
      street: "",
      houseNumber: ""
    });
  }

  setPickup() {
    this.delivery = false;
    this.pickup = true;
    this.orderForm.get('address').setValue({
      city: "Ivano-Frankivsk",
      street: "def",
      houseNumber: "def"
    });

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

  deleteProductFromBasket(element: any) {
    this.title = element;
  };

  deleteProductFromOrder = () => {
    if (this.orderArray.length === 1) {
      this.service.showCircle = false;
      this.ifExitOrder = false;
    }

    this.orderArray = this.orderArray.filter((item: any) => item.title !== this.title);
    sessionStorage.setItem("orderData", JSON.stringify(this.orderArray));
    this.getTotalPrice();
  }

}
